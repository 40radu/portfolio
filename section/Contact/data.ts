import { IconType } from "@/app/components/Icon";

interface ContactInfoProps {
  icon : keyof IconType;
  label : string;
}
export const contactInfoData : ContactInfoProps[] = [
  {
    icon : "whatsapp",
    label : "+261 32 40 105 57"
  },
  {
    icon : "email",
    label : "radurakotoarivelo@gmail.com"
  },
  {
    icon : "location",
    label : "Itaosy Antananarivo"
  },
]