import React, { useMemo } from 'react'
import { Chart } from 'react-charts'

import './results.css'

const Results = ({ personality }) => {
  console.log(personality)

  const total = useMemo(
    () => [
      {
        label: 'Yours',
        data: [[personality.A.type, personality.A.score], [personality.C.type, personality.C.score], [personality.E.type, personality.E.score], [personality.N.type, personality.N.score], [personality.O.type, personality.O.score]]
      },
      {
        label: 'Average',
        data: [[personality.A.type, personality.A.average], [personality.C.type, personality.C.average], [personality.E.type, personality.E.average], [personality.N.type, personality.N.average], [personality.O.type, personality.O.average]]
      }
    ],
    [personality]
  )

  const typeA = useMemo(
    () => [
      {
        label: 'Yours',
        data: [[personality.A["1"].type, personality.A["1"].score], [personality.A["2"].type, personality.A["2"].score], [personality.A["3"].type, personality.A["3"].score], [personality.A["4"].type, personality.A["4"].score], [personality.A["5"].type, personality.A["5"].score], [personality.A["6"].type, personality.A["6"].score]]
      },
      {
        label: 'Average',
        data: [[personality.A["1"].type, personality.A["1"].average], [personality.A["2"].type, personality.A["2"].average], [personality.A["3"].type, personality.A["3"].average], [personality.A["4"].type, personality.A["4"].average], [personality.A["5"].type, personality.A["5"].average], [personality.A["6"].type, personality.A["6"].average]]
      }
    ],
    [personality]
  )
  
  const typeC = useMemo(
    () => [
      {
        label: 'Yours',
        data: [[personality.C["1"].type, personality.C["1"].score], [personality.C["2"].type, personality.C["2"].score], [personality.C["3"].type, personality.C["3"].score], [personality.C["4"].type, personality.C["4"].score], [personality.C["5"].type, personality.C["5"].score], [personality.C["6"].type, personality.C["6"].score]]
      },
      {
        label: 'Average',
        data: [[personality.C["1"].type, personality.C["1"].average], [personality.C["2"].type, personality.C["2"].average], [personality.C["3"].type, personality.C["3"].average], [personality.C["4"].type, personality.C["4"].average], [personality.C["5"].type, personality.C["5"].average], [personality.C["6"].type, personality.C["6"].average]]
      }
    ],
    [personality]
  )
  
  const typeE = useMemo(
    () => [
      {
        label: 'Yours',
        data: [[personality.E["1"].type, personality.E["1"].score], [personality.E["2"].type, personality.E["2"].score], [personality.E["3"].type, personality.E["3"].score], [personality.E["4"].type, personality.E["4"].score], [personality.E["5"].type, personality.E["5"].score], [personality.E["6"].type, personality.E["6"].score]]
      },
      {
        label: 'Average',
        data: [[personality.E["1"].type, personality.E["1"].average], [personality.E["2"].type, personality.E["2"].average], [personality.E["3"].type, personality.E["3"].average], [personality.E["4"].type, personality.E["4"].average], [personality.E["5"].type, personality.E["5"].average], [personality.E["6"].type, personality.E["6"].average]]
      }
    ],
    [personality]
  )
  
  const typeN = useMemo(
    () => [
      {
        label: 'Yours',
        data: [[personality.N["1"].type, personality.N["1"].score], [personality.N["2"].type, personality.N["2"].score], [personality.N["3"].type, personality.N["3"].score], [personality.N["4"].type, personality.N["4"].score], [personality.N["5"].type, personality.N["5"].score], [personality.N["6"].type, personality.N["6"].score]]
      },
      {
        label: 'Average',
        data: [[personality.N["1"].type, personality.N["1"].average], [personality.N["2"].type, personality.N["2"].average], [personality.N["3"].type, personality.N["3"].average], [personality.N["4"].type, personality.N["4"].average], [personality.N["5"].type, personality.N["5"].average], [personality.N["6"].type, personality.N["6"].average]]
      }
    ],
    [personality]
  )
  
  const typeO = useMemo(
    () => [
      {
        label: 'Yours',
        data: [[personality.O["1"].type, personality.O["1"].score], [personality.O["2"].type, personality.O["2"].score], [personality.O["3"].type, personality.O["3"].score], [personality.O["4"].type, personality.O["4"].score], [personality.O["5"].type, personality.O["5"].score], [personality.O["6"].type, personality.O["6"].score]]
      },
      {
        label: 'Average',
        data: [[personality.O["1"].type, personality.O["1"].average], [personality.O["2"].type, personality.O["2"].average], [personality.O["3"].type, personality.O["3"].average], [personality.O["4"].type, personality.O["4"].average], [personality.O["5"].type, personality.O["5"].average], [personality.O["6"].type, personality.O["6"].average]]
      }
    ],
    [personality]
  )

  const series = useMemo(
    () => ({
      type: 'bar'
    }),
    []
  )
  const axes = useMemo(
    () => [
      { primary: true, type: 'ordinal', position: 'bottom' },
      { position: 'left', type: 'linear', stacked: false, beginAtZero: true }
    ],
    []
  )

  return (
    <div className="app results">
      <div className="graph">
        <h2>Total</h2>
        <Chart data={total} series={series} axes={axes} tooltip dark />
      </div>

      <div className="graph">
        <h2>{personality.A.type}</h2>
        <Chart data={typeA} series={series} axes={axes} tooltip dark />
      </div>

      <div className="graph">
        <h2>{personality.C.type}</h2>
        <Chart data={typeC} series={series} axes={axes} tooltip dark />
      </div>

      <div className="graph">
        <h2>{personality.E.type}</h2>
        <Chart data={typeE} series={series} axes={axes} tooltip dark />
      </div>

      <div className="graph">
        <h2>{personality.N.type}</h2>
        <Chart data={typeN} series={series} axes={axes} tooltip dark />
      </div>

      <div className="graph">
        <h2>{personality.O.type}</h2>
        <Chart data={typeO} series={series} axes={axes} tooltip dark />
      </div>
    </div>
  )
}

export default Results