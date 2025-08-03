import Link from 'next/link';
import { Button } from '../ui/button';

type HomepageButtonProps = {
  icon: React.ReactNode;
  text: string;
  href: string;
} & React.ComponentProps<typeof Button>;
export default function HomepageButton({
  icon,
  text,
  href,
  ...props
}: HomepageButtonProps) {
  return (
    <Button
      asChild
      variant="ghost"
      className="w-full h-10 justify-start hover:cursor-pointer text-base font-semibold"
      {...props}>
      <Link href={href}>
        {icon}
        {text}
      </Link>
    </Button>
  );
}
