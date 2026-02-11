import { Container } from "@ui/Container/ui/Container"
import { CategoryScale, Chart, Legend, LinearScale, LineElement, PointElement, Title, Tooltip } from "chart.js"
import { Line } from "react-chartjs-2"
import mokYear from "@api/mocks/total-visits-year.json"

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const TotalVisitsComponent = () => {
  return (
    <Container title="Total Visits">
      <Line
        options={{
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
    </Container>
  )
}

export const TotalVisits = TotalVisitsComponent
