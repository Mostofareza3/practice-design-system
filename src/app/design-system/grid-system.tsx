import Text from "@/components/design-system/typography/body-text/Text"

export const GridSystem = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-8 text-fedpink">Grid System</h2>
      
      <div className="space-y-8">
        {/* Grid System Overview */}
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <Text variant="body-strong" className="mb-4">
            Responsive Grid System Overview
          </Text>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-muted p-4 rounded">
              <Text variant="body-small-strong">XS (Mobile)</Text>
              <Text variant="body-x-small">2 cols, 24px gap, 16px margin</Text>
            </div>
            <div className="bg-muted p-4 rounded">
              <Text variant="body-small-strong">SM (640px+)</Text>
              <Text variant="body-x-small">5 cols, 24px gap, 72px margin</Text>
            </div>
            <div className="bg-muted p-4 rounded">
              <Text variant="body-small-strong">MD (768px+)</Text>
              <Text variant="body-x-small">8 cols, 24px gap, 72px margin</Text>
            </div>
            <div className="bg-muted p-4 rounded">
              <Text variant="body-small-strong">LG (1280px+)</Text>
              <Text variant="body-x-small">8 cols, 32px gap, 128px margin</Text>
            </div>
            <div className="bg-muted p-4 rounded">
              <Text variant="body-small-strong">XL (1920px+)</Text>
              <Text variant="body-x-small">12 cols, 32px gap, 76px margin</Text>
            </div>
          </div>
        </div>

        {/* Grid XS - Mobile Portrait */}
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <div className="flex items-center justify-between mb-4">
            <Text variant="body-strong">Extra Small Grid (Mobile Portrait)</Text>
            <Text variant="body-x-small" className="text-muted-foreground">
              2 columns • 24px gutter • 16px margin
            </Text>
          </div>
          <div className="grid-container-xs">
            <div className="bg-primary/20 p-4 rounded text-center text-sm font-medium border border-primary/30">
              Column 1
            </div>
            <div className="bg-primary/20 p-4 rounded text-center text-sm font-medium border border-primary/30">
              Column 2
            </div>
          </div>
          <Text variant="body-x-small" className="text-muted-foreground mt-2">
            Always visible on all screen sizes
          </Text>
        </div>


        {/* Grid Implementation Guide */}
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <Text variant="body-strong" className="mb-4">
            Implementation Guide
          </Text>
          
          <div className="space-y-4">
            <Text variant="body-base">
              Use the appropriate grid container class for your layout needs:
            </Text>
            
            <div className="bg-muted p-4 rounded space-y-3">
              <div>
                <Text variant="body-code" as="code" className="block">
                  &lt;div className=&quot;grid-container-md&quot;&gt;
                </Text>
                <Text variant="body-code" as="code" className="block ml-4">
                  &lt;div className=&quot;md:col-span-2&quot;&gt;Sidebar&lt;/div&gt;
                </Text>
                <Text variant="body-code" as="code" className="block ml-4">
                  &lt;div className=&quot;md:col-span-6&quot;&gt;Main Content&lt;/div&gt;
                </Text>
                <Text variant="body-code" as="code" className="block">
                  &lt;/div&gt;
                </Text>
              </div>
            </div>

            <div className="space-y-2">
              <Text variant="body-strong">Available Grid Containers:</Text>
              <ul className="space-y-1 ml-4">
                <li><Text variant="body-small"><code className="bg-muted px-1 rounded">grid-container-xs</code> - Fixed 2-column mobile grid</Text></li>
                <li><Text variant="body-small"><code className="bg-muted px-1 rounded">grid-container-sm</code> - Responsive: 2 cols → 5 cols at 640px+</Text></li>
                <li><Text variant="body-small"><code className="bg-muted px-1 rounded">grid-container-md</code> - Responsive: 2 → 5 → 8 cols at 768px+</Text></li>
                <li><Text variant="body-small"><code className="bg-muted px-1 rounded">grid-container-lg</code> - Same as MD but larger gutters at 1280px+</Text></li>
                <li><Text variant="body-small"><code className="bg-muted px-1 rounded">grid-container-xl</code> - Full responsive: 2 → 5 → 8 → 8 → 12 cols at 1920px+</Text></li>
              </ul>
            </div>

            <Text variant="body-small" className="text-muted-foreground">
              💡 Tip: Use Tailwind&apos;s responsive grid utilities (col-span-*) with breakpoint prefixes 
              to control how many columns elements span at different screen sizes.
            </Text>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GridSystem