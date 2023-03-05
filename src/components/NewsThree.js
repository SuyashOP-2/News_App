import React, {useState} from 'react';
import "./News3.css";
import slcs from "../images/slcs.png"


const News = () => {
  const [showFullText, setShowFullText] = useState(false);
  

  const handleReadMore = () => {
    setShowFullText(true);
  };
  const handleReadLess = () => {
    setShowFullText(false);
  };

  const truncatedText = "Microstrategy is now holding approximately 132,500 bitcoin following its most recent purchases. This year, In its filing with the U.S. Securities and Exchange Commission (SEC), Microstrategy clarified that the 2,500 coins were  acquired between Nov. 1 and Dec. 24 by its wholly owned subsidiary Macrostrategy.the world’s largest cryptocurrency has emerged as “the institutional-grade digital asset,” said Microstrategy founder Michael Saylor The bitcoin sale in December marked the first time Microstrategy sold its bitcoin since it began accumulating the crypto for its corporate treasury in 2020. The company cited tax reasons for selling BTC.";


  
  const fullText = `Nasdaq-listed Microstrategy Inc. announced Wednesday that it has purchased more bitcoin for its corporate treasury. Michael Saylor, the company’s founder and executive chairman, tweeted Wednesday:
  Microstrategy has increased its bitcoin holdings by ~2,500 BTC. As of 12/27/22 Microstrategy holds ~132,500 bitcoin acquired for ~$4.03 billion at an average price of ~$30,397 per bitcoin.
  In its filing with the U.S. Securities and Exchange Commission (SEC), Microstrategy clarified that the 2,500 coins were acquired between Nov. 1 and Dec. 24 by its wholly owned subsidiary Macrostrategy.
  The subsidiary bought approximately 2,395 BTC at an average price of $17,871 per coin between Nov. 1 and Dec. 21. It then sold about 704 BTC at $16,776 per coin on Dec. 22. Macrostrategy then bought about 810 more BTC at $16,845 per coin on Dec. 24. At the time of writing, bitcoin is trading at $16,656.80.
  The bitcoin sale in December marked the first time Microstrategy sold its bitcoin since it began accumulating the crypto for its corporate treasury in 2020. The company cited tax reasons for selling BTC. “Microstrategy plans to carry back the capital losses resulting from this transaction against previous capital gains, to the extent such carrybacks are available under the federal income tax laws currently in effect, which may generate a tax benefit,” the SEC filing describes.
  Saylor said in an interview last week:
  The most positive thing of the year is the emergence of bitcoin as the institutional grade digital asset and the clarity that … There is one crypto asset that’s a digital commodity … Bitcoin is that commodity.
   `

  return (
    <div className="container">
      <div className="west">
        <div className="div8">
        3.  (Heading)Microstrategy Buys More Bitcoin — Company's Crypto Holdings Grow to 132,500 B TC
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