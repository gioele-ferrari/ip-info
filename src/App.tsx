import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Data from './components/Data';
import View from './components/View';
import Question from './components/Question';
import Footer from './components/Footer';
import jsonData from './data/info.json';
import { ItemProps } from './types/ItemProps';

function App() {
  const [data, setData] = useState<ItemProps["data"] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    axios.get("https://ipapi.co/json/")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="app">
      <Navbar></Navbar>
      <div className="app-body">
        <div className="app-section-md">
          <div className="app-section-2 fl-column">
            <h1 className="app-title-xl">I dati del tuo indirizzo ip</h1>
            <p className="app-subtitle">Per saperne di più contattaci</p>
            <a className="btn btn-md-primary disabled" href="#">
              Ricerca un ip
            </a>
            <a className="btn btn-md-secondary" href="#">
              Contattaci
            </a>
          </div>
          <div className="app-section-2 fl-column">
            {data ? (
              <Data data={data}></Data>
            ) : (
              <p>Loading data...</p>
            )}
          </div>
        </div>
        <div className="app-section-md fl-column">
          <h1 className="app-title-md fl-row">
            GPS
            <img src="./img/ip.png" width={30} height={30} alt={""}></img>
          </h1>
          <p className="app-subtitle">La posizione si riferisce alla geografia del tuo ISP</p>
            {data ? (
              <View data={data}></View>
            ) : (
              <p>Loading data...</p>
            )}
        </div>
        <div className="app-section-md fl-column">
          <h1 className="app-title-md fl-row">
            FAQ
            <img src="./img/faq.png" width={30} height={30}  alt={""}></img>
          </h1>
          {
            jsonData.map((data, index) => {
              return <Question data={data} key={index}></Question>
            })
          }
        </div>        
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
