interface CellProps {
  state: "X" | "O" | "";
  onClick: () => void;
  over: boolean;
}

export default function Cell({ state, onClick, over }: CellProps) {
  return (
    <button
      className={`w-full h-full border border-accent aspect-square bg-background rounded-xl text-7xl font-bold ${
        state === "" && "cursor-pointer"
      }`}
      onClick={onClick}
      disabled={state !== "" || over}
    >
      {state}
    </button>
  );
}
