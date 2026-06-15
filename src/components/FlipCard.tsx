import './FlipCard.css';

interface FlipCardProps {
  isFlipped: boolean;
  front: string;
  back: string;
  onTransitionEnd?: (event: React.TransitionEvent<HTMLDivElement>) => void;
}

export default function FlipCard({ isFlipped, front, back, onTransitionEnd }: FlipCardProps) {
  return (
    <div className="flip-card">
      <div
        className={`flip-card-inner${isFlipped ? ' flipped' : ''}`}
        onTransitionEnd={onTransitionEnd}
      >
        <div className="flip-card-face flip-card-front">
          <span className="flip-card-text">{front}</span>
        </div>
        <div className="flip-card-face flip-card-back">
          <span className="flip-card-text">{back}</span>
        </div>
      </div>
    </div>
  );
}
