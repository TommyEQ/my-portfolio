"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useCallback, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";

import { Icons } from "@/components/common/icons";
import { buttonVariants } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { NotebookPageEntry } from "@/config/notebook";
import { cn } from "@/lib/utils";

// Matches the ~0.82 aspect ratio of the actual scans (roughly 2545x3100px).
const PAGE_WIDTH = 540;
const PAGE_HEIGHT = 660;

interface NotebookPageProps {
  page: NotebookPageEntry;
  pageNumber: number;
  onZoom: () => void;
}

const NotebookPage = React.forwardRef<HTMLDivElement, NotebookPageProps>(
  ({ page, pageNumber, onZoom }, ref) => (
    <div ref={ref} className="group relative w-full h-full bg-secondary">
      <Image
        src={page.image}
        alt={page.caption ?? `Notebook page ${pageNumber}`}
        fill
        sizes={`(max-width: 640px) 100vw, ${PAGE_WIDTH}px`}
        className="object-cover"
      />
      <button
        type="button"
        onClick={onZoom}
        aria-label={`Zoom in on page ${pageNumber}`}
        className={cn(
          buttonVariants({ variant: "outline", size: "icon" }),
          "absolute top-2 left-2 h-8 w-8 bg-background/90 backdrop-blur-sm opacity-100 transition-opacity sm:opacity-0 sm:group-hover:opacity-100"
        )}
      >
        <Icons.zoomIn className="h-4 w-4" />
      </button>
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

interface NotebookCoverProps {
  title: string;
  subtitle?: string;
}

const NotebookCover = React.forwardRef<HTMLDivElement, NotebookCoverProps>(
  ({ title, subtitle }, ref) => (
    <div
      ref={ref}
      className="relative flex h-full w-full flex-col items-center justify-center gap-3 overflow-hidden bg-gradient-to-br from-neutral-800 via-neutral-950 to-black px-8 pt-10 text-center shadow-[inset_0_0_40px_rgba(0,0,0,0.6)] sm:pt-16"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15] mix-blend-screen"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.6' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      <p className="relative font-serif text-lg uppercase tracking-[0.35em] text-amber-100/90 sm:text-2xl">
        {title}
      </p>
      {subtitle && (
        <p className="relative font-serif text-lg uppercase tracking-[0.35em] text-amber-100/90 sm:text-2xl">
          {subtitle}
        </p>
      )}
    </div>
  )
);
NotebookCover.displayName = "NotebookCover";

interface NotebookViewerProps {
  pages: NotebookPageEntry[];
  coverTitle?: string;
  coverSubtitle?: string;
}

export default function NotebookViewer({
  pages,
  coverTitle = "Engineering Notebook",
  coverSubtitle,
}: NotebookViewerProps) {
  const flipBookRef = useRef<{ pageFlip: () => any } | null>(null);
  // Flipbook-internal index: 0 = cover, 1..pages.length = content pages.
  const [currentPage, setCurrentPage] = useState(0);
  const [zoomedIndex, setZoomedIndex] = useState<number | null>(null);

  const handleFlip = useCallback((e: { data: number }) => {
    setCurrentPage(e.data);
  }, []);

  // Instant jump, no flip animation — used by the slider so dragging
  // through many pages quickly doesn't queue up animations and lag.
  // Takes a content-page index (0-based, excluding the cover).
  const jumpToPage = useCallback((contentIndex: number) => {
    const flipIndex = contentIndex + 1;
    flipBookRef.current?.pageFlip()?.turnToPage(flipIndex);
    setCurrentPage(flipIndex);
  }, []);

  const flipPrev = useCallback(() => {
    flipBookRef.current?.pageFlip()?.flipPrev();
  }, []);

  const flipNext = useCallback(() => {
    flipBookRef.current?.pageFlip()?.flipNext();
  }, []);

  // When the lightbox closes, sync the book to whatever page was last
  // shown there (the user may have browsed with the lightbox's own
  // prev/next without the book behind it moving).
  const closeZoom = useCallback(() => {
    setZoomedIndex((index) => {
      if (index !== null) jumpToPage(index);
      return null;
    });
  }, [jumpToPage]);

  const zoomedPage = zoomedIndex !== null ? pages[zoomedIndex] : null;
  const isCover = currentPage === 0;
  const sliderValue = Math.max(0, currentPage - 1);

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
        {/* Desktop: arrows sit beside the book, which needs real flex width to
            stretch into. Hidden on mobile — there isn't room beside the book
            there, so a mobile-only overlay pair is used instead below. */}
        <button
          type="button"
          onClick={flipPrev}
          disabled={currentPage === 0}
          aria-label="Previous page"
          className={cn(
            buttonVariants({ variant: "outline", size: "icon" }),
            "hidden shrink-0 sm:inline-flex"
          )}
        >
          <Icons.chevronLeft className="h-4 w-4" />
        </button>

        <div className="relative flex min-w-0 flex-1 justify-center">
          <HTMLFlipBook
            width={PAGE_WIDTH}
            height={PAGE_HEIGHT}
            size="stretch"
            minWidth={180}
            maxWidth={PAGE_WIDTH}
            minHeight={220}
            maxHeight={PAGE_HEIGHT}
            showCover={true}
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
            useMouseEvents={false}
            swipeDistance={30}
            showPageCorners={false}
            disableFlipByClick={true}
            ref={flipBookRef}
          >
            <NotebookCover title={coverTitle} subtitle={coverSubtitle} />
            {pages.map((page, index) => (
              <NotebookPage
                key={page.image}
                page={page}
                pageNumber={index + 1}
                onZoom={() => setZoomedIndex(index)}
              />
            ))}
          </HTMLFlipBook>

          {/* Mobile-only overlay controls */}
          <button
            type="button"
            onClick={flipPrev}
            disabled={currentPage === 0}
            aria-label="Previous page"
            className={cn(
              buttonVariants({ variant: "outline", size: "icon" }),
              "absolute left-1 top-1/2 z-10 -translate-y-1/2 bg-background/85 backdrop-blur-sm sm:hidden"
            )}
          >
            <Icons.chevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={flipNext}
            disabled={currentPage === pages.length}
            aria-label="Next page"
            className={cn(
              buttonVariants({ variant: "outline", size: "icon" }),
              "absolute right-1 top-1/2 z-10 -translate-y-1/2 bg-background/85 backdrop-blur-sm sm:hidden"
            )}
          >
            <Icons.chevronRight className="h-4 w-4" />
          </button>
        </div>

        <button
          type="button"
          onClick={flipNext}
          disabled={currentPage === pages.length}
          aria-label="Next page"
          className={cn(
            buttonVariants({ variant: "outline", size: "icon" }),
            "hidden shrink-0 sm:inline-flex"
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
          value={sliderValue}
          onChange={(e) => jumpToPage(Number(e.target.value))}
          className="w-full accent-primary"
          aria-label="Jump to page"
        />
        <span className="text-xs text-muted-foreground">
          {isCover ? "Cover" : `Page ${currentPage} of ${pages.length}`}
        </span>
      </div>

      <Dialog open={zoomedIndex !== null} onOpenChange={(open) => !open && closeZoom()}>
        <DialogContent className="max-w-4xl w-[92vw] gap-3 bg-background p-3 sm:p-4">
          <DialogTitle className="sr-only">
            {zoomedIndex !== null ? `Notebook page ${zoomedIndex + 1}` : "Notebook page"}
          </DialogTitle>
          {zoomedPage && zoomedIndex !== null && (
            <>
              <div
                className="relative mx-auto w-full"
                style={{ aspectRatio: `${PAGE_WIDTH}/${PAGE_HEIGHT}`, maxHeight: "80vh" }}
              >
                <Image
                  src={zoomedPage.image}
                  alt={zoomedPage.caption ?? `Notebook page ${zoomedIndex + 1}`}
                  fill
                  sizes="92vw"
                  className="object-contain"
                  priority
                />

                <button
                  type="button"
                  onClick={() => setZoomedIndex((i) => Math.max(0, (i ?? 0) - 1))}
                  disabled={zoomedIndex === 0}
                  aria-label="Previous page"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "icon" }),
                    "absolute left-1 top-1/2 z-10 -translate-y-1/2 bg-background/85 backdrop-blur-sm sm:left-3"
                  )}
                >
                  <Icons.chevronLeft className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setZoomedIndex((i) => Math.min(pages.length - 1, (i ?? 0) + 1))
                  }
                  disabled={zoomedIndex === pages.length - 1}
                  aria-label="Next page"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "icon" }),
                    "absolute right-1 top-1/2 z-10 -translate-y-1/2 bg-background/85 backdrop-blur-sm sm:right-3"
                  )}
                >
                  <Icons.chevronRight className="h-4 w-4" />
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
                <div>
                  {zoomedPage.date && (
                    <span className="font-medium text-foreground">{zoomedPage.date}</span>
                  )}
                  {zoomedPage.caption && (
                    <span className="text-muted-foreground">
                      {zoomedPage.date ? " — " : ""}
                      {zoomedPage.caption}
                    </span>
                  )}
                </div>
                {zoomedPage.projectId && (
                  <Link
                    href={`/projects/${zoomedPage.projectId}`}
                    className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
                  >
                    View project
                  </Link>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
