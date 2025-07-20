import SectionHeader from "@/components/common/section-header";
import Text from "@/components/design-system/typography/body-text/Text";
import ArrowIcon from "@/components/icons/arrow-icon";
import { Button } from "@/components/ui/button";

export default function NewsIntro() {
  return (
    <div>
      <SectionHeader
        subtitle="Knowledge is power"
        title="Financial news and insights from Fedgroup"
        subtitleVariant="descriptor-accent"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-10">
        <article className="prose prose-lg">
          <Text variant="lead-paragraph">
            Empower yourself with these educational and insightful articles
            about market trends, investment news, contributions from our thought
            leaders, and exciting announcements!
          </Text>
        </article>

        <div className="flex justify-center md:justify-end items-center md:items-end">
          <Button
            variant="default"
            icon={<ArrowIcon direction="right" className="w-4 h-4" />}
            iconPosition="right"
          >
            See all articles
          </Button>
        </div>
      </div>
    </div>
  );
}
