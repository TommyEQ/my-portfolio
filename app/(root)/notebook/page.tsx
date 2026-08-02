import { Metadata } from "next";
import dynamic from "next/dynamic";

import { AnimatedSection } from "@/components/common/animated-section";
import PageContainer from "@/components/common/page-container";
import { notebookPages } from "@/config/notebook";
import { pagesConfig } from "@/config/pages";

const NotebookViewer = dynamic(
  () => import("@/components/notebook/notebook-viewer"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: pagesConfig.notebook.metadata.title,
  description: pagesConfig.notebook.metadata.description,
};

export default function NotebookPage() {
  return (
    <PageContainer
      title={pagesConfig.notebook.title}
      description={pagesConfig.notebook.description}
    >
      <AnimatedSection>
        <NotebookViewer pages={notebookPages} />
      </AnimatedSection>
    </PageContainer>
  );
}
