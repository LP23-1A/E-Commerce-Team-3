import ChevronRight from "@/assets/ChevronRight";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2';
import useSWR from "swr";
import formatDate from "@/components/utils/FormatDate";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)


const  App = () => {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data } = useSWR(
    "http://localhost:8000/order",
    fetcher
  );

  const getTotalPrice = () => {
    let totalPrice = 0;
    if (data && data.length > 0) {
      data.forEach((product: { amountToPaid: any; }) => {
        const amount = product?.amountToPaid;
        if (!isNaN(amount)) {
          totalPrice += amount;
        }
      });
    }
    return totalPrice;
  };
  

  const mockdata = {
    labels: [],
    datasets: [
      {
        label: '200',
        data: [`${getTotalPrice()}`],
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
          type: 'linear',
          min: 0,
          max: 400
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
      <Bar style={{ padding: 10 }} data={mockdata}></Bar>
    </div>
  )
}

export default App;

