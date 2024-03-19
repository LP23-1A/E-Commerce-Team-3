import ChevronRight from "@/assets/ChevronRight";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

function App() {
  const data = {
    labels: ['01/06', '01/07', '01/08', '01/09', '01/10', '01/11'],
    datasets: [
      {
        label: '200',
        data: [7, 5, 9, 5, 5.5, 9],
        backgroundColor: 'black',
        borderRadius: 20,
        barPercentage: 0.1,

      }
    ]
  }

  const config = {
    type: 'bar',
    options: {
      indexAxis: 'y',
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            maxTicksLimit: 300,
            callback: ((context, index) => {
              console.log(context)
              return context + 'K'
            }
            )
          }
        }
      }
    }
  }

  return (

    <div className="bg-white w-[565px] mt-10 rounded-xl">
      <div className="flex justify-between items-center py-5 pl-5 mr-3 mb-3">
        <h1 className="font-semibold leading-6 text-lg">Борлуулалт</h1>
        <ChevronRight />
      </div>
      <Bar style={{ padding: 10 }} data={data}></Bar>
    </div>
  )
}

export default App;