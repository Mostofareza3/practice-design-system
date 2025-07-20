import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { SearchButton } from "./button-components";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export const MobileNav = ({ isOpen, setIsOpen }: MobileNavProps) => (
  <div className="lg:hidden flex items-center sm:space-x-5 space-x-2">
    <SearchButton className="text-white hover:text-white hover:bg-white/10 p-2" />

    <Button
      onClick={() => setIsOpen(!isOpen)}
      variant="ghost"
      size="sm"
      className="text-white hover:text-white hover:bg-white/10 p-2 relative"
    >
      <Menu className={cn("size-6 absolute transition-all duration-300", isOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0")} />
      <X className={cn("size-6 absolute transition-all duration-300", !isOpen ? "opacity-0 -rotate-90" : "opacity-100 rotate-0")} />
    </Button>
  </div>
);
