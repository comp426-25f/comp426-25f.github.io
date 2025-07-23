"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { ChevronLeft } from "lucide-react";
import { usePathname } from "next/dist/client/components/navigation";

export default function ContentLayout({ children }: { children: React.ReactNode }) {

  const pathname = usePathname();
  const showBackButton = pathname !== "/";

    return (
    <div className="flex-1 md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
      <aside className="lg:py-12 w-full flex flex-row justify-center">
        { showBackButton && (
          <div className="hidden lg:block">
            <Button variant="ghost" asChild>
              <Link href="/">
                <ChevronLeft className="size-4" />
                Back to home
              </Link>
            </Button>
          </div>
        )}
      </aside>
      {children}
    </div>
  )
}