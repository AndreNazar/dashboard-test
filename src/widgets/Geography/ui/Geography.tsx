import { Table } from "@ui/Table"
import { Container } from "@ui/Container/ui/Container"

const GeographyComponent = () => {
  return (
    <Container title="Geography">
      <Table
        data={{
          headers: ["Country", "Visits", "From total, %", "Change, %"],
          items: [
            ["United States", "4,000", "45%", "12%"],
            ["Russia", "3,000", "45%", "12%"],
            ["Germany", "2,000", "45%", "12%"],
            ["France", "1,000", "45%", "12%"],
            ["Ukraine", "500", "45%", "12%"],
          ],
        }}
      />
    </Container>
  )
}

export const Geography = GeographyComponent
