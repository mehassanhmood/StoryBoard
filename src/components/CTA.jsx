import React, { useState } from 'react'
import image from "/resources.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faUniversity, faGlobe, faCalculator, faBriefcase } from '@fortawesome/free-solid-svg-icons';


const CTA = () => {

  const [amount, setAmount] = useState("");
  const [inflationRate, setInflationRate] = useState("");
  const [futureValue, setFutureValue] = useState(null);
  const [evaporatedValue, setEvaporatedValue] = useState(null);



  const calculateInflationEffect = () => {
    const annualRate = parseFloat(inflationRate) / 100; // Convert percentage to decimal
    const fv = parseFloat(amount) * Math.pow(1 - annualRate, 10); // Real value after 10 years
    const evaporated = parseFloat(amount) - fv;

    setFutureValue(fv.toFixed(2)); // Round to 2 decimal places
    setEvaporatedValue(evaporated.toFixed(2)); // Round to 2 decimal places
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between h-[100vh] p-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white overflow-y-scroll">

      <div className='flex flex-col md:w-1/2 h-[full] justify-center items-center'>
        <h1 className="text-xl font-bold mb-4 text-center">
          Inflation Calculator: See How Inflation Affects Your Money
        </h1>
        <p className='m-2 p-2 text-center'>
          Enter your details to discover how inflation impacts the value of your savings over time. <br />
            Start Planning for a Secure Financial Future! <br />
            Inflation doesn’t have to erode your hard-earned money. Take the first step by understanding its effects and exploring proven investment strategies.
        </p>
        <div className="flex flex-col gap-4 w-full md:w-[35%] justify-center">
          <input
            type="number"
            placeholder="Enter your amount (e.g., 1000)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="p-3 rounded-lg text-black text-center"
          />
          <input
            type="number"
            placeholder="Enter annual inflation rate (e.g., 2.4)"
            value={inflationRate}
            onChange={(e) => setInflationRate(e.target.value)}
            className="p-3 rounded-lg text-black text-center"
          />
          <button
            onClick={calculateInflationEffect}
            className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-lg hover:bg-yellow-500"
          >
            Calculate Future Value
          </button>
        </div>

        {/* Render the results dynamically */}
        {futureValue && (
          <div className="mt-8 p-6 bg-transparent text-black rounded-lg shadow-lg">
            <p className="text-lg font-semibold">
              Future Worth (10 years): <span className="text-green-300">${futureValue}</span>
            </p>
            <p className="text-lg font-semibold">
              Money Evaporated by Inflation: <span className="text-red-500">${evaporatedValue}</span>
            </p>
          </div>
        )}
    </div>

      <div className='flex-col justify-center items-center top-[50%] text-center'> 
        <div className='flex flex-col justify-center items-center '>
        <h2 class="text-3xl font-bold mt-4 mb-4 ">Take Control of Your Financial Future Today!</h2>
        <p>Empower yourself with resources to beat inflation:
        </p>
          <h2 className='text-center font-bold'>Investment Resources:</h2>
          <ul className='md:py-6 md:my-6 text-sm'>
            <li><a href="https://www.worldbank.org/" target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faGlobe} /> World Bank – Global economic insights and tools
            </a></li>
            <li><a href="https://www.investopedia.com/" target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faUniversity} /> Investopedia – Your guide to investing basics
            </a></li>
            <li><a href="https://finance.yahoo.com/" target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faChartLine} /> Yahoo Finance – Stay updated on markets and trends

            </a></li>
          </ul>
          <div>
            <h2 className='font-bold' >Why It Matters:</h2>
            <p className='text-sm' >
                Learn how compound interest can grow your wealth. <br />
                Understand the potential of real estate investments. <br />
                Discover the stability of index funds for long-term growth. <br />
                Start your journey today and make your money work for you! <br />
            </p>
          </div>
        </div>
      </div>

  </div>
  )
}

export default CTA
