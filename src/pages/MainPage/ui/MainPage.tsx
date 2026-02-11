import { TotalVisits } from "@widgets/TotalVisits"
import styles from "./MainPage.module.scss"
import { TrafficSources } from "@widgets/TrafficSources"
import { Geography } from "@widgets/Geography"
import { TotalSocialBlockList } from "@widgets/TotalSocialBlock"

const MainPageComponent = () => {
  return (
    <div className={styles.container}>
      <TotalVisits />
      <TotalSocialBlockList />
      <TrafficSources />
      <Geography />
    </div>
  )
}

export const MainPage = MainPageComponent
