import React, {useState, useEffect} from 'react'
import Inflation from '../assets/Inflation'
import Housing from '../assets/Housing';
import CompoundedBond from '../assets/CompoundedBond';
import SubLineChart from '../assets/SubLineChart';
import BarChart from '../assets/BarChart';
import { motion } from 'framer-motion';




const DynamicStory = ({housingInView , inflationInView , bondInView, comparisonInView}) => {

    const [data, setData] = useState([]);
    const [ housingData, setHousingData] = useState([]);
    const [bondData, setBondData] = useState([]);


    useEffect(() => {
        setData(Inflation);
        const  housing = Housing.map(item => item.dollar_apprec)
        setHousingData(housing)
        setBondData(CompoundedBond)

    }, [])

    const inflationData = data.map((item) => item.dollar_deval)
    console.log(inflationData);

  return (
            <motion.div 
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            transition={{duration:1}}
            className="sub-boxes justify-center items-center  p-2  w-full">

                { bondInView && (
                 <SubLineChart data={bondData} label={"Treasury Investment"} text={"Compounded growth of 10 Yr Treasury"} />
                )}

                { inflationInView && (
                 <SubLineChart data={inflationData} label={"Dollar Devaluation"} text={"Cumulative effect of Inflation"} />
                )}
              

                 { housingInView && (
                 <SubLineChart data={housingData} label={"A $ in Housing"} text={"Cumulative effect of Housing Appreciation"} />

                 )}
                 { comparisonInView && (
                 <BarChart/>

                 )}

            </motion.div>
  )
}

export default DynamicStory
