import React, { useEffect, useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';

const url =
  'https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=new_york_yankees';

function App() {
  const [yankeesData, setYankeesData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setYankeesData(data);
    };

    fetchData();
  }, []);


  return (
    <div className="App">
      <Header
        logo={yankeesData && yankeesData.teams[0].strTeamBadge}
        fbLink={yankeesData && `https://${yankeesData.teams[0].strFacebook}`}
        twLink={yankeesData && `https://${yankeesData.teams[0].strTwitter}`}
        igLink={yankeesData && `https://${yankeesData.teams[0].strInstagram}`}
      />
    </div>
  );
}

export default App;
