import * as React from 'react';

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={className}>
      <div className="container flex flex-col items-center justify-center pt-16 pb-12">
        <p className="text-center text-xs leading-loose">
          Built by{' '}
          <a
            href={'https://ajaygandecha.com'}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4">
            Ajay Gandecha
          </a>
        </p>
      </div>
    </footer>
  );
}
