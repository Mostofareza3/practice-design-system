export interface ContactFormData {
  firstName: string;
  surname: string;
  email: string;
  contactNumber: string;
  countryCode: string;
  enquiryType: string;
  message: string;
}

export interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => void;
  loading?: boolean;
}

export interface ContactInfo {
  phone: string;
  email: string;
  workingHours: string;
  workingDays: string;
}

export interface GetStartedCard {
  icon: string;
  iconAlt: string;
  title: string;
  description: React.ReactNode;
  button?: React.ReactNode;
  className?: string;
  height?: string;
  iconWidth?: number;
  iconHeight?: number;
  useJustifyBetween?: boolean;
}

export interface ActionCardProps {
  card: GetStartedCard;
}