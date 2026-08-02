"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useCallback, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";

import { Icons } from "@/components/common/icons";
import { buttonVariants } from "@/components/ui/button";
import { NotebookPageEntry } from "@/config/notebook";
import { cn } from "@/lib/utils";

// Matches the ~0.82 aspect ratio of the actual scans (roughly 2545x3100px).
const PAGE_WIDTH = 540;
const PAGE_HEIGHT = 660;

interface NotebookPageProps {
  page: NotebookPageEntry;
  pageNumber: number;
}

const NotebookPage = React.forwardRef<HTMLDivElement, NotebookPageProps>(
  ({ page, pageNumber }, ref) => (
    <div ref={ref} className="relative w-full h-full bg-secondary">
      <Image
        src={page.image}
        alt={page.caption ?? `Notebook page ${pageNumber}`}
        fill
        className="object-cover"
      />
      {page.projectId && (
        <Link
          href={`/projects/${page.projectId}`}
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "absolute top-2 right-2 text-xs bg-background/90 backdrop-blur-sm"
          )}
        >
          View project
        </Link>
      )}
      {(page.caption || page.date) && (
        <div className="absolute bottom-0 left-0 right-0 bg-background/90 backdrop-blur-sm px-3 py-2 border-t border-border">
          {page.date && (
            <span className="text-xs font-medium text-foreground">
              {page.date}
            </span>
          )}
          {page.caption && (
            <p className="text-xs text-muted-foreground">{page.caption}</p>
          )}
        </div>
      )}
    </div>
  )
);
NotebookPage.displayName = "NotebookPage";

interface NotebookViewerProps {
  pages: NotebookPageEntry[];
}

export default function NotebookViewer({ pages }: NotebookViewerProps) {
  const flipBookRef = useRef<{ pageFlip: () => any } | null>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const handleFlip = useCallback((e: { data: number }) => {
    setCurrentPage(e.data);
  }, []);

  // Instant jump, no flip animation — used by the slider so dragging
  // through many pages quickly doesn't queue up animations and lag.
  const jumpToPage = useCallback((index: number) => {
    flipBookRef.current?.pageFlip()?.turnToPage(index);
    setCurrentPage(index);
  }, []);

  const flipPrev = useCallback(() => {
    flipBookRef.current?.pageFlip()?.flipPrev();
  }, []);

  const flipNext = useCallback(() => {
    flipBookRef.current?.pageFlip()?.flipNext();
  }, []);

  if (pages.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-border py-24 text-center">
        <p className="text-muted-foreground">Notebook pages coming soon.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex w-full max-w-6xl items-center justify-center gap-3 sm:gap-6">
        <button
          type="button"
          onClick={flipPrev}
          disabled={currentPage === 0}
          aria-label="Previous page"
          className={cn(
            buttonVariants({ variant: "outline", size: "icon" }),
            "shrink-0"
          )}
        >
          <Icons.chevronLeft className="h-4 w-4" />
        </button>

        <div className="flex min-w-0 flex-1 justify-center">
          <HTMLFlipBook
            width={PAGE_WIDTH}
            height={PAGE_HEIGHT}
            size="stretch"
            minWidth={260}
            maxWidth={PAGE_WIDTH}
            minHeight={318}
            maxHeight={PAGE_HEIGHT}
            showCover={false}
            mobileScrollSupport={true}
            onFlip={handleFlip}
            className="mx-auto"
            style={{}}
            startPage={0}
            drawShadow={true}
            flippingTime={700}
            usePortrait={true}
            startZIndex={0}
            autoSize={true}
            maxShadowOpacity={0.5}
            clickEventForward={true}
            useMouseEvents={true}
            swipeDistance={30}
            showPageCorners={true}
            disableFlipByClick={false}
            ref={flipBookRef}
          >
            {pages.map((page, index) => (
              <NotebookPage key={page.image} page={page} pageNumber={index + 1} />
            ))}
          </HTMLFlipBook>
        </div>

        <button
          type="button"
          onClick={flipNext}
          disabled={currentPage === pages.length - 1}
          aria-label="Next page"
          className={cn(
            buttonVariants({ variant: "outline", size: "icon" }),
            "shrink-0"
          )}
        >
          <Icons.chevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="flex w-full max-w-2xl flex-col items-center gap-2">
        <input
          type="range"
          min={0}
          max={pages.length - 1}
          value={currentPage}
          onChange={(e) => jumpToPage(Number(e.target.value))}
          className="w-full accent-primary"
          aria-label="Jump to page"
        />
        <span className="text-xs text-muted-foreground">
          Page {currentPage + 1} of {pages.length}
        </span>
      </div>
    </div>
  );
}
