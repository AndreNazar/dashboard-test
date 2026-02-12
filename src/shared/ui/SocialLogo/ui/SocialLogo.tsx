import styles from "./SocialLogo.module.scss"
import { logos, type LogosType } from "../constants/logos"

interface SocialLogoProps {
  type: LogosType
}

const SocialLogoComponent = ({ type = "telegram" }: SocialLogoProps) => {
  return (
    <div className={styles.container} style={{ backgroundColor: logos[type].color }}>
      <div>{logos[type].logo}</div>
    </div>
  )
}

export const SocialLogo = SocialLogoComponent
