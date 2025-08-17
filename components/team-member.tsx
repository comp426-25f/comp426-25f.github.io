import Link from 'next/link';
import { Button } from './ui/button';
import { Github, Globe } from 'lucide-react';

type TeamMemberProps = {
  name: string;
  src: string;
  website?: string;
  github?: string;
  text?: string;
  personal?: string;
};

export function TeamMember({
  name,
  src,
  website,
  github,
  text,
  personal
}: TeamMemberProps) {
  return (
    <div className="flex flex-col md:flex-row gap-5 items-center my-6">
      <img src={src} alt={name} className="size-32 rounded-xl shadow-lg" />
      <div className="flex flex-col text-center md:text-left">
        <div className="flex flex-row items-center gap-2">
          <p className="text-xl font-semibold tracking-tight">{name}</p>
          <div className="flex flex-row items-center">
            {website && (
              <Button
                variant="ghost"
                size={'icon'}
                className="p-0 underline text-sky-800 hover:text-sky-900 dark:text-sky-200 dark:hover:text-sky-100"
                asChild>
                <Link href={website} target="_blank">
                  <Globe className="size-5" />
                </Link>
              </Button>
            )}
            {github && (
              <Button
                variant="ghost"
                size={'icon'}
                className="p-0 underline text-sky-800 hover:text-sky-900 dark:text-sky-200 dark:hover:text-sky-100"
                asChild>
                <Link href={github} target="_blank">
                  <Github className="size-5" />
                </Link>
              </Button>
            )}
          </div>
        </div>

        {/* <div className="flex flex-row gap-3">
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
        </div> */}
        <div className="flex flex-col gap-2 mt-1">
          {text && <p>{text}</p>}
          {personal && <p>{<em>{personal}</em>}</p>}
        </div>
      </div>
    </div>
  );
}
