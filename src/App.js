import React, {useState} from "react";
import Navbar from "./components/Navbar";
import Body from "./components/Body"
import News from "./components/News"
import NewsSecond from "./components/NewsSecond"
import NewsThree from "./components/NewsThree"
import NewsFour from "./components/NewsFour"
import NewsFive from "./components/NewsFive"
import emailjs from 'emailjs-com';
import Footer from "./components/Footer";




import { BrowserRouter, Switch, Route } from "react-router-dom";

const Home = () => {
  return (
    <>
   
      <Navbar />
      <Body />
      <News />
      <NewsSecond />
      <NewsThree />
      <NewsFour />
      <NewsFive />
      <Footer />
      
      
     
      
  

    </>
  );
};

const About = () => {
  return (
    <>
      <Navbar />
      <section style={{ backgroundColor: "#f7f7f7" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "50px 10px" }}>
          <h1 style={{ fontSize: "3rem", textAlign: "center", marginBottom: "30px" }}>
            News App
          </h1>
          <p style={{ fontSize: "2rem", lineHeight: "1.8rem", textAlign: "center" }}>
            News App is a leading online learning platform that helps anyone learn
            business, software, technology and creative skills to achieve personal and
            professional goals.
          </p>
        </div>
      </section>
      <section style={{ backgroundColor: "#f7f7f7", padding: "50px 10px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "3rem", textAlign: "center", marginBottom: "30px" }}>
            About News App
          </h2>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ marginBottom: "30px", maxWidth: "400px", textAlign: "center" }}>
              <h3 style={{ fontSize: "1.8rem", marginBottom: "20px" }}>Our Mission</h3>
              <p style={{ fontSize: "1.5rem", lineHeight: "2rem" }}>
                To empower individuals and organizations with the skills and knowledge to
                thrive in a rapidly changing digital world.
              </p>
            </div>
            <div style={{ marginBottom: "30px", maxWidth: "400px", textAlign: "center" }}>
              <h3 style={{ fontSize: "1.8rem", marginBottom: "20px" }}>Our Vision</h3>
              <p style={{ fontSize: "1.5rem", lineHeight: "1.8rem" }}>
                To be the most trusted and comprehensive online learning platform,
                inspiring and enabling lifelong learning for all.
              </p>
            </div>
            <div style={{ marginBottom: "30px", maxWidth: "400px", textAlign: "center" }}>
              <h3 style={{ fontSize: "1.8rem", marginBottom: "20px" }}>Our Values</h3>
              <ul style={{ fontSize: "1.5rem", lineHeight: "1.8rem", listStyle: "none", paddingLeft: 0 }}>
                <li style={{ marginBottom: "10px" }}>Innovation</li>
                <li style={{ marginBottom: "10px" }}>Excellence</li>
                <li style={{ marginBottom: "10px" }}>Community</li>
                <li style={{ marginBottom: "10px" }}>Empowerment</li>
                <li style={{ marginBottom: "10px" }}>Integrity</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const Service = () => {
  return (
    <>
      <Navbar />
      <div style={styles.serviceContainer}>
      <h1 style={styles.serviceHeading}>Our Services</h1>
      <div style={styles.serviceItems}>
        <div style={styles.serviceItem}>
          <h2 style={styles.serviceTitle}>Breaking News Alerts</h2>
          <p style={styles.serviceDescription}>Stay up-to-date with the latest news as it happens with our breaking news alerts. We'll send notifications straight to your device so you never miss a story.</p>
        </div>  
        <div style={styles.serviceItem}>
          <h2 style={styles.serviceTitle}>Personalized News Feed</h2>
          <p style={styles.serviceDescription}>Customize your news feed to show only the topics you're interested in. Our algorithm will learn your preferences over time and deliver relevant news articles to your feed.</p>
        </div>
        <div style={styles.serviceItem}>
          <h2 style={styles.serviceTitle}>In-Depth Analysis</h2>
          <p style={styles.serviceDescription}>Get a deeper understanding of the news with our in-depth analysis articles. Our team of experts will provide insightful commentary on the biggest stories of the day.</p>
        </div>
      </div>
    </div>

    </>
  );
}

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
        alert("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      }, (error) => {
        console.error(error.text);
        alert("There was an error sending your message. Please try again later.");
      });
  };

  return (
    <>
      <Navbar />
      <div style={{ 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        marginTop: '10rem'
      }}>
        <h1 style={{ fontSize: '50px',marginTop: '30px', marginBottom: '20px' }}>Contact Us</h1>
        <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '500px' }}>
          <label style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
            Name:
            <input type="text" value={name} onChange={(event) => setName(event.target.value)} style={{ marginTop: '5px' }} />
          </label>
          <label style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px' }}>
            Email:
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} style={{ marginTop: '5px' }} />
          </label>
          <label style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
            Message:
            <textarea value={message} onChange={(event) => setMessage(event.target.value)} style={{ marginTop: '5px' }} />
          </label>
          <button type="submit" style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px' }}>Submit</button>
        </form>
      </div>
    </>
  );
};
const styles = {
  serviceContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  serviceHeading: {
    marginTop: '2rem',
    fontSize: '2rem',
    textAlign: 'center',
  },
  serviceItems: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '2rem',
    gap: '2rem',
  },
  serviceItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '1.5rem',
    border: '1px solid #ccc',
    borderRadius: '0.5rem',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.2s',
    width: '30%',
    minWidth: '300px',
  },
  serviceItemHover: {
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.2)',
  },
  serviceTitle: {
    marginTop: '0',
    fontSize: '1.5rem',
  },
  serviceDescription: {
    fontSize: '1.2rem',
    marginTop: '1rem',
  },
  '@media only screen and (max-width: 900px)': {
    serviceItems: {
      flexDirection: 'column',
      gap: '1rem',
    },
    serviceItem: {
      marginTop: '2rem',
      width: '80%',
      minWidth: 'auto',
    },
  },
};








const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>
      

      <Route path="/service">
        <Service />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>
    </Switch>
    </BrowserRouter>
  );
};


export default App;