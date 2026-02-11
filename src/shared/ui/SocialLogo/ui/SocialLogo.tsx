import styles from "./SocialLogo.module.scss"
import { logos, type LogosType } from "../constants/logos"

const SocialLogoComponent = ({ type }: { type: LogosType }) => {
  return (
    <div className={styles.container} style={{ backgroundColor: logos[type].color }}>
      <div>{logos[type].logo}</div>
    </div>
  )
}

export const SocialLogo = SocialLogoComponent
