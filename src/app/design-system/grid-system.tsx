import Text from "@/components/design-system/typography/body-text/Text"

export const GridSystem = ()=>{
    return(
        <div>
        <h2 className="text-2xl font-bold mb-8 text-primary">Grid System</h2>
        
        <div className="space-y-8">
          {/* Grid XS - Mobile Portrait */}
          <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
            <p className="text-sm text-muted-foreground mb-4">
              Extra Small (Mobile Portrait) - 2 columns, 24px gutter, 16px margin
            </p>
            <div className="grid-container-xs">
              <div className="bg-primary/20 p-4 rounded text-center text-sm font-medium">
                Column 1
              </div>
              <div className="bg-primary/20 p-4 rounded text-center text-sm font-medium">
                Column 2
              </div>
            </div>
          </div>

          {/* Grid SM - Standard */}
          <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
            <p className="text-sm text-muted-foreground mb-4">
              Small (Standard) - 5 columns, 24px gutter, 72px margin (640px+)
            </p>
            <div className="grid-container-sm">
              {Array.from({ length: 5 }, (_, i) => (
                <div key={i} className="bg-primary/20 p-4 rounded text-center text-sm font-medium">
                  Col {i + 1}
                </div>
              ))}
            </div>
          </div>

          {/* Grid MD - Tablet Portrait */}
          <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
            <p className="text-sm text-muted-foreground mb-4">
              Medium (Tablet Portrait) - 8 columns, 24px gutter, 72px margin (768px+)
            </p>
            <div className="grid-container-md">
              {Array.from({ length: 8 }, (_, i) => (
                <div key={i} className="bg-primary/20 p-4 rounded text-center text-sm font-medium">
                  Col {i + 1}
                </div>
              ))}
            </div>
          </div>

          {/* Grid LG - HD */}
          <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
            <p className="text-sm text-muted-foreground mb-4">
              Large (HD) - 8 columns, 32px gutter, 128px margin (1280px+)
            </p>
            <div className="grid-container-lg">
              {Array.from({ length: 8 }, (_, i) => (
                <div key={i} className="bg-primary/20 p-4 rounded text-center text-sm font-medium">
                  Col {i + 1}
                </div>
              ))}
            </div>
          </div>

          {/* Grid XL - Full HD */}
          <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
            <p className="text-sm text-muted-foreground mb-4">
              Extra Large (Full HD) - 12 columns, 32px gutter, 76px margin (1920px+)
            </p>
            <div className="grid-container-xl">
              {Array.from({ length: 12 }, (_, i) => (
                <div key={i} className="bg-primary/20 p-4 rounded text-center text-sm font-medium">
                  Col {i + 1}
                </div>
              ))}
            </div>
          </div>

          {/* Grid Usage Examples */}
          <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
            <p className="text-sm text-muted-foreground mb-4">
              Grid Usage Examples - Items spanning multiple columns
            </p>
            
            <div className="space-y-6">
              {/* Example 1: Content layout with different spans */}
              <div>
                <Text variant="body-small-strong" className="mb-2">
                  Content Layout Example (8-column grid on medium+)
                </Text>
                <div className="grid-container-md">
                  <div className="bg-primary/30 p-4 rounded text-center text-sm font-medium md:col-span-2">
                    Sidebar<br />(2 cols)
                  </div>
                  <div className="bg-primary/20 p-4 rounded text-center text-sm font-medium md:col-span-6">
                    Main Content Area<br />(6 cols)
                  </div>
                </div>
              </div>

              {/* Example 2: Card layout */}
              <div>
                <Text variant="body-small-strong" className="mb-2">
                  Card Layout Example (12-column grid on XL)
                </Text>
                <div className="grid-container-xl">
                  <div className="bg-primary/20 p-4 rounded text-center text-sm font-medium xl:col-span-4">
                    Card 1<br />(4 cols)
                  </div>
                  <div className="bg-primary/20 p-4 rounded text-center text-sm font-medium xl:col-span-4">
                    Card 2<br />(4 cols)
                  </div>
                  <div className="bg-primary/20 p-4 rounded text-center text-sm font-medium xl:col-span-4">
                    Card 3<br />(4 cols)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Grid Implementation Guide */}
          <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
            <p className="text-sm text-muted-foreground mb-4">How to use the Grid System</p>
            
            <div className="space-y-4">
              <Text variant="body-base">
                Use the grid container classes to create responsive layouts:
              </Text>
              
              <div className="space-y-2">
                <Text variant="body-code" as="code" className="block bg-muted p-2 rounded">
                  &lt;div className="grid-container-md"&gt;
                </Text>
                <Text variant="body-code" as="code" className="block bg-muted p-2 rounded ml-4">
                  &lt;div className="md:col-span-2"&gt;Sidebar&lt;/div&gt;
                </Text>
                <Text variant="body-code" as="code" className="block bg-muted p-2 rounded ml-4">
                  &lt;div className="md:col-span-6"&gt;Main Content&lt;/div&gt;
                </Text>
                <Text variant="body-code" as="code" className="block bg-muted p-2 rounded">
                  &lt;/div&gt;
                </Text>
              </div>

              <Text variant="body-small">
                The grid system automatically adjusts columns, gutters, and margins based on screen size.
                Use Tailwind's responsive grid utilities (col-span-*) to control how many columns elements span.
              </Text>
            </div>
          </div>
        </div>
      </div>
    )
}

export default GridSystem