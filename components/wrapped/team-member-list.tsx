'use client';

import Image from 'next/image';
import { Button } from '../ui/button';
import { Github, Globe } from 'lucide-react';
import Link from 'next/link';

function TeamMemberListItem({
  src,
  name,
  website,
  github
}: {
  src: string;
  name: string;
  website?: string;
  github?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-1">
      <Image
        src={src}
        alt={name}
        width={124}
        height={124}
        className="size-32 rounded-xl shadow-lg"
      />
      <div className="flex flex-row items-center gap-0">
        <Link
          href={github!}
          target="_blank"
          className="text-sm font-medium hover:underline">
          {name}{' '}
        </Link>
      </div>
    </div>
  );
}

export default function TeamMemberList() {
  return (
    <>
      <div className="flex flex-row flex-wrap gap-4 pt-6 pb-3">
        <TeamMemberListItem
          src="/images/authors/jadekeegan.png"
          name="Jade Keegan"
          github="https://github.com/jadekeegan"
        />
        <TeamMemberListItem
          src="/images/authors/aliciabao.png"
          name="Alicia Bao"
          github="https://github.com/aliciabao"
        />
        <TeamMemberListItem
          src="/images/authors/brucereier.png"
          name="Bruce Reier"
          website="https://www.brucereier.dev"
          github="https://github.com/brucereier"
        />
        <TeamMemberListItem
          src="/images/authors/charlottetsui.png"
          name="Charlotte Tsui"
          github="https://github.com/charlottetsui"
        />
        <TeamMemberListItem
          src="/images/authors/davidnguyen.png"
          name="David Nguyen"
          website="https://sonnguyenhoang.com"
          github="https://github.com/hoangsonww"
        />
        <TeamMemberListItem
          src="/images/authors/mitchellanderson.png"
          name="Mitchell Anderson"
          github="https://github.com/amitche03"
        />
        <TeamMemberListItem
          src="/images/authors/neeljoshi.png"
          name="Neel Joshi"
          github="https://github.com/nbjoshi"
        />
        <TeamMemberListItem
          src="/images/authors/sanjanagopalswamy.png"
          name="Sanjana G."
          github="https://github.com/sgopal08"
        />
        <TeamMemberListItem
          src="/images/authors/shainapatel.png"
          name="Shaina Patel"
          github="https://github.com/shainatpatel"
        />
        <TeamMemberListItem
          src="/images/authors/upasanalamsal.png"
          name="Upasana Lamsal"
          github="https://github.com/upasanal"
        />
      </div>
    </>
  );
}
