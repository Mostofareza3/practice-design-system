import Image from "next/image";

const FooterAppBadges = () => (
  <div className="flex flex-col gap-3 mt-3">
    <a href="#" aria-label="Download on the App Store">
      <Image
        src="/assets/common/footer/app-store.svg"
        alt="App Store"
        width={120}
        height={40}
      />
    </a>
    <a href="#" aria-label="Get it on Google Play">
      <Image
        src="/assets/common/footer/google-play.svg"
        alt="Google Play"
        width={120}
        height={40}
      />
    </a>
  </div>
);

export default FooterAppBadges;
