import { StaticImageData } from "next/image";

export interface ProfileCardProps {
  profileImage: StaticImageData;
  name: string;
  role: string;
  skills: string[];
  scale: number;
  opacity: number;
  position: "left" | "center" | "right";
}
