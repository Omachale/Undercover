import { useEffect, useMemo, useRef, useState } from 'react';
import './FlipCardImage.css';
import glassImage from '../Assets/Images/Glass.png';
import type { Lang } from '../types';

interface FlipCardImageProps {
  isFlipped: boolean;
  frontImage: string;
  backImage: string;
  backText: string;
  translations?: Record<Lang, string> | null;
  languages?: { code: Lang; label: string }[];
  onTransitionEnd?: (event: React.TransitionEvent<HTMLDivElement>) => void;
}

// Glass.png is 245×251px. These constants describe the lens aperture within that image.
// Tweak GLASS_CENTER_* and GLASS_APERTURE_RADIUS to calibrate alignment.
const GLASS_IMG_W = 245;
const GLASS_IMG_H = 251;
const GLASS_CENTER_X = 90;
const GLASS_CENTER_Y = 91;
const GLASS_APERTURE_RADIUS = 81;
const GLASS_X_FRAC = GLASS_CENTER_X / GLASS_IMG_W;
const GLASS_Y_FRAC = GLASS_CENTER_Y / GLASS_IMG_H;

// Aperture starts centred horizontally, mid-lower on the card
const DEFAULT_LENS = { x: 50, y: 58 };

// Handle offset: the handle is below and to the left of the lens center,
// so we offset the focal point so the finger touches the handle instead.
const HANDLE_X_OFFSET = -35; // percent of card width (negative = left)
const HANDLE_Y_OFFSET = 22; // percent of card height

function fontSizeFor(text: string): string {
  return text.length >= 10 ? 'clamp(2rem, 12vw, 3rem)' : 'clamp(3rem, 16vw, 4rem)';
}

export default function FlipCardImage({
  isFlipped,
  frontImage,
  backImage,
  backText,
  translations,
  languages,
  onTransitionEnd,
}: FlipCardImageProps) {
  const textRotation = useMemo(() => Math.random() * 30 - 15, []);
  const backFaceRef = useRef<HTMLDivElement>(null);
  const didDragRef = useRef(false);

  const [cardWidth, setCardWidth] = useState(400);
  useEffect(() => {
    const el = backFaceRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      setCardWidth(entries[0].contentRect.width);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const lensRadius = Math.round(cardWidth * 0.20);
  const glassScale = lensRadius / GLASS_APERTURE_RADIUS;
  const glassDisplayW = GLASS_IMG_W * glassScale;
  const glassDisplayH = GLASS_IMG_H * glassScale;

  const [selectedLang, setSelectedLang] = useState<Lang | null>(null);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [lensPos, setLensPos] = useState(DEFAULT_LENS);
  const [dragging, setDragging] = useState(false);

  const hasMagnifier = !!translations;

  useEffect(() => {
    if (!isFlipped) {
      setSelectedLang(null);
      setPickerOpen(false);
      setLensPos(DEFAULT_LENS);
      setDragging(false);
    }
  }, [isFlipped]);

  const translatedText = selectedLang && translations ? translations[selectedLang] : null;
  const currentLangLabel = languages?.find((l) => l.code === selectedLang)?.label;

  function stop(e: React.SyntheticEvent) {
    e.stopPropagation();
  }

  function handleSelectLang(e: React.MouseEvent, code: Lang) {
    e.stopPropagation();
    setSelectedLang(code);
    setPickerOpen(false);
    // glass stays wherever it is — player moves it themselves
  }

  function updateLensFromPointer(e: React.PointerEvent) {
    const rect = backFaceRef.current?.getBoundingClientRect();
    if (!rect) return;
    const rawX = ((e.clientX - rect.left) / rect.width) * 100;
    const rawY = ((e.clientY - rect.top) / rect.height) * 100;
    const x = Math.max(0, Math.min(100, rawX + HANDLE_X_OFFSET));
    const y = Math.max(0, Math.min(100, rawY - HANDLE_Y_OFFSET));
    setLensPos({ x, y });
  }

  function handleLensPointerDown(e: React.PointerEvent) {
    e.stopPropagation();
    didDragRef.current = false;
    setDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  }

  function handleLensPointerMove(e: React.PointerEvent) {
    if (!dragging) return;
    e.stopPropagation();
    didDragRef.current = true;
    updateLensFromPointer(e);
  }

  function handleLensPointerUp(e: React.PointerEvent) {
    e.stopPropagation();
    setDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);
  }

  function handleLensClick(e: React.MouseEvent) {
    e.stopPropagation();
  }

  function handleTranslateClick(e: React.MouseEvent) {
    e.stopPropagation();
    setPickerOpen((prev) => !prev);
  }

  return (
    <div className="fcimg">
      <div
        className={`fcimg-inner${isFlipped ? ' flipped' : ''}`}
        onTransitionEnd={onTransitionEnd}
      >
        <div className="fcimg-face fcimg-front">
          <img src={frontImage} alt="card front" className="fcimg-img" />
        </div>
        <div className="fcimg-face fcimg-back" ref={backFaceRef}>
          <img src={backImage} alt="" className="fcimg-img" />

          <span
            className="fcimg-back-text"
            style={{
              fontSize: fontSizeFor(backText),
              transform: `translateX(-50%) rotate(${textRotation}deg)`,
            }}
          >
            {backText}
          </span>

          {hasMagnifier && translatedText && (
            <div
              className="fcimg-translation-layer"
              style={{ clipPath: `circle(${lensRadius}px at ${lensPos.x}% ${lensPos.y}%)` }}
            >
              <img src={backImage} alt="" className="fcimg-img" />
              <span
                className="fcimg-back-text fcimg-translation-text"
                style={{
                  fontSize: fontSizeFor(translatedText),
                  transform: `translateX(-50%) rotate(${textRotation}deg)`,
                }}
              >
                {translatedText}
              </span>
            </div>
          )}

          {hasMagnifier && (
            <>
              <div
                className={`fcimg-lens${dragging ? ' dragging' : ''}`}
                style={{
                  left: `${lensPos.x}%`,
                  top: `${lensPos.y}%`,
                  width: `${glassDisplayW}px`,
                  height: `${glassDisplayH}px`,
                  transform: `translate(${-GLASS_X_FRAC * 100}%, ${-GLASS_Y_FRAC * 100}%)`,
                  backgroundImage: `url(${glassImage})`,
                }}
                onPointerDown={handleLensPointerDown}
                onPointerMove={handleLensPointerMove}
                onPointerUp={handleLensPointerUp}
                onClick={handleLensClick}
              />
              <button
                type="button"
                className="fcimg-translate-label"
                onClick={handleTranslateClick}
              >
                {currentLangLabel ?? 'Translate'}
              </button>
            </>
          )}

          {hasMagnifier && pickerOpen && (
            <div className="fcimg-lang-picker" onClick={stop}>
              {languages?.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  className="fcimg-lang-option"
                  onClick={(e) => handleSelectLang(e, lang.code)}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
