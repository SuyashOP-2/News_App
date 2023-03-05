import React, {useState} from 'react';
import "./News4.css";
import slcs from "../images/suys.png"
    

const News = () => {
  const [showFullText, setShowFullText] = useState(false);
  

  const handleReadMore = () => {
    setShowFullText(true);
  };
  const handleReadLess = () => {
    setShowFullText(false);
  };

  const truncatedText = "2022 has been a rough and tough year for investors which was hovering around $48,000 last year, hit a low of $15,590 by the end of 2022. According to the data collected from The Block, bitcoin miners’ revenue hit $9.55 billion in 2022 The situation was aggravated when cryptocurrency prices, including Bitcoin’s, plummeted. Bitcoin, which was hovering around $48,000 last year, hit a low of $15,590 by the end of 2022. According to the data collected from The Block, bitcoin miners’ revenue hit $9.55 billion in 2022 Eisenberg engaged in a scheme involving the intentional and artificial manipulation of the price of perpetual futures contracts on a cryptocurrency exchange called Mango Markets, and other manipulative and deceptive devices and contrivances";


  const fullText = `2022 has been a rough and tough year for investors, traders, cryptocurrency businesses, and miners in general. The prolonged bear market, exacerbated by a series of catastrophic events, posed a threat to miners.
  Miners were dealing with a variety of issues, including defaulted loans, quarterly losses, and soaring bitcoin hash rates that reached all-time highs. All these factors were affecting the profitability of the miners and were causing sell pressure.
  The situation was aggravated when cryptocurrency prices, including Bitcoin’s, plummeted. Bitcoin, which was hovering around $48,000 last year, hit a low of $15,590 by the end of 2022. According to the data collected from The Block, bitcoin miners’ revenue hit $9.55 billion in 2022.
  Bitcoin miners’ revenue dropped in 2022
  Bitcoin, which is trading at $16,721 at press time, has been on a downward spiral alongside other cryptocurrencies. The falling cryptocurrency prices had a major effect on the income and profits of miners. Even though the $9.55 billion in revenue in 2022 seems like a large number, it is comparatively lower than that of 2021.
  
  Over the course of 2021, bitcoin miners made more than $15 billion in revenue, according to the data from the block. This was actually considered to be a 206% year-over-year increase.
  `
   

  return (
    <div className="container">
      <div className="west">
        <div className="div8">
        4.Bitcoin Miners’ Revenue Hits $9.55 Billion in 2022
        </div>
        <div className="div9">
          {showFullText ? fullText : truncatedText}
          {showFullText && (
            <button onClick={handleReadLess}>Read Less</button>
          )}

          {!showFullText && (
            <button onClick={handleReadMore}>Read More</button>
          )}
        </div>
      </div>
      <div className="image">
        <img src={slcs} />
      </div>
    </div>
  );
};

export default News;