import Image from "next/image";
import FooterBottomBar from "./FooterBottomBar";
import FooterLeftSection from "./FooterLeftSection";
import FooterNavColumns from "./FooterNavColumns";

const Footer = () => {
  return (
    <footer className="bg-primary-brand text-white w-full pt-12 pb-6 px-4 relative overflow-hidden">
      <div className="container px-4 mx-auto  gap-0 justify-between grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12">
        <FooterLeftSection />
        <FooterNavColumns />
      </div>
      <FooterBottomBar />

      {/* Top Gradient of Footer */}
      <Image
        src="/assets/common/footer/top-of-footer.png"
        alt="Top of Footer"
        width={1920}
        height={48}
        className="absolute top-0 left-0"
      />
    </footer>
  );
};

export default Footer;
