import { useMemo } from 'react';
import './FlipCardImage.css';

interface FlipCardImageProps {
  isFlipped: boolean;
  frontImage: string;
  backImage: string;
  backText: string;
  onTransitionEnd?: (event: React.TransitionEvent<HTMLDivElement>) => void;
}

export default function FlipCardImage({
  isFlipped,
  frontImage,
  backImage,
  backText,
  onTransitionEnd,
}: FlipCardImageProps) {
  const textRotation = useMemo(() => Math.random() * 30 - 15, []);

  return (
    <div className="fcimg">
      <div
        className={`fcimg-inner${isFlipped ? ' flipped' : ''}`}
        onTransitionEnd={onTransitionEnd}
      >
        <div className="fcimg-face fcimg-front">
          <img src={frontImage} alt="card front" className="fcimg-img" />
        </div>
        <div className="fcimg-face fcimg-back">
          <img src={backImage} alt="card back" className="fcimg-img" />
          <span
            className="fcimg-back-text"
            style={{ transform: `translateX(-50%) rotate(${textRotation}deg)` }}
          >
            {backText}
          </span>
        </div>
      </div>
    </div>
  );
}
