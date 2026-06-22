import { useState } from 'react';
import './RulesScreen.css';
import { LANGUAGES } from '../data/locations';
import { RULES_TEXT } from '../data/rulesText';
import type { Lang } from '../types';

interface RulesScreenProps {
  onClose: () => void;
}

export default function RulesScreen({ onClose }: RulesScreenProps) {
  const [lang, setLang] = useState<'en' | Lang>('en');
  const [pickerOpen, setPickerOpen] = useState(false);

  const onLanguageTab = lang !== 'en';
  const langLabel = LANGUAGES.find((l) => l.code === lang)?.label;
  const content = RULES_TEXT[lang];

  function selectEnglish() {
    setLang('en');
    setPickerOpen(false);
  }

  function toggleLanguagePicker() {
    setPickerOpen((p) => !p);
  }

  function chooseLang(code: Lang) {
    setLang(code);
    setPickerOpen(false);
  }

  return (
    <div className="rules-screen">
      <div className="rules-tabs">
        <button
          type="button"
          className={`rules-tab${!onLanguageTab ? ' rules-tab--active' : ''}`}
          onClick={selectEnglish}
        >
          English
        </button>
        <button
          type="button"
          className={`rules-tab${onLanguageTab ? ' rules-tab--active' : ''}`}
          onClick={toggleLanguagePicker}
        >
          {onLanguageTab ? langLabel : 'Language'}
        </button>
        <button type="button" className="rules-close" onClick={onClose} aria-label="Close">
          ✕
        </button>
      </div>

      {pickerOpen && (
        <div className="rules-lang-picker">
          {LANGUAGES.map((l) => (
            <button
              key={l.code}
              type="button"
              className="rules-lang-option"
              onClick={() => chooseLang(l.code)}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}

      <div className="rules-paper" key={lang}>
        {content.map((section, i) => (
          <section key={i} className="rules-section">
            <h2 className="rules-heading">{section.heading}</h2>
            {section.paragraphs.map((para, j) => (
              <p key={j} className="rules-paragraph">
                {para}
              </p>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}
