import { Container } from "@ui/Container/ui/Container"
import styles from "./TrafficSources.module.scss"
import { Table } from "@ui/Table"
import { Pie } from "react-chartjs-2"
import mokYear from "@api/mocks/total-visits-year.json"
import { ArcElement, Chart, Legend, Tooltip } from "chart.js"

Chart.register(ArcElement, Tooltip, Legend)

const TrafficSourcesComponent = () => {
  return (
    <Container title="Traffic Sources">
      <div className={styles.container}>
        <Table
          data={{
            headers: ["Social Media", "Percent, %"],
            items: [
              ["Telegram", "41%"],
              ["Instagram", "36%"],
              ["Youtube", "18%"],
              ["TikTok", "24%"],
              ["X", "7%"],
              ["ВК", "6%"],
            ],
          }}
        />
        <div className={styles.chart}>
          <Pie
            options={{
              responsive: true,

              plugins: {
                legend: {
                  display: false,
                },
              },
            }}
            data={{
              labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May"],
              datasets: mokYear,
            }}
          />
        </div>
      </div>
    </Container>
  )
}

export const TrafficSources = TrafficSourcesComponent
