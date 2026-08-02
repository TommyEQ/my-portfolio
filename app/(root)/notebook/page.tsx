import { Metadata } from "next";
import dynamic from "next/dynamic";

import { AnimatedSection } from "@/components/common/animated-section";
import PageContainer from "@/components/common/page-container";
import { ResponsiveTabs } from "@/components/ui/responsive-tabs";
import { notebooks } from "@/config/notebook";
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
  const tabItems = notebooks.map((notebook) => ({
    value: notebook.id,
    label: notebook.title,
    content: <NotebookViewer pages={notebook.pages} />,
  }));

  return (
    <PageContainer
      title={pagesConfig.notebook.title}
      description={pagesConfig.notebook.description}
    >
      <AnimatedSection>
        {tabItems.length > 1 ? (
          <ResponsiveTabs items={tabItems} defaultValue={tabItems[0]?.value} />
        ) : (
          tabItems[0]?.content
        )}
      </AnimatedSection>
    </PageContainer>
  );
}
