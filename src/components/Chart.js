import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = () => {
    return (
        <div>
            <Line
                data={{
                    labels: ['7/12/17', '5/11/18', '16/8/19', '8/11/20'],
                    datasets: [
                        {
                            label: 'Order Amount',
                            data: [20000, 30000, 22000, 45000],
                            backgroundColor: '#fff',
                            borderColor: 'blue',
                            borderWidth: 3,
                            lineTension: 0,
                        },
                    ],
                }}
                height={400}
                width={600}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true,
                                }
                            }
                        ]
                    }
                }}
            />
        </div>
    )
}

export default LineChart;