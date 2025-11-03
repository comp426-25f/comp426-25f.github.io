import { ColoredBadge } from '../colored-badge';

export function AssignmentBadge({ code }: { code: string }) {
  const color = code.startsWith('R')
    ? 'green'
    : code.startsWith('A')
    ? 'pink'
    : code.startsWith('F')
    ? 'purple-solid'
    : 'default';

  return <ColoredBadge text={code} color={color} />;
}
