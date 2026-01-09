'use client';

import { allScheduleItems, ScheduleItem } from '@/.contentlayer/generated';
import { cn } from '@/lib/utils';
import { ScheduleBadge } from '../home/schedule-badge';
import { useState, useEffect, useRef } from 'react';
import { Badge } from '../ui/badge';
import { Markdown } from '../mdx/mdx-components';
import { Separator } from '../ui/separator';
import { MousePointerClickIcon } from 'lucide-react';
import Link from 'next/link';

function getHoverColorClass(subject: string): string {
  switch (subject) {
    case 'fundamentals':
      return 'hover:bg-slate-200 dark:hover:bg-[#2c3744]';
    case 'react':
      return 'hover:bg-[#c9daf8] dark:hover:bg-[#1e3a5f]';
    case 'nextjs':
      return 'hover:bg-[#DFDCEC] dark:hover:bg-[#352c47]';
    case 'backend':
      return 'hover:bg-[#DEECDC] dark:hover:bg-[#1a3d2e]';
    case 'design':
      return 'hover:bg-[#F1E1E9] dark:hover:bg-[#4a2a3d]';
    case 'technologies':
      return 'hover:bg-[#fff2cc] dark:hover:bg-[#4a3d1a]';
    case 'midterm':
      return 'hover:bg-slate-200 dark:hover:bg-[#2c3744]';
    case 'final':
      return 'hover:bg-[#DFDCEC] dark:hover:bg-[#352c47]';
    default:
      return 'hover:bg-accent';
  }
}

function getPopupStyles(subject: string): {
  bg: string;
  text: string;
  trailingBg: string;
} {
  switch (subject) {
    case 'fundamentals':
      return {
        bg: 'bg-slate-200 dark:bg-[#2c3744]',
        text: 'text-slate-900 dark:text-slate-100',
        trailingBg: 'bg-slate-200 dark:bg-[#2c3744]'
      };
    case 'react':
      return {
        bg: 'bg-[#c9daf8] dark:bg-[#1e3a5f]',
        text: 'text-blue-950 dark:text-blue-100',
        trailingBg: 'bg-[#c9daf8] dark:bg-[#1e3a5f]'
      };
    case 'nextjs':
      return {
        bg: 'bg-[#DFDCEC] dark:bg-[#352c47]',
        text: 'text-purple-950 dark:text-purple-100',
        trailingBg: 'bg-[#DFDCEC] dark:bg-[#352c47]'
      };
    case 'backend':
      return {
        bg: 'bg-[#DEECDC] dark:bg-[#1a3d2e]',
        text: 'text-emerald-950 dark:text-emerald-100',
        trailingBg: 'bg-[#DEECDC] dark:bg-[#1a3d2e]'
      };
    case 'design':
      return {
        bg: 'bg-[#F1E1E9] dark:bg-[#4a2a3d]',
        text: 'text-pink-950 dark:text-pink-100',
        trailingBg: 'bg-[#F1E1E9] dark:bg-[#4a2a3d]'
      };
    case 'technologies':
      return {
        bg: 'bg-[#fff2cc] dark:bg-[#4a3d1a]',
        text: 'text-amber-950 dark:text-amber-100',
        trailingBg: 'bg-[#fff2cc] dark:bg-[#4a3d1a]'
      };
    case 'midterm':
      return {
        bg: 'bg-slate-200 dark:bg-[#2c3744]',
        text: 'text-slate-900 dark:text-slate-100',
        trailingBg: 'bg-slate-200 dark:bg-[#2c3744]'
      };
    case 'final':
      return {
        bg: 'bg-[#DFDCEC] dark:bg-[#352c47]',
        text: 'text-purple-950 dark:text-purple-100',
        trailingBg: 'bg-[#DFDCEC] dark:bg-[#352c47]'
      };
    default:
      return {
        bg: 'bg-popover',
        text: 'text-popover-foreground',
        trailingBg: 'bg-popover'
      };
  }
}

function BeyondScheduleItem({ item }: { item: ScheduleItem }) {
  const [isHovered, setIsHovered] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const popupStyles = getPopupStyles(item.subject);

  const handleMouseEnter = () => {
    // Clear any pending hide timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsHovered(true);
    setShowPopup(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Small delay to allow smooth transition to next item
    timeoutRef.current = setTimeout(() => setShowPopup(false), 50);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      key={item._id}
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div
        className={cn(
          'flex flex-row items-center gap-3 px-2 py-1 w-full transition-colors duration-50',
          getHoverColorClass(item.subject),
          isHovered
            ? 'rounded-l-lg rounded-r-lg md:rounded-r-none'
            : 'rounded-md'
        )}>
        <ScheduleBadge item={item} />
        <div className="flex w-full flex-row md:flex-row md:items-center md:justify-between">
          <p className="font-semibold">{item.title}</p>
          {isHovered && (
            <div className="flex flex-row mr-4 underline underline-offset-3 items-center gap-3 text-sm! text-muted-foreground!">
              {item.recordingUrl && (
                <Link
                  href={item.recordingUrl}
                  className="hover:text-foreground"
                  target="_blank">
                  Recording
                </Link>
              )}
              {item.slideshowUrl && (
                <Link
                  href={item.slideshowUrl}
                  className="hover:text-foreground"
                  target="_blank">
                  Slides
                </Link>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Popup */}
      {showPopup && (
        <div
          className={cn(
            'absolute z-50 min-w-[300px] max-w-[400px]',
            // Mobile: below the row
            'top-full left-0 mt-2',
            // Desktop: to the right of the row
            'md:left-full md:top-1/2 md:-translate-y-1/2 md:ml-[-0.375rem] md:mt-0',
            'transition-opacity duration-150 ease-out',
            isHovered ? 'opacity-100' : 'opacity-0'
          )}>
          <div
            className={cn(
              'rounded-xl shadow-lg p-4',
              // Match the hover color to create seamless morphing effect
              popupStyles.bg
            )}>
            <div className={cn('text-sm', popupStyles.text)}>
              {/* Extra details content - ready for badges later */}
              <div className="flex flex-col opacity-90">
                <Markdown content={item.synopsis || ''} />
                {item.relatedCourses && item.relatedCourses.length > 0 && (
                  <>
                    <p className="font-bold mt-4">Connections to...</p>
                    <div className="flex flex-col gap-2 my-2">
                      {item.relatedCourses.map((course, index) => (
                        <div key={index} className="flex flex-col gap-2">
                          <Separator />
                          <div className="flex flex-row items-center gap-2">
                            <Badge>{course.code}</Badge>
                            {course.description && (
                              <p className="text-xs opacity-80">
                                {course.description}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export function BeyondSchedule() {
  const sortedItems = allScheduleItems
    .sort((a, b) => {
      const dateA = new Date(a.date || '');
      const dateB = new Date(b.date || '');
      return dateA.getTime() - dateB.getTime();
    })
    .filter((item) => item.subject !== 'midterm' && item.code !== 'L26');

  return (
    <div className="flex flex-col w-full gap-3 md:gap-1 py-2 mt-1">
      <div className="flex flex-row items-center gap-2 text-muted-foreground mt-2 mb-4">
        <MousePointerClickIcon />
        Hover over a lecture below to learn more about its content and
        connections beyond 426!
      </div>
      {sortedItems.length === 0 && (
        <p className="text-muted-foreground mt-2">No schedule yet!</p>
      )}
      {sortedItems.map((item) => (
        <BeyondScheduleItem key={item._id} item={item} />
      ))}
    </div>
  );
}
