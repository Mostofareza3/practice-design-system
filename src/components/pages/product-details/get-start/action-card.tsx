import Heading from "@/components/design-system/typography/heading/Heading";
import { ActionCardProps } from "@/interfaces/contact.interface";
import Image from "next/image";

const ActionCard = ({ card }: ActionCardProps) => {
  const defaultHeight = card.height || "h-[514px]";
  const iconWidth = card.iconWidth || 48;
  const iconHeight = card.iconHeight || 48;
  const useJustifyBetween = card.useJustifyBetween || false;

  return (
    <article
      className={`bg-white rounded-t-sm rounded-bl-sm rounded-br-4xl shadow-md flex flex-col items-center text-left p-8 flex-1 lg:w-[328px] ${defaultHeight} ${
        card.className || ""
      } ${useJustifyBetween ? "justify-between" : ""}`}
    >
      <div className="mb-4 flex items-center justify-center">
        <Image
          alt={card.iconAlt}
          src={card.icon}
          width={iconWidth}
          height={iconHeight}
        />
      </div>

      {useJustifyBetween ? (
        <>
          <div>
            <Heading
              variant="heading-5"
              className="mb-2 text-primary-brand text-center md:text-left w-full"
            >
              {card.title}
            </Heading>
            <div className="mb-2 w-full text-center md:text-left">
              {card.description}
            </div>
          </div>
          {card.button && <div className="w-full">{card.button}</div>}
        </>
      ) : (
        <>
          <Heading
            variant="heading-5"
            className="mb-2 text-primary-brand text-center md:text-left w-full"
          >
            {card.title}
          </Heading>
          <div className="mb-2 w-full text-center md:text-left">
            {card.description}
          </div>
          {card.button && <div className="mt-auto w-full">{card.button}</div>}
        </>
      )}
    </article>
  );
};

export default ActionCard;
