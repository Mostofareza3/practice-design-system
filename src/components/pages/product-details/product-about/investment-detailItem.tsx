import Image from "next/image";

interface InvestmentDetailItemProps {
  icon: string;
  label: string;
  value: string;
}

const InvestmentDetailItem = ({
  icon,
  label,
  value,
}: InvestmentDetailItemProps) => {
  return (
    <dl className="flex items-center gap-4">
      <dt className="bg-gray-100 rounded-full flex items-center justify-center p-5">
        <Image src={icon} alt={label} width={48} height={48} />
      </dt>
      <dd className="flex-1 flex items-center">
        <div className="flex flex-col">
          <p className="text-sm text-gray-600 mb-1">{label}</p>
          <p className="text-lg font-semibold text-gray-900 leading-tight">
            {value}
          </p>
        </div>
      </dd>
    </dl>
  );
};

export default InvestmentDetailItem;
