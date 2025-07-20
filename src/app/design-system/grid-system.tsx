import Text from "@/components/design-system/typography/body-text/Text"

export const GridSystem = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-8 text-primary">Grid System</h2>
      
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

        {/* Grid SM - Standard */}
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <div className="flex items-center justify-between mb-4">
            <Text variant="body-strong">Small Grid (Standard)</Text>
            <Text variant="body-x-small" className="text-muted-foreground">
              5 columns • 24px gutter • 72px margin • 640px+
            </Text>
          </div>
          <div className="grid-container-sm">
            {Array.from({ length: 5 }, (_, i) => (
              <div key={i} className="bg-primary/20 p-4 rounded text-center text-sm font-medium border border-primary/30">
                Col {i + 1}
              </div>
            ))}
          </div>
          <Text variant="body-x-small" className="text-muted-foreground mt-2">
            Responsive: Falls back to 2 columns on mobile
          </Text>
        </div>

        {/* Grid MD - Tablet Portrait */}
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <div className="flex items-center justify-between mb-4">
            <Text variant="body-strong">Medium Grid (Tablet Portrait)</Text>
            <Text variant="body-x-small" className="text-muted-foreground">
              8 columns • 24px gutter • 72px margin • 768px+
            </Text>
          </div>
          <div className="grid-container-md">
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i} className="bg-primary/20 p-4 rounded text-center text-sm font-medium border border-primary/30">
                Col {i + 1}
              </div>
            ))}
          </div>
          <Text variant="body-x-small" className="text-muted-foreground mt-2">
            Responsive: 2 cols (mobile) → 5 cols (640px+) → 8 cols (768px+)
          </Text>
        </div>

        {/* Grid LG - HD */}
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <div className="flex items-center justify-between mb-4">
            <Text variant="body-strong">Large Grid (HD)</Text>
            <Text variant="body-x-small" className="text-muted-foreground">
              8 columns • 32px gutter • 128px margin • 1280px+
            </Text>
          </div>
          <div className="grid-container-lg">
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i} className="bg-primary/20 p-4 rounded text-center text-sm font-medium border border-primary/30">
                Col {i + 1}
              </div>
            ))}
          </div>
          <Text variant="body-x-small" className="text-muted-foreground mt-2">
            Responsive: 2 cols → 5 cols → 8 cols → 8 cols (larger gutter)
          </Text>
        </div>

        {/* Grid XL - Full HD */}
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <div className="flex items-center justify-between mb-4">
            <Text variant="body-strong">Extra Large Grid (Full HD)</Text>
            <Text variant="body-x-small" className="text-muted-foreground">
              12 columns • 32px gutter • 76px margin • 1920px+
            </Text>
          </div>
          <div className="grid-container-xl">
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i} className="bg-primary/20 p-4 rounded text-center text-sm font-medium border border-primary/30">
                Col {i + 1}
              </div>
            ))}
          </div>
          <Text variant="body-x-small" className="text-muted-foreground mt-2">
            Responsive: 2 cols → 5 cols → 8 cols → 8 cols → 12 cols (full HD)
          </Text>
        </div>

        {/* Grid Usage Examples */}
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
          <Text variant="body-strong" className="mb-4">
            Practical Layout Examples
          </Text>
          
          <div className="space-y-6">
            {/* Example 1: Content layout with different spans */}
            <div>
              <Text variant="body-small-strong" className="mb-2">
                Sidebar + Main Content Layout (Medium Grid)
              </Text>
              <div className="grid-container-md">
                <div className="bg-blue-100 p-4 rounded text-center text-sm font-medium border border-blue-300 md:col-span-2">
                  Sidebar<br />
                  <span className="text-xs text-muted-foreground">(2 cols on md+)</span>
                </div>
                <div className="bg-green-100 p-4 rounded text-center text-sm font-medium border border-green-300 md:col-span-6">
                  Main Content<br />
                  <span className="text-xs text-muted-foreground">(6 cols on md+)</span>
                </div>
              </div>
              <Text variant="body-x-small" className="text-muted-foreground mt-1">
                On mobile: stacked layout, on tablet+: sidebar and main content side by side
              </Text>
            </div>

            {/* Example 2: Card layout */}
            <div>
              <Text variant="body-small-strong" className="mb-2">
                Three-Card Layout (Extra Large Grid)
              </Text>
              <div className="grid-container-xl">
                <div className="bg-purple-100 p-4 rounded text-center text-sm font-medium border border-purple-300 xl:col-span-4">
                  Feature Card 1<br />
                  <span className="text-xs text-muted-foreground">(4 cols on xl+)</span>
                </div>
                <div className="bg-purple-100 p-4 rounded text-center text-sm font-medium border border-purple-300 xl:col-span-4">
                  Feature Card 2<br />
                  <span className="text-xs text-muted-foreground">(4 cols on xl+)</span>
                </div>
                <div className="bg-purple-100 p-4 rounded text-center text-sm font-medium border border-purple-300 xl:col-span-4">
                  Feature Card 3<br />
                  <span className="text-xs text-muted-foreground">(4 cols on xl+)</span>
                </div>
              </div>
              <Text variant="body-x-small" className="text-muted-foreground mt-1">
                Responsive: stacked on mobile, adaptive columns on larger screens
              </Text>
            </div>

            {/* Example 3: Complex layout */}
            <div>
              <Text variant="body-small-strong" className="mb-2">
                Complex Content Layout (Extra Large Grid)
              </Text>
              <div className="grid-container-xl">
                <div className="bg-orange-100 p-4 rounded text-center text-sm font-medium border border-orange-300 xl:col-span-8">
                  Main Article<br />
                  <span className="text-xs text-muted-foreground">(8 cols on xl+)</span>
                </div>
                <div className="bg-yellow-100 p-4 rounded text-center text-sm font-medium border border-yellow-300 xl:col-span-2">
                  Ads<br />
                  <span className="text-xs text-muted-foreground">(2 cols)</span>
                </div>
                <div className="bg-cyan-100 p-4 rounded text-center text-sm font-medium border border-cyan-300 xl:col-span-2">
                  Related<br />
                  <span className="text-xs text-muted-foreground">(2 cols)</span>
                </div>
              </div>
            </div>
          </div>
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