import { ColoredBadge } from '../colored-badge';

export function AssignmentBadge({ code }: { code: string }) {
  const color = code.startsWith('R')
    ? 'green'
    : code.startsWith('A')
    ? 'pink'
    : 'default';

  return <ColoredBadge text={code} color={color} />;
}
