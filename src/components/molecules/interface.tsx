export interface ProfileCardProps {
  profileImage: string;
  name: string;
  role: string;
  skills: string[];
  scale: number;
  opacity: number;
  position: "left" | "center" | "right";
}
