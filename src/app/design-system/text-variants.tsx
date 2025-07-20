import Text from "@/components/design-system/typography/body-text/Text";

export const TextVariants = () => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-8 text-primary">Body Text Variants</h2>

      <div className="space-y-6">
        {/* Lead Paragraph */}
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <p className="text-sm text-muted-foreground mb-2">
            Lead Paragraph (Inter 600, 18px, 0.8% LS)
          </p>
          <Text variant="lead-paragraph">
            This is a lead paragraph that introduces important content and draws the reader&&apos;s attention with its distinctive styling and emphasis.
          </Text>
        </div>

        {/* Lead Body Style */}
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <p className="text-sm text-muted-foreground mb-2">
            Lead Body Style (Inter 600, 18px, 0.1% LS)
          </p>
          <Text variant="lead-body-style">
            This is lead body style text used for prominent content that needs emphasis but not as strong as lead paragraph.
          </Text>
        </div>

        {/* Body Large */}
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <p className="text-sm text-muted-foreground mb-2">
            Body Large (Inter 400, 18px, 0.4% LS)
          </p>
          <Text variant="body-large">
            This is large body text used for important content that needs to stand out from regular body text while maintaining readability.
          </Text>
        </div>

        {/* Body Large Accent */}
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <p className="text-sm text-muted-foreground mb-2">
            Body Large Accent (Bitter 400, 18px, 0.4% LS)
          </p>
          <Text variant="body-large-accent">
            This is large body text with accent font (Bitter) used for stylistic variation while maintaining the same size as body large.
          </Text>
        </div>

        {/* Body Base */}
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <p className="text-sm text-muted-foreground mb-2">
            Body Base (Inter 400, 16px, 0.5% LS)
          </p>
          <Text variant="body-base">
            This is the default body text used for most content. It provides excellent readability and is the foundation of your text hierarchy.
          </Text>
        </div>

        {/* Body Base Accent */}
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <p className="text-sm text-muted-foreground mb-2">
            Body Base Accent (Bitter 400, 16px, 0.5% LS)
          </p>
          <Text variant="body-base-accent">
            This is body text with accent font (Bitter) used for stylistic variation while maintaining the same size as regular body text.
          </Text>
        </div>

        {/* Body Strong */}
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <p className="text-sm text-muted-foreground mb-2">
            Body Strong (Inter 700, 16px, 0.1% LS)
          </p>
          <Text variant="body-strong">
            This is strong body text used to emphasize important information within regular content flow.
          </Text>
        </div>

        {/* Body Bold */}
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <p className="text-sm text-muted-foreground mb-2">
            Body Bold (Inter 700, 16px, 0.5% LS)
          </p>
          <Text variant="body-bold">
            This is bold body text used for emphasis and important callouts within regular content.
          </Text>
        </div>

        {/* Body Small */}
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <p className="text-sm text-muted-foreground mb-2">
            Body Small (Inter 400, 14px, 0.3% LS)
          </p>
          <Text variant="body-small">
            This is small body text used for secondary information, captions, or supporting content that doesn&apos;t need as much visual weight.
          </Text>
        </div>

        {/* Body Small Accent */}
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <p className="text-sm text-muted-foreground mb-2">
            Body Small Accent (Bitter 400, 14px, 0.3% LS)
          </p>
          <Text variant="body-small-accent">
            This is small body text with accent font (Bitter) used for stylistic secondary information and supporting content.
          </Text>
        </div>

        {/* Body Small Strong */}
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <p className="text-sm text-muted-foreground mb-2">
            Body Small Strong (Inter 700, 14px, 0% LS)
          </p>
          <Text variant="body-small-strong">
            This is small strong text used for emphasized secondary information and important small details.
          </Text>
        </div>

        {/* Body X-Small */}
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <p className="text-sm text-muted-foreground mb-2">
            Body X-Small (Inter 400, 12px, 0.6% LS)
          </p>
          <Text variant="body-x-small">
            This is extra small body text used for fine print, legal text, timestamps, and minimal supporting information.
          </Text>
        </div>

        {/* Body X-Small Accent */}
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <p className="text-sm text-muted-foreground mb-2">
            Body X-Small Accent (Bitter 400, 12px, 0.6% LS)
          </p>
          <Text variant="body-x-small-accent">
            This is extra small body text with accent font used for stylistic fine print and minimal supporting information.
          </Text>
        </div>

        {/* Body X-Small Bold */}
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <p className="text-sm text-muted-foreground mb-2">
            Body X-Small Bold (Inter 700, 12px, 0.6% LS)
          </p>
          <Text variant="body-x-small-bold">
            This is extra small bold text used for emphasized fine print and important minimal details.
          </Text>
        </div>

        {/* Descriptor Accent */}
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <p className="text-sm text-muted-foreground mb-2">
            Descriptor Accent (Bitter 400, 22px, 0.5% LS)
          </p>
          <Text variant="descriptor-accent" as="span">
            Descriptor Accent Text
          </Text>
        </div>

        {/* Descriptor Accent Small */}
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <p className="text-sm text-muted-foreground mb-2">
            Descriptor Accent Small (Bitter 400, 14px, 0% LS)
          </p>
          <Text variant="descriptor-accent-small" as="span">
            Small Descriptor Accent Text
          </Text>
        </div>

        {/* Descriptor Accent Medium */}
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <p className="text-sm text-muted-foreground mb-2">
            Descriptor Accent Medium (Bitter 500, 22px, 0.1% LS)
          </p>
          <Text variant="descriptor-accent-medium" as="span">
            Medium Descriptor Accent Text
          </Text>
        </div>

        {/* Body Emphasis */}
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <p className="text-sm text-muted-foreground mb-2">
            Body Emphasis (Inter 400, 16px, 0.1% LS, Italic)
          </p>
          <Text variant="body-emphasis">
            This is emphasized body text with italic styling used for quotes, citations, or special emphasis within content.
          </Text>
        </div>

        {/* Body Code */}
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <p className="text-sm text-muted-foreground mb-2">
            Body Code (Roboto Mono 400, 16px, 0% LS)
          </p>
          <Text variant="body-code">
            const greeting = &quot;Hello, World!&quot;; // This is code text
          </Text>
        </div>

        {/* Body Link Underline */}
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <p className="text-sm text-muted-foreground mb-2">
            Body Link Underline (Inter 500, 14px, 0.5% LS, Underlined)
          </p>
          <Text variant="body-link-underline" as="a" className="text-blue-600">
            This is a link with underline styling
          </Text>
        </div>

        {/* Custom Example */}
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <p className="text-sm text-muted-foreground mb-2">
            Body Base with custom styling
          </p>
          <Text variant="body-base" className="text-primary-brand border-l-4 border-primary-brand pl-4">
            This demonstrates how you can add custom styling to any text variant while preserving the base typography characteristics.
          </Text>
        </div>
      </div>
    </div>
  );
};
export default TextVariants;
