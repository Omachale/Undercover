import { useState } from 'react';
import FlipCardImage from '../components/FlipCardImage';
import coverImage from '../Assets/Images/Blue Cover.webp';
import paperImage from '../Assets/Images/Blue Paper.webp';

interface PrototypeScreenProps {
  onBack?: () => void;
}

export default function PrototypeScreen({ onBack }: PrototypeScreenProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [location, setLocation] = useState('Library');

  const handleTap = () => {
    setIsFlipped(!isFlipped);
  };

  const locations = ['Library', 'Beach', 'School', 'Park', 'Hospital'];

  return (
    <div className="screen">
      <h1>Card Prototype</h1>

      <div className="flip-screen" onClick={handleTap}>
        <p className="player-label">{isFlipped ? 'Back side' : 'Front side'}</p>
        <FlipCardImage
          isFlipped={isFlipped}
          frontImage={coverImage}
          backImage={paperImage}
          backText={location}
        />
      </div>

      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {locations.map((loc) => (
          <button
            key={loc}
            onClick={() => setLocation(loc)}
            style={{
              padding: '8px 16px',
              borderRadius: '8px',
              border: location === loc ? '2px solid var(--fg)' : '1px solid var(--fg-dim)',
              background: location === loc ? 'var(--fg)' : 'transparent',
              color: location === loc ? 'var(--bg)' : 'var(--fg)',
              cursor: 'pointer',
              fontSize: '0.9rem',
            }}
          >
            {loc}
          </button>
        ))}
      </div>

      {onBack && (
        <button className="btn-primary" onClick={onBack}>
          Back
        </button>
      )}
    </div>
  );
}
