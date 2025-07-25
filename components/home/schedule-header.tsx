import { ColoredBadge, ColoredBadgeColor } from '../colored-badge';

export function ScheduleHeader() {
  const legendItem = (color: ColoredBadgeColor, label: string) => (
    <div className="flex items-center gap-2">
      <ColoredBadge color={color} variant="circle" />
      <span className="text-sm">{label}</span>
    </div>
  );
  return (
    <div className="flex flex-col w-full border-b">
      <h2 className="mt-10 scroll-m-20 pb-1 text-3xl font-semibold tracking-tight">
        Course Schedule
      </h2>
      <div className="flex flex-row flex-wrap items-center gap-4 py-2">
        {legendItem('lightblue', 'Fundamentals')}
        {legendItem('blue', 'React')}
        {legendItem('purple', 'Next.js')}
        {legendItem('green', 'Backend')}
        {legendItem('pink', 'Design')}
        {legendItem('yellow', 'Technologies')}
      </div>
    </div>
  );
}
