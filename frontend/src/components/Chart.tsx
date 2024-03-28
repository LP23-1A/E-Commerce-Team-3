import ChevronRight from "@/assets/ChevronRight";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2';
import { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)
const backendPoint = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT

const api = `${backendPoint}/order`
interface OrderData {
  amountPaid: number;
  createdAt: string;
}

const App = () => {
  const [salesData, setSalesData]: any = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(api);
        const orders = response.data
        const mappingSalesData = {
          datas: [] as number[],
          labels: [] as string[],
        };

        orders.map((e: OrderData) => {
          mappingSalesData.datas.push(e.amountPaid);
          mappingSalesData.labels.push(dayjs(e.createdAt).format("M/D"));
        });
        setSalesData(mappingSalesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="bg-white w-[565px] mt-10 rounded-xl">
      <div className="flex justify-between items-center py-5 pl-5 mr-3 mb-3">
        <h1 className="font-semibold leading-6 text-lg">Борлуулалт</h1>
        <ChevronRight />
      </div>
      <div>
        {salesData ? (
          <Bar
            style={{ maxWidth: "fit" }}
            data={{
              labels: salesData.labels,
              datasets: [
                {
                  label: "My First dataset",
                  backgroundColor: "#000",
                  data: salesData.datas,
                  borderRadius: 20,
                  borderWidth: 1,
                  barPercentage: 0.1,
                },
              ],
            }}
          />
        ) : (
          <p className="py-5 pl-5">Loading...</p>
        )}
      </div>
    </div>
  )
}

export default App;


