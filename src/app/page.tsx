import ColorShowcase from "./design-system/color-showcase";
import GridSystem from "./design-system/grid-system";
import { HeadingVariants } from "./design-system/heading-variants";
import TextVariants from "./design-system/text-variants";

export default function HomePage() {
  return (
    <div className="container mx-auto p-8 bg-primary-brand min-h-screen text-foreground">
      <h1 className="text-4xl font-bold mb-12 text-center text-primary">
        My Design System Typography Showcase
      </h1>

      <div className="space-y-10">

        {/* === HEADING VARIANTS === */}
        <HeadingVariants/>
        {/* === TEXT VARIANTS === */}
        <TextVariants/>

        {/* === GRID SYSTEM === */}
        <GridSystem/>

        {/* === COLOR SYSTEM === */}
        <ColorShowcase/>

      </div>
    </div>
  );
}