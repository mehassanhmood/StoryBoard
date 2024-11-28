import React from "react";
import inflation_pic from "/inflation_pic.png"
import housing_market from "/housing_market.png"
import index_fund from "/index-fund.png"
import financial_pic from "/financial_pic.png"
import candleStick from "/candlestick-chart.png"


export function LoremIpsum({housingRef, inflationRef, tsxRef, comparitiveRef, fearRef, goldRef}) {
    return (
      <>
        <div className="content-section">
          <h2 className="text-center text-2xl md:3xl mb-[50px] font-semibold md:mt-[100px]">Why Gold Doesn't Deflate Like the Dollar?</h2>  
            <p className="story mb-100px" ref = {goldRef}>
            Gold's value isn't tied to inflation like fiat currencies because its supply is finite and can't be arbitrarily expanded. Unlike the dollar, gold's value isn't dependent on government monetary policies or debt. In 1971, President Nixon detached the dollar from the gold standard, transitioning to fiat currency, which allowed governments to print unlimited money. This flexibility in monetary policy has led to inflationary pressures and currency devaluation over time. While fiat currencies lose purchasing power—up to 40% since 2000—gold remains a reliable store of value, immune to inflation. However, it lacks the liquidity and backing that fiat currencies offer for day-to-day transactions.
            </p>
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
            Real estate has consistently proven to be a resilient and rewarding investment. Over the years, housing markets have shown remarkable growth, driven by increasing demand, urbanization, and limited supply in many regions. For instance, a dollar invested in real estate back in 2000 would have grown substantially by 2024, thanks to both property value appreciation and rental income. In some cities, property values have even doubled or tripled during this period.

This growth highlights the potential of real estate as a reliable inflation hedge and wealth-building asset. While upfront costs and ongoing management can be challenges, the long-term benefits—such as significant capital appreciation and passive income—make real estate a strong choice for investors looking to build wealth over time.
          </p>
          <img src={index_fund} className ="mb-10 md:ml-10 md pl-10 opacity-20" alt="" />
          <h2 className="text-center pt-12 mb-10 text-2xl md:3xl font-semibold">Why People Are Afraid to Invest in an Index Fund</h2>
          <p className="story" ref={fearRef}>
            Despite the historical stability and growth of index funds, many people remain hesitant to invest. Common fears include market volatility, lack of control over individual stock selections, and uncertainty about the timing of investments. Additionally, periods of economic downturn, such as the 2008 financial crisis or COVID-19 market corrections, have left psychological scars on potential investors. These fears, though understandable, often prevent individuals from taking advantage of the consistent returns offered by broad-market index funds over the long term.
          </p>
          <img src={financial_pic} className ="mb-10 md:ml-10 md pl-10 opacity-20" alt="" />
          <h2 className="text-center text-2xl pt-12 mb-10 md:3xl font-semibold">Equity/Stocks/ETFs: Brief History and Overview</h2>
          <p className="story" ref={tsxRef}>
          Equities are commonly referred to as stocks, which represents a small ownership in a company. ETFs (Exchange-Traded Funds) are pooled investments that track indices, sectors, or other asset categories. Stocks have been traded for centuries, with earliest exchanges dating back to the 17th-century pioneered at Amsterdam Stock Exchange. In this modern era, ETFs like the S&P 500, Dow Jones, and Nasdaq serve as benchmarks for equity markets. Investing in equities has been a long term cornerstone of wealth creation and allowing investors to benefit from corporate growth. History of ETFs are that which revolutionized investing by offering diversified, low-cost exposure to a multiple of assets. Getting exposure to most of the stock at one place. However, equities come with risks such as market volatility, economic downturns, and company-specific issues.

          </p>
          <h2 className="text-center text-2xl pt-12 mb-10 md:3xl font-semibold">Hedging Inflation with Equities: Long-Term Growth and Buy-and-Hold Strategy </h2>
          <p className="story" ref={tsxRef}>
          Equities are one of the best asset classes for beating inflation over the long term. Unlike cash or bonds, whose value erodes due to inflation, equities tend to grow in value alongside economic expansion. Companies increase prices of goods and services over time, leading to higher revenues and profits, which are reflected in rising stock prices. A buy-and-hold strategy for retirement—investing consistently and letting compounding do its work—can outpace inflation. By holding equities for decades, investors allow fundamental economic growth and corporate earnings to outperform rising costs of living. For example, an investor in the S&P 500 over the last 50 years would have seen an average annualized return of around 8%, far surpassing the average inflation rate of 3%. This strategy, particularly when paired with ETFs, offers diversification, stability, and inflation-beating growth.
          </p>
          <img src={candleStick} className ="mb-10 md:ml-10 md pl-10 opacity-20" alt="" />

          <h2 className="text-center text-2xl pt-12 mb-10 md:3xl font-semibold">Historical Comparison: Beating Inflation Since 2000</h2>
          <p className="story" ref={comparitiveRef}>
          Equities have consistently outperformed inflation and the rising cost of living. For example, $1,000 invested in the S&P 500 in 2000 would be worth approximately $6,400 by 2024 by assuming an 8% annualized return. iI compared to $1,590 as adjusted only for inflation (at a 3% average rate). This means that equities have increased wealth nearly four times faster than inflation. Additionally, the cost of living in the Canada has risen by 80% since 2000, yet equity investments have grown by over 500% in the same timeframe. This historical data underscores the power of equities as a wealth-building and inflation-hedging tool. Although short-term volatility is unavoidable but the long-term trend pay out really well for equity investors. As long as investors stay disciplined and avoid emotional reactions to market fluctuations.
          </p>
          <br />      
        </div>

      </>
    );
  }
  