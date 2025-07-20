import Image from "next/image";

interface LogoProps {
  className?: string;
  priority?: boolean;
}

export const Logo = ({ className, priority = true }: LogoProps) => (
  <div className="border-2 border-transparent focus:border-white focus:border-2 focus:ring-primary focus:ring-2">
    <Image
      src="/logo.svg"
      alt="FedGroup Logo"
      width={183}
      height={26}
      quality={100}
      priority={priority}
      className={className}
    />
  </div>
);
