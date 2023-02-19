import 'chart.js/auto';

import react, {useRef} from 'react'

import { Line } from "react-chartjs-2";

interface IEChart {
    data: {
        name: string;
        data: number[]
    }[]
}

export const TheChart: react.FC<IEChart> = (props) => {
    const ref = useRef();
    const data = {
        labels: [...(Array((props.data[0] as any).data.length).keys() as any)],
        datasets: props.data.map((e) => {
            return {
                'label': e.name,
                'data': e.data
            }
        }),
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            responsive: true,
            maintainAspectRatio: false,
          }
      };
    return <Line data={data} ref={ref} style={{width: 600}} options={{
        scales: {
            y: {
                beginAtZero: true
            }
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        }
      }
  }></Line>
}