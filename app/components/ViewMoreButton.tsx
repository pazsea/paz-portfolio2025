import ChevronDownIcon from "./icons/ChevronDownIcon";

interface ViewMoreButtonProps {
  onClick: () => void;
}

export default function ViewMoreButton({ onClick }: ViewMoreButtonProps) {
  return (
    <button
      className="mt-4 flex flex-col items-center text-text"
      onClick={onClick}
    >
      <span className="text-text text-[20px]">View more</span>
      <ChevronDownIcon />
    </button>
  );
}
