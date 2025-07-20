"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import DownloadsTab from "./downloads-tab";
import FaqTab from "./faq-tab";
import FeesTab from "./fees-tab";

const FaqDownloadFees = () => {
  const [activeTab, setActiveTab] = useState("FAQs");
  const [openItems, setOpenItems] = useState<number[]>([1]); // Second item open by default

  const tabs = ["FAQs", "Downloads", "Fees"];

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "FAQs":
        return <FaqTab />;
      case "Downloads":
        return <DownloadsTab />;
      case "Fees":
        return <FeesTab />;
      default:
        return null;
    }
  };

  return (
    <div className="md:px-20  relative pb-16">
      <div className="flex justify-center -mb-5">
        <div className="inline-flex gap-2 rounded-lg bg-gray-100 p-1">
          {tabs.map((tab) => (
            <Button
              variant="outline"
              size="lg"
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 text-sm font-medium rounded-md transition-all cursor-pointer border-none  ${
                activeTab === tab
                  ? "bg-secondary text-white shadow-sm"
                  : "text-gray-600 "
              }`}
            >
              {tab}
            </Button>
          ))}
        </div>
        {/* Tab Content */}
      </div>
      <div className="shadow-[inset_0_0_12px_#B3B3B8] md:p-12 p-4 rounded-3xl rounded-bl-none">
        {renderTabContent()}
      </div>
      <div>
        <Image
          src="/assets/common/extra/divider-illustration.png"
          alt="Divider Illustration"
          width={1440}
          height={48}
          className="absolute bottom-0 left-0"
        />
      </div>
    </div>
  );
};

export default FaqDownloadFees;
