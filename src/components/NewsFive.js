import React, {useState} from 'react';
import "./News4.css";
import ssdk from "../images/ssdk.png"
    

const News = () => {
  const [showFullText, setShowFullText] = useState(false);
  

  const handleReadMore = () => {
    setShowFullText(true);
  };
  const handleReadLess = () => {
    setShowFullText(false);
  };

  const truncatedText = `The investor drained $110 million in cryptocurrencies from the platform. Avraham Eisenberg, the crypto investor whose “highly profitable trading strategy” drained DeFi trading platform Mango Markets of crypto worth $110 million, was arrested Monday in Puerto Rico, court documents said Eisenberg engaged in a scheme involving the intentional and artificial manipulation of the price of perpetual futures contracts on a cryptocurrency exchange called Mango Markets, and other manipulative and deceptive devices and contrivances The self-described game theorist admitted his role in draining Mango Markets’ treasury shortly after the incident in mid-October, and may now be the first U.S. resident to face charges for his role in manipulating a decentralized-finance trading platform..”.`;
  const fullText = `
  The investor drained $110 million in cryptocurrencies from the platform.
  
  Avraham Eisenberg, the crypto investor whose “highly profitable trading strategy” drained DeFi trading platform Mango Markets of crypto worth $110 million, was arrested Monday in Puerto Rico, court documents said.	
  
  The self-described game theorist admitted his role in draining Mango Markets’ treasury shortly after the incident in mid-October, and may now be the first U.S. resident to face charges for his role in manipulating a decentralized-finance trading platform.
  Eisenberg faces charges of commodities fraud and commodities manipulation, according to a filing unsealed Tuesday. The charges could see punishments ranging from fines to prison time.
  A deposition signed by FBI Special Agent Brandon Racz alleges Eisenberg “willfully and knowingly” manipulated the sale of a commodity – namely futures contracts on Mango Markets.
  “Eisenberg engaged in a scheme involving the intentional and artificial manipulation of the price of perpetual futures contracts on a cryptocurrency exchange called Mango Markets, and other manipulative and deceptive devices and contrivances.”
  `
   

  return (
    <div className="container">
      <div className="west">
        <div className="div8">
        5.Mango Markets Exploiter Eisenberg Arrested in Puerto Rico
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
        <img src={ssdk} />
      </div>
    </div>
  );
};

export default News;