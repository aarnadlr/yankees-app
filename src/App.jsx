import React, { useEffect, useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import FanArt from './components/FanArt/FanArt';
import TextTruncate from 'react-text-truncate';

const url =
  'https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=new_york_yankees';

function App() {
  const [yankeesData, setYankeesData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setYankeesData(data && data.teams[0]);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Header
        logo={yankeesData && yankeesData.strTeamBadge}
        fbLink={yankeesData && `https://${yankeesData.strFacebook}`}
        twLink={yankeesData && `https://${yankeesData.strTwitter}`}
        igLink={yankeesData && `https://${yankeesData.strInstagram}`}
      />

      <img
        src={yankeesData && yankeesData.strStadiumThumb}
        alt="Yankee Stadium"
      />

      <h3>Yankee Stadium</h3>

      <TextTruncate
        line={8}
        element="p"
        truncateText="…"
        text={yankeesData && yankeesData.strStadiumDescription}
      />

      <hr />

      <FanArt
        img1={yankeesData && yankeesData.strTeamFanart1}
        img2={yankeesData && yankeesData.strTeamFanart2}
        img3={yankeesData && yankeesData.strTeamFanart3}
        img4={yankeesData && yankeesData.strTeamFanart4}
      />

      <hr />

    </div>
  );
}

export default App;
