import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type RubricSectionHeaderProps = { title: string; points: number };
export function RubricSectionHeader({
  title,
  points
}: RubricSectionHeaderProps) {
  return (
    <tr className="m-0 border-t p-0 bg-muted">
      <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
        <strong>{title}</strong>
      </td>
      <td
        className="border px-4 py-2 text-center [&[align=center]]:text-center [&[align=right]]:text-right"
        colSpan={2}>
        <strong>{points}</strong>
      </td>
    </tr>
  );
}

type RubricItemProps = { points: number; children: ReactNode };
export function RubricItem({ points, children }: RubricItemProps) {
  return (
    <tr className="m-0 border-t p-0">
      <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
        {children}
      </td>
      <td
        className="border px-4 py-2 text-center [&[align=center]]:text-center [&[align=right]]:text-right"
        colSpan={2}>
        {points}
      </td>
    </tr>
  );
}

type RubricProps = { extraCredit?: boolean; children: ReactNode };
export function Rubric({ extraCredit = false, children }: RubricProps) {
  return (
    <div className="my-6 w-full overflow-y-auto">
      <table className="w-full">
        <tbody>
          <tr className={cn('m-0 border-t p-0', extraCredit && 'bg-muted')}>
            <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
              {extraCredit ? 'Extra Credit' : 'Requirement'}
            </th>
            <th className="border px-4 py-2 text-center font-bold [&[align=center]]:text-center [&[align=right]]:text-right w-4">
              Points{!extraCredit && ' (/100)'}
            </th>
          </tr>
          {children}
        </tbody>
      </table>
    </div>
  );
}
