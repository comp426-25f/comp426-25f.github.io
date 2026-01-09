import { cn } from '@/lib/utils';
import React from 'react';
import { Badge } from '../ui/badge';

function AssignmentCardHeader({
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

function AssignmentCard({
  title,
  children,
  color,
  newTechnologies,
  newTopics
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
      <div className="flex flex-row flex-wrap w-full gap-2 mt-2">
        {newTechnologies && (
          <>
            {newTechnologies.map((topic) => (
              <Badge key={topic} color={topic}>
                {topic}
              </Badge>
            ))}
          </>
        )}
        {newTopics && (
          <>
            {newTopics.map((topic) => (
              <Badge key={topic} variant="outline" color={topic}>
                {topic}
              </Badge>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default function AssignmentsGrid() {
  const m01Color =
    'bg-slate-200 dark:bg-[#2c3744] text-slate-900 dark:text-slate-100';
  const m01SecondaryColor =
    'bg-slate-200/50 dark:bg-[#2c3744]/50 text-slate-900 dark:text-slate-100';
  const m02Color =
    'bg-[#c9daf8] dark:bg-[#1e3a5f] text-blue-950 dark:text-blue-100';
  const m02SecondaryColor =
    'bg-[#c9daf8]/50 dark:bg-[#1e3a5f]/50 text-blue-950 dark:text-blue-100';
  const m03Color =
    'bg-[#DFDCEC] dark:bg-[#352c47] text-purple-950 dark:text-purple-100';
  const m03SecondaryColor =
    'bg-[#DFDCEC]/50 dark:bg-[#352c47]/50 text-purple-950 dark:text-purple-100';
  const m04Color =
    'bg-[#DEECDC] dark:bg-[#1a3d2e] text-emerald-950 dark:text-emerald-100';
  const m04SecondaryColor =
    'bg-[#DEECDC]/50 dark:bg-[#1a3d2e]/50 text-emerald-950 dark:text-emerald-100';
  const m05Color =
    'bg-[#F1E1E9] dark:bg-[#4a2a3d] text-pink-950 dark:text-pink-100';
  const m05SecondaryColor =
    'bg-[#F1E1E9]/50 dark:bg-[#4a2a3d]/50 text-pink-950 dark:text-pink-100';
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col md:flex-row gap-4 px-1 my-2">
        <p className="font-medium">Key: </p>
        <div className="flex flex-row gap-2 text-muted-foreground">
          <Badge>--</Badge>
          <p>New technologies introduced</p>
        </div>
        <div className="flex flex-row gap-2 text-muted-foreground">
          <Badge variant="outline">--</Badge>
          <p>New concepts applied</p>
        </div>
      </div>
      <div className="grid grid-cols-[60px_1fr] auto-rows-min gap-4">
        {/* Row 1–2 */}
        <AssignmentCardHeader
          span={2}
          module={'M01'}
          topic="Fundamentals"
          color={m01Color}
        />
        <AssignmentCard
          title="a01: Personal Portfolio"
          color={m01SecondaryColor}
          newTechnologies={['HTML / CSS', 'Vercel']}
          newTopics={['Live Deployment (Vercel)']}>
          Students use <b>HTML</b> and <b>CSS</b> to create and style a personal
          portfolio website. Students also <b>deploy</b> their portfolio live to
          the internet using Vercel.
        </AssignmentCard>
        <AssignmentCard
          title="a02: Pixel Art Maker"
          color={m01SecondaryColor}
          newTechnologies={['Vite', 'TypeScript']}
          newTopics={[
            'DOM Manipulation',
            'Event Handling',
            'Functional Programming'
          ]}>
          Students learn how to connect app UIs to business logic with{' '}
          <b>TypeScript</b> using event handlers to build a pixel art canvas
          app, where users paint pixels on a canvas with different tools and
          colors.
        </AssignmentCard>
        <AssignmentCardHeader
          span={1}
          module={'M02'}
          topic="React"
          color={m02Color}
        />
        <AssignmentCard
          title="a03: NYT Games"
          color={m02SecondaryColor}
          newTechnologies={['React', 'Tailwind']}
          newTopics={[
            'State Management',
            'Functional Programming',
            'Asynchronous Programming',
            'Calling APIs'
          ]}>
          Students use <b>React</b> to recreate Wordle and Connections, the
          popular word games / puzzles by the NY Times. Students implement the
          state management and mutation functionality to power both games, and
          call external APIs to load new puzzles.
        </AssignmentCard>
        <AssignmentCardHeader
          span={1}
          module={'M03'}
          topic="Web App Architectures"
          color={m03Color}
        />
        <AssignmentCard
          title="a04: Pokédex"
          color={m03SecondaryColor}
          newTechnologies={['Next.js', 'React Query']}
          newTopics={[
            'SSR',
            'Client-Side Data Fetching',
            'Server-Side Data Fetching',
            'Pagination'
          ]}>
          Students learn how to set up a <b>Next.js</b> project and perform
          client-side and server-side data fetching to implement a Pokédex app
          from scratch. Paginated Pokémon data with an external API, and
          students had creative freedom on their designs.
        </AssignmentCard>
        <AssignmentCardHeader
          span={2}
          module={'M04'}
          topic="Backend"
          color={m04Color}
        />
        <AssignmentCard
          title="a05: Oriole"
          color={m04SecondaryColor}
          newTechnologies={['Supabase', 'Drizzle', 'tRPC', 'Zod']}
          newTopics={[
            'Creating APIs',
            'Database Operations',
            'Authentication',
            'Storage',
            'Infinite Scrolling',
            'Data Validation'
          ]}>
          Students connect a Next.js app to a <b>database</b>,{' '}
          <b>authentication</b>, and <b>cloud storage system</b> (via Supabase)
          and model + develop the backend for a fully-featured social media app.
          Students used Drizzle to model the database schema and tRPC to create
          typesafe APIs for posting new content, liking posts, following
          creators, and editing their profiles. Students also implemented
          infinite scrolling for posts on the home page.
        </AssignmentCard>
        <AssignmentCard
          title="a06: Alias"
          color={m04SecondaryColor}
          newTechnologies={['OpenAI API']}
          newTopics={[
            'Realtime / WebSockets / Streaming',
            'AI Integration',
            'Memoization',
            'Caching',
            'Optimistic Updating'
          ]}>
          Students recreate Discord, a popular social media and collaboration
          app, by implementing <b>realtime functionality</b> using Supabase
          Realtime. Students also developed an AI-powered feature using the
          Azure OpenAI API. Students also learned about{' '}
          <b>optimistic updating</b> to improve the user experience of the
          chatbot.
        </AssignmentCard>
        <AssignmentCardHeader
          span={1}
          module={'M05'}
          topic="Design"
          color={m05Color}
        />
        <AssignmentCard
          title="a07: Design Lab"
          color={m05SecondaryColor}
          newTechnologies={['Shadcn UI']}
          newTopics={['UI Design Principles', 'Colors and Typography']}>
          Students learn about design techniques by implementing various design
          challenges using <b>Shadcn UI</b>. Students experimented with common
          UI components used in modern web apps, including inputs, cards,
          modals, and more.
        </AssignmentCard>
      </div>
    </div>
  );
}
