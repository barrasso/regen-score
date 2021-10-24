interface RegenScoreItemProps {
  name: string;
  isWhale: boolean;
}

export default function RegenScoreItem({ name, isWhale }: RegenScoreItemProps) {
  return (
    <li>
      {name} {isWhale && <span>🐋</span>}
    </li>
  );
}
