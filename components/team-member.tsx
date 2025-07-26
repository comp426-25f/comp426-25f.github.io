import Link from 'next/link';
import { Button } from './ui/button';

type TeamMemberProps = {
  name: string;
  src: string;
  website?: string;
  github?: string;
  text: string;
};

export function TeamMember({
  name,
  src,
  website,
  github,
  text
}: TeamMemberProps) {
  return (
    <div className="flex flex-row gap-5 items-center my-6">
      <img src={src} alt={name} className="size-28 rounded-xl shadow-lg" />
      <div className="flex flex-col">
        <p className="text-xl font-semibold tracking-tight">{name}</p>
        <div className="flex flex-row gap-3">
          {website && (
            <Button variant="link" className="p-0 underline" asChild>
              <Link href={website} target="_blank">
                Website
              </Link>
            </Button>
          )}
          {github && (
            <Button variant="link" className="p-0 underline" asChild>
              <Link href={github} target="_blank">
                GitHub
              </Link>
            </Button>
          )}
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
}
