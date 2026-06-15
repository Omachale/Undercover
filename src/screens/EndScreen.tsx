interface EndScreenProps {
  onNewRound: () => void;
}

export default function EndScreen({ onNewRound }: EndScreenProps) {
  return (
    <div className="screen end-screen">
      <p className="end-text">
        The game has started.
        <br />
        Find the spy.
      </p>
      <button className="btn-primary" onClick={onNewRound}>
        New Round
      </button>
    </div>
  );
}
