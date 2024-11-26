import React, {useState, useEffect} from 'react'
// import { Line } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import Inflation from '../assets/Inflation'
import SubLineChart from '../assets/SubLineChart';


// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const DynamicStory = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(Inflation);
    }, [])

    const inflationData = data.map((item) => item.dollar_deval)
    console.log(inflationData);

  return (
            <div className="sub-boxes justify-center items-center  p-2  w-full">
 
                 <SubLineChart data={inflationData} label={"Dollar Devaluation"} text={"Cumulative effect of Inflation"} />
            </div>
  )
}

export default DynamicStory
