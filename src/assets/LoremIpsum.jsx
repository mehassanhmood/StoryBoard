import React from "react";
import inflation_pic from "/inflation_pic.png"
import housing_market from "/housing_market.png"
import index_fund from "/index-fund.png"
import financial_pic from "/financial_pic.png"

export function LoremIpsum({housingRef, inflationRef, bondRef}) {
    return (
      <>
        <div className="content-section">
          <img src={inflation_pic} className ="mb-10 md:ml-10 md pl-10 opacity-10" alt="" />   
          <h2 className="text-center text-2xl md:3xl mb-[50px] font-semibold md:mt-[100px]">The Effect of Inflation on the Dollar (2000–2024)</h2>  
            <p className="story mb-100px" ref={inflationRef}>
              Over the last two decades, inflation has significantly eroded the purchasing power of the dollar. In 2000, one dollar could buy much more than it can today, with inflation steadily increasing at an average annual rate of 2-3%. By 2024, the cumulative impact of inflation has reduced the real value of a dollar by nearly 40%, meaning that what cost $1 in 2000 might now cost approximately $1.40 or more. This silent erosion highlights the importance of understanding inflation and its impact on savings and investments.
            </p>

          <img src={housing_market} className ="mb-10 md:ml-10 md pl-10 opacity-20" alt="" />
          <h2 className="text-center text-2xl pt-12 mb-10 md:3xl font-semibold">
            Growth of a Dollar If Invested in Housing
          </h2>
          <p 
          className="story"
          ref={housingRef}>
            Housing has proven to be one of the most resilient investments over the years. From 2000 to 2024, the real estate market experienced substantial growth, driven by demand, urbanization, and limited housing supply in many regions. A dollar invested in housing in 2000 would have grown significantly, benefiting from property appreciation and rental income. For example, in major cities, property values have doubled or tripled, turning even modest investments into substantial wealth. This underscores the potential of real estate as a long-term wealth-building asset.
          </p>
          <img src={index_fund} className ="mb-10 md:ml-10 md pl-10 opacity-20" alt="" />
          <h2 className="text-center pt-12 mb-10 text-2xl md:3xl font-semibold">Why People Are Afraid to Invest in an Index Fund</h2>
          <p ref={bondRef} className="story">
            Despite the historical stability and growth of index funds, many people remain hesitant to invest. Common fears include market volatility, lack of control over individual stock selections, and uncertainty about the timing of investments. Additionally, periods of economic downturn, such as the 2008 financial crisis or COVID-19 market corrections, have left psychological scars on potential investors. These fears, though understandable, often prevent individuals from taking advantage of the consistent returns offered by broad-market index funds over the long term.
          </p>
          <img src={financial_pic} className ="mb-10 md:ml-10 md pl-10 opacity-20" alt="" />
          <h2 className="text-center text-2xl pt-12 mb-10 md:3xl font-semibold">The Lack of Financial Education</h2>
          <p className="story">
            One of the primary reasons for poor financial decision-making is the lack of financial education. Many people are not taught the basics of budgeting, saving, or investing in school or at home. This knowledge gap leads to missed opportunities, such as understanding how compound interest works or why long-term investing in diversified assets reduces risk. Without proper financial literacy, individuals often fall prey to poor financial habits, high-interest debt, and skepticism toward proven investment vehicles like index funds or real estate.
          </p>
          <br />      
        </div>

      </>
    );
  }
  