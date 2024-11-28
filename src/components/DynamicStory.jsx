import React, {useState, useEffect} from 'react'
import Inflation from '../assets/Inflation'
import Housing from '../assets/Housing';
import CompoundedBond from '../assets/CompoundedBond';
import SubLineChart from '../assets/SubLineChart';
import BarChart from '../assets/BarChart';
import stonks from "/stonks.jpg"
import TsxPrice from "../assets/TsxPrice"
import { motion } from 'framer-motion';




const DynamicStory = ({housingInView , inflationInView , tsxInView, comparisonInView , fearInView}) => {

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

                { fearInView && (
                  <motion.div
                  initial = {{opacity:0}}
                  animate = {{opacity: 0.8}}
                  transition={{duration:1.5}}
                  >
                    <img src={stonks} 
                    className='md:h-[400px] border border-transparent rounded-3xl'
                    alt="" />
                  </motion.div>
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
                 {(
                  tsxInView && (
                    <TsxPrice />
                  )
                 )}

            </motion.div>
  )
}

export default DynamicStory
