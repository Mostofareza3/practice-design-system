import SearchIcon from "@/components/icons/search-icon";
import { Button } from "@/components/ui/button";
import { LogIn, Search } from "lucide-react";

interface SearchButtonProps {
  className?: string;
  onClick?: () => void;
}

export const SearchButton = ({ className, onClick }: SearchButtonProps) => (
  <Button
    variant="ghost"
    size="sm"
    className={className}
    onClick={onClick}
    icon={<SearchIcon className="size-4" />}
    iconPosition="left"
  />
);

interface SignInButtonProps {
  className?: string;
  onClick?: () => void;
}

export const SignInButton = ({ className, onClick }: SignInButtonProps) => (
  <Button
    variant="outline"
    className={className}
    onClick={onClick}
    icon={<LogIn className="h-4 w-4" />}
    iconPosition="left"
  >
    Sign in
  </Button>
);
