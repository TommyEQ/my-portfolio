import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
  name: "LinkedIn",
  username: "Tomas Quesada",
  icon: Icons.linkedin,
  link: "https://www.linkedin.com/in/tomasequesada/",
},
{
  name: "Gmail",
  username: "tomasequesada@gmail.com",
  icon: Icons.gmail,
  link: "mailto:tomasequesada@gmail.com",
},
];
