import { VKIcon, XIcon } from "@assets/index"
import { TikTokIcon } from "@assets/index"
import { InstagramIcon } from "@assets/index"
import { YouTubeIcon } from "@assets/index"
import { TelegramIcon } from "@assets/index"

export const logos = {
  telegram: {
    logo: <TelegramIcon />,
    color: "#ECF9FF",
  },
  youtube: {
    logo: <YouTubeIcon />,
    color: "#FFF6F7",
  },
  x: {
    logo: <XIcon />,
    color: "#F1F0FE",
  },
  vk: {
    logo: <VKIcon />,
    color: "#ECF9FF",
  },
  instagram: {
    logo: <InstagramIcon />,
    color: "#F1F0FE",
  },
  tiktok: {
    logo: <TikTokIcon />,
    color: "#EAFAF6",
  },
}

export type LogosType = keyof typeof logos
