import { TotalSocialBlock } from "./TotalSocialBlock"
import styles from "./TotalSocialBlock.module.scss"

const TotalSocialBlockListComponent = () => {
  return (
    <div className={styles.list}>
      <TotalSocialBlock social="instagram" />
      <TotalSocialBlock social="telegram" />
      <TotalSocialBlock social="tiktok" />
      <TotalSocialBlock social="vk" />
    </div>
  )
}

export const TotalSocialBlockList = TotalSocialBlockListComponent
