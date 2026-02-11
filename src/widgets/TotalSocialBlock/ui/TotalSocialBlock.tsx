import { SocialLogo } from "@ui/SocialLogo"
import styles from "./TotalSocialBlock.module.scss"
import { PercentValue } from "@ui/PercentValue"
import { Button } from "@ui/Button"
import type { LogosType } from "@ui/SocialLogo"

type TotalSocialBlockProps = {
  social: LogosType
}

const TotalSocialBlockComponent = ({ social }: TotalSocialBlockProps) => {
  return (
    <div className={styles.block}>
      <SocialLogo type={social} />
      <div className={styles.count}>
        <p className={styles.number}>42,34K</p>
        <p className={styles.title}>Total Visits</p>
      </div>
      <PercentValue value={5.5} />
      <Button>Посетить</Button>
    </div>
  )
}

export const TotalSocialBlock = TotalSocialBlockComponent
