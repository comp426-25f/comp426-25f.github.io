"use client";

import { Button } from "../ui/button";
import { Github, SquareArrowOutUpRight, Trophy } from "lucide-react";
import { Badge } from "../ui/badge";

export type ShowcaseListing = {
    title: string;
    url: string;
    github: string;
    winner?: string;
};

export default function ShowcaseListing({
  title,
  url,
  github,
  winner,
  teamNumber
}: ShowcaseListing & React.ComponentProps<"div"> & { teamNumber: number }) {
  return <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between w-full first:border-t border-b border-muted-foreground py-3">
    <div className="flex flex-row items-center gap-4">
        <img src={`/images/showcase/${teamNumber}.png`} className="rounded-lg h-[60px] w-[60px] object-contain" alt={title} width={60} height={60} />
        <div className="flex flex-col">
            <div className="flex flex-row items-center gap-2.5">
                <p className="text-md font-bold">{title}</p>
                { winner && (
                    <Badge 
                        variant="default" 
                        className="bg-yellow-400 text-yellow-900 border-transparent"
                    >
                        <Trophy className="size-4" />
                        {winner}
                    </Badge>
                ) }
            </div>
            <p className="text-sm text-muted-foreground">Team {teamNumber}</p>
        </div>
    </div>
    <div className="flex flex-row gap-3">
      <Button 
        className="hover:cursor-pointer"
        variant="secondary"
        onClick={() => window.open(github, '_blank', 'noopener,noreferrer')}
      >
        <Github className="size-4" />
        <span className="sm:hidden md:inline">GitHub</span>
      </Button>
      <Button className="hover:cursor-pointer" variant="default" onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}>
        <SquareArrowOutUpRight className="size-4" />
        <span className="sm:hidden md:inline">View</span>
      </Button>
    </div>
  </div>;
}