import Heading from "@/components/design-system/typography/heading/Heading";

export const HeadingVariants = () => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-8 text-primary">Heading Variants</h2>

      <div className="space-y-6">
        {/* Heading 1 Title Hero */}
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <p className="text-sm text-muted-foreground mb-2">
            Heading 1 Title Hero (Montserrat 700, 48px, -2% LS)
          </p>
          <Heading variant="heading-1-page-title" className="text-primary-brand">
            Quick fox jumps nightly above wizard
          </Heading>
        </div>

        {/* Heading 1 Title Hero Accent */}
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <p className="text-sm text-muted-foreground mb-2">
            Heading 1 Title Hero Accent (Bitter 700, 48px, -1% LS)
          </p>
          <Heading variant="heading-1-page-title-accent" className="text-primary-brand">
            Quick fox jumps nightly above wizard
          </Heading>
        </div>

        {/* Heading 2 */}
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <p className="text-sm text-muted-foreground mb-2">
            Heading 2 (Montserrat 700, 38px, -1.5% LS)
          </p>
          <Heading variant="heading-2">
            Fix problem quickly with galvanized jets
          </Heading>
        </div>

        {/* Heading 2 Small */}
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <p className="text-sm text-muted-foreground mb-2">
            Heading 2 Small (Montserrat 700, 16px, -1.5% LS)
          </p>
          <Heading variant="heading-2-small">
            Fix problem quickly with galvanized jets
          </Heading>
        </div>

        {/* Heading 2 Page Subtitle */}
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <p className="text-sm text-muted-foreground mb-2">
            Heading 2 Page Subtitle (Montserrat 400, 24px, 0% LS)
          </p>
          <Heading variant="heading-2-page-subtitle">
            With high returns and low volatility, no fees and no tax, it's the best of both worlds!
          </Heading>
        </div>

        {/* Heading 3 */}
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <p className="text-sm text-muted-foreground mb-2">
            Heading 3 (Montserrat 700, 32px, -1.5% LS)
          </p>
          <Heading variant="heading-3">
            Show mangled quartz flip vibe exactly
          </Heading>
        </div>

        {/* Heading 4 */}
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <p className="text-sm text-muted-foreground mb-2">
            Heading 4 (Montserrat 700, 28px, -0.5% LS)
          </p>
          <Heading variant="heading-4">
            Quick fox jumps nightly above wizard
          </Heading>
        </div>

        {/* Heading 4 Accent */}
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <p className="text-sm text-muted-foreground mb-2">
            Heading 4 Accent (Bitter 400, 22px, 0.1% LS)
          </p>
          <Heading variant="heading-4-accent" as="p">
            Heavy boxes perform quick waltzes and jigs
          </Heading>
        </div>

        {/* Heading 5 */}
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <p className="text-sm text-muted-foreground mb-2">
            Heading 5 (Montserrat 700, 22px, -0.1% LS)
          </p>
          <Heading variant="heading-5">
            Quick fox jumps nightly above wizard
          </Heading>
        </div>

        {/* Heading 6 */}
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <p className="text-sm text-muted-foreground mb-2">
            Heading 6 (Montserrat 700, 18px, 0% LS)
          </p>
          <Heading variant="heading-6">
            Heavy boxes perform quick waltzes and jigs
          </Heading>
        </div>

        {/* Lead Body */}
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <p className="text-sm text-muted-foreground mb-2">
            Lead Body (Inter 600, 18px, 0.1% LS)
          </p>
          <Heading variant="lead-body" as="p">
            Fix problem quickly with galvanized jets
          </Heading>
        </div>

        {/* Example with custom classes applied directly via `className` prop */}
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <p className="text-sm text-muted-foreground mb-2">
            Heading 2 with custom primary color and underline
          </p>
          <Heading
            variant="heading-2"
            as="h2"
            className="text-primary underline"
          >
            This Heading 2 is now a different color and underlined.
          </Heading>
        </div>
      </div>
    </div>
  );
};
