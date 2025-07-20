"use client";

import React, { useState } from 'react';
import Text from "@/components/design-system/typography/body-text/Text";
import Heading from "@/components/design-system/typography/heading/Heading";

interface ColorData {
  name: string;
  variable: string;
  value: string;
  description?: string;
}

interface ColorPalette {
  title: string;
  description?: string;
  colors: ColorData[];
}

const ColorShowcase: React.FC = () => {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const copyToClipboard = async (text: string, colorName: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedColor(colorName);
      setTimeout(() => setCopiedColor(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const colorPalettes: ColorPalette[] = [
    {
      title: "Core Brand Colors",
      description: "Primary colors that define the FedGroup brand identity",
      colors: [
        { name: "Primary Brand", variable: "--color-primary-brand", value: "#111C4D", description: "Main brand color (FedBlue)" },
        { name: "Primary CTAs", variable: "--color-primary-ctas", value: "#DE176D", description: "Primary call-to-action color (FedPink)" },
        { name: "Warning", variable: "--color-warning", value: "#E5A000", description: "Warning states and highlights" },
        { name: "Error", variable: "--color-error", value: "#CF1511", description: "Error and destructive actions" },
        { name: "Success", variable: "--color-success", value: "#0F7A44", description: "Success and confirmation" },
        { name: "Information", variable: "--color-information", value: "#54616C", description: "Info states and neutral UI" },
        { name: "Section Background", variable: "--color-section-background", value: "#FAFAFA", description: "Page or section backgrounds" },
        { name: "Input Background", variable: "--color-input-background", value: "#F0F2FC", description: "Input and form backgrounds" },
        { name: "Page Neutral", variable: "--color-page-neutral", value: "#F7F8F9", description: "Neutral UI elements" },
      ]
    },
    {
      title: "FedBlue Palette",
      description: "The complete FedBlue color scale from light to dark",
      colors: [
        { name: "FedBlue 50", variable: "--color-fedblue-50", value: "#EBECF6" },
        { name: "FedBlue 100", variable: "--color-fedblue-100", value: "#C3C7E6" },
        { name: "FedBlue 200", variable: "--color-fedblue-200", value: "#9AA1D9" },
        { name: "FedBlue 300", variable: "--color-fedblue-300", value: "#6E7ACD" },
        { name: "FedBlue 400", variable: "--color-fedblue-400", value: "#4053C4" },
        { name: "FedBlue 500", variable: "--color-fedblue-500", value: "#2D3FA0" },
        { name: "FedBlue 600", variable: "--color-fedblue-600", value: "#1E2D78" },
        { name: "FedBlue 700", variable: "--color-fedblue-700", value: "#111C4D" },
        { name: "FedBlue 800", variable: "--color-fedblue-800", value: "#141B3C" },
        { name: "FedBlue 900", variable: "--color-fedblue-900", value: "#14192E" },
        { name: "FedBlue 950", variable: "--color-fedblue-950", value: "#131621" },
      ]
    },
    {
      title: "FedPink Palette",
      description: "The complete FedPink color scale from light to dark",
      colors: [
        { name: "FedPink 50", variable: "--color-fedpink-50", value: "#FEEFF5" },
        { name: "FedPink 100", variable: "--color-fedpink-100", value: "#FBC4DA" },
        { name: "FedPink 200", variable: "--color-fedpink-200", value: "#F79AC0" },
        { name: "FedPink 300", variable: "--color-fedpink-300", value: "#F370A7" },
        { name: "FedPink 400", variable: "--color-fedpink-400", value: "#EE478E" },
        { name: "FedPink 500", variable: "--color-fedpink-500", value: "#E81F76" },
        { name: "FedPink 525", variable: "--color-fedpink-525", value: "#DE176D" },
        { name: "FedPink 550", variable: "--color-fedpink-550", value: "#D41669" },
        { name: "FedPink 600", variable: "--color-fedpink-600", value: "#C31760" },
        { name: "FedPink 650", variable: "--color-fedpink-650", value: "#A91452" },
        { name: "FedPink 700", variable: "--color-fedpink-700", value: "#98144C" },
        { name: "FedPink 800", variable: "--color-fedpink-800", value: "#6E1038" },
        { name: "FedPink 900", variable: "--color-fedpink-900", value: "#450B23" },
        { name: "FedPink 950", variable: "--color-fedpink-950", value: "#1D050F" },
      ]
    },
    {
      title: "FedGrey Palette",
      description: "The complete FedGrey color scale from light to dark",
      colors: [
        { name: "FedGrey 50", variable: "--color-fedgrey-50", value: "#F7F8F9" },
        { name: "FedGrey 100", variable: "--color-fedgrey-100", value: "#DEE2E6" },
        { name: "FedGrey 200", variable: "--color-fedgrey-200", value: "#C6CDD4" },
        { name: "FedGrey 300", variable: "--color-fedgrey-300", value: "#ADB7C1" },
        { name: "FedGrey 400", variable: "--color-fedgrey-400", value: "#95A2AE" },
        { name: "FedGrey 500", variable: "--color-fedgrey-500", value: "#7C8C9A" },
        { name: "FedGrey 600", variable: "--color-fedgrey-600", value: "#677785" },
        { name: "FedGrey 700", variable: "--color-fedgrey-700", value: "#54616C" },
        { name: "FedGrey 800", variable: "--color-fedgrey-800", value: "#485359" },
        { name: "FedGrey 900", variable: "--color-fedgrey-900", value: "#3B4447" },
        { name: "FedGrey 950", variable: "--color-fedgrey-950", value: "#2E3435" },
      ]
    },
    {
      title: "Status Colors",
      description: "Extended color palettes for different states and purposes",
      colors: [
        { name: "Blue 500", variable: "--color-blue-500", value: "#5396FB" },
        { name: "Green 500", variable: "--color-green-500", value: "#14AE5C" },
        { name: "Yellow 500", variable: "--color-yellow-500", value: "#E5A000" },
        { name: "Red 500", variable: "--color-red-500", value: "#EB2E1E" },
        { name: "Orange 500", variable: "--color-fedorange-500", value: "#FF6600" },
        { name: "Electric Blue 500", variable: "--color-electricblue-500", value: "#4ED7FF" },
      ]
    },
    {
      title: "Data Visualization - Qualitative",
      description: "12 colors for categorical data visualization",
      colors: [
        { name: "QC 1", variable: "--color-qc-1", value: "#0FB5AE" },
        { name: "QC 2", variable: "--color-qc-2", value: "#4046CA" },
        { name: "QC 3", variable: "--color-qc-3", value: "#F68511" },
        { name: "QC 4", variable: "--color-qc-4", value: "#DE3D82" },
        { name: "QC 5", variable: "--color-qc-5", value: "#7E84FA" },
        { name: "QC 6", variable: "--color-qc-6", value: "#72E06A" },
        { name: "QC 7", variable: "--color-qc-7", value: "#147AF3" },
        { name: "QC 8", variable: "--color-qc-8", value: "#7326D3" },
        { name: "QC 9", variable: "--color-qc-9", value: "#E8C600" },
        { name: "QC 10", variable: "--color-qc-10", value: "#CB5D00" },
        { name: "QC 11", variable: "--color-qc-11", value: "#008F5D" },
        { name: "QC 12", variable: "--color-qc-12", value: "#BCE931" },
      ]
    },
    {
      title: "Data Visualization - Divergent",
      description: "Red-Yellow-Blue divergent color scale for data visualization",
      colors: [
        { name: "Red 7", variable: "--color-dryb-r7", value: "#4A001E" },
        { name: "Red 6", variable: "--color-dryb-r6", value: "#751232" },
        { name: "Red 5", variable: "--color-dryb-r5", value: "#A52747" },
        { name: "Red 4", variable: "--color-dryb-r4", value: "#C65154" },
        { name: "Red 3", variable: "--color-dryb-r3", value: "#E47961" },
        { name: "Red 2", variable: "--color-dryb-r2", value: "#F0A882" },
        { name: "Red 1", variable: "--color-dryb-r1", value: "#FAD4AC" },
        { name: "Yellow 0", variable: "--color-dryb-y0", value: "#FFFFE0" },
        { name: "Blue 1", variable: "--color-dryb-b1", value: "#BCE2CF" },
        { name: "Blue 2", variable: "--color-dryb-b2", value: "#89C0C4" },
        { name: "Blue 3", variable: "--color-dryb-b3", value: "#579EB9" },
        { name: "Blue 4", variable: "--color-dryb-b4", value: "#397AA8" },
        { name: "Blue 5", variable: "--color-dryb-b5", value: "#1C5796" },
        { name: "Blue 6", variable: "--color-dryb-b6", value: "#163771" },
        { name: "Blue 7", variable: "--color-dryb-b7", value: "#10194D" },
      ]
    },
  ];

  const ColorSwatch: React.FC<{ color: ColorData; size?: 'small' | 'medium' | 'large' }> = ({ 
    color, 
    size = 'medium' 
  }) => {
    const sizeClasses = {
      small: 'w-12 h-12',
      medium: 'w-16 h-16',
      large: 'w-24 h-24'
    };

    const isLight = (hex: string) => {
      const rgb = parseInt(hex.slice(1), 16);
      const r = (rgb >> 16) & 0xff;
      const g = (rgb >> 8) & 0xff;
      const b = (rgb >> 0) & 0xff;
      const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      return luma > 128;
    };

    return (
      <div className={`${viewMode === 'grid' ? 'bg-card p-4 rounded-lg shadow-sm border border-border' : 'flex items-center space-x-4 p-4 border-b border-border'}`}>
        <div 
          className={`${sizeClasses[size]} rounded-lg border-2 border-border cursor-pointer transition-transform hover:scale-105 flex items-center justify-center`}
          style={{ backgroundColor: color.value }}
          onClick={() => copyToClipboard(color.value, color.name)}
          title={`Click to copy ${color.value}`}
        >
          {copiedColor === color.name && (
            <Text variant="body-small" className={`${isLight(color.value) ? 'text-black' : 'text-white'} font-bold`}>
              ✓
            </Text>
          )}
        </div>
        
        <div className={`${viewMode === 'grid' ? 'mt-2' : 'flex-1'}`}>
          <Text variant="body-small-strong" className="block">
            {color.name}
          </Text>
          <Text variant="body-small" className="text-muted-foreground block">
            {color.value}
          </Text>
          <Text variant="body-small" className="text-muted-foreground block font-mono text-xs">
            var({color.variable})
          </Text>
          {color.description && (
            <Text variant="body-small" className="text-muted-foreground block mt-1">
              {color.description}
            </Text>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="mb-16">
      <div className="flex justify-between items-center mb-8">
        <Heading variant="heading-2" className="text-primary">
          Color System
        </Heading>
        
        <div className="flex items-center space-x-4">
          <Text variant="body-small" className="text-muted-foreground">
            View Mode:
          </Text>
          <div className="flex bg-muted rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1 rounded text-sm transition-colors ${
                viewMode === 'grid' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Grid
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-3 py-1 rounded text-sm transition-colors ${
                viewMode === 'list' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              List
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-12">
        {colorPalettes.map((palette, index) => (
          <div key={index} className="bg-card rounded-lg border border-border overflow-hidden">
            <div className="p-6 border-b border-border">
              <Heading variant="heading-4" className="mb-2">
                {palette.title}
              </Heading>
              {palette.description && (
                <Text variant="body-base" className="text-muted-foreground">
                  {palette.description}
                </Text>
              )}
            </div>
            
            <div className="p-6">
              <div className={`${
                viewMode === 'grid' 
                  ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4' 
                  : 'space-y-0'
              }`}>
                {palette.colors.map((color, colorIndex) => (
                  <ColorSwatch 
                    key={colorIndex} 
                    color={color} 
                    size={viewMode === 'grid' ? 'medium' : 'small'} 
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Usage Guide */}
      <div className="bg-card p-6 rounded-lg shadow-sm border border-border mt-8">
        <Heading variant="heading-4" className="mb-4">
          How to Use Colors
        </Heading>
        
        <div className="space-y-4">
          <Text variant="body-base">
            Click on any color swatch to copy its hex value to your clipboard. Use CSS variables for consistency:
          </Text>
          
          <div className="space-y-2">
            <Text variant="body-code" className="block bg-muted p-2 rounded">
              color: var(--color-primary-brand);
            </Text>
            <Text variant="body-code" className="block bg-muted p-2 rounded">
              background-color: var(--color-fedpink-500);
            </Text>
            <Text variant="body-code" className="block bg-muted p-2 rounded">
              border-color: var(--color-fedgrey-300);
            </Text>
          </div>

          <Text variant="body-small" className="text-muted-foreground">
            All colors are defined as CSS custom properties and can be used throughout your design system.
            The color palettes include accessibility-friendly contrast ratios and semantic naming conventions.
          </Text>
        </div>
      </div>
    </div>
  );
};

export default ColorShowcase; 