import { cn } from '@/lib/utils';
import React from 'react';

function ProjectStageHeader({
  span,
  module,
  topic,
  color
}: {
  span: number;
  module: string;
  topic: string;
  color: string;
}) {
  return (
    <div
      className={cn(
        'text-sm rounded-xl p-3 flex items-center justify-center',
        color
      )}
      style={{ gridRow: `span ${span}` }}>
      <div className="flex flex-col items-center justify-center">
        <div className="-rotate-90 whitespace-nowrap text-center">
          <span className="font-medium text-base">{module}</span>
          <br />
          {topic}
        </div>
      </div>
    </div>
  );
}

function ProjectStageCard({
  title,
  children,
  color
}: {
  title: string;
  children: React.ReactNode;
  color: string;
  newTechnologies?: string[];
  newTopics?: string[];
}) {
  return (
    <div
      className={cn(
        'flex flex-col items-start justify-start rounded-xl p-3',
        color
      )}>
      <p className="font-bold">{title}</p>
      <p className="text-sm">{children}</p>
    </div>
  );
}

export default function ProjectStages() {
  const fColor =
    'bg-slate-200 dark:bg-[#2c3744] text-slate-900 dark:text-slate-100';
  const fSecondaryColor =
    'bg-slate-200/50 dark:bg-[#2c3744]/50 text-slate-900 dark:text-slate-100';

  return (
    <div className="flex flex-col gap-4 py-6">
      <div className="grid grid-cols-[60px_1fr] auto-rows-min gap-4">
        <ProjectStageHeader
          span={4}
          module={'F00-F03'}
          topic="COMP 426 Final Project"
          color={fColor}
        />
        <ProjectStageCard title="f00: Idea Submission" color={fSecondaryColor}>
          First, students created an idea for their final project, including a
          high-level overview of what features they would like to include.
        </ProjectStageCard>
        <ProjectStageCard title="f01: Prototype" color={fSecondaryColor}>
          During this stage, students worked on creating a full prototype of
          their final project. Students narrowed down key project features,
          designed the <em>backend database schema</em> for their project to
          support these features, and created a{' '}
          <em>high-fidelity UI prototype</em> in <b>Figma</b>. <br />
          <br />
          Then, each group met with the course instructor and one other TA for a
          personalized review of their prototype, allowing students to get
          realtime feedback and guidance on their project.
        </ProjectStageCard>
        <ProjectStageCard
          title="f02: Development Sprint 1"
          color={fSecondaryColor}>
          Once students received feedback on their prototype, they began
          developing their project. Like often done in industry, student
          development was broken up into &quot;sprints&quot;. Students worked on
          three out of five required features for this sprint and submitted
          their progress as a check-in.
        </ProjectStageCard>
        <ProjectStageCard
          title="f03: Development Sprint 2"
          color={fSecondaryColor}>
          For the final sprint, students worked on the remaining two required
          features for their project and polished their work to conform to the
          project standards.
        </ProjectStageCard>
      </div>
    </div>
  );
}
