import React, { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Groups from './components/Groups'
import Standing from './components/Standing'


function App() {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzc2ZTc5ZmZkOWFhYzIyNjczOTczMDIiLCJpYXQiOjE2Njg3OTQxNTYsImV4cCI6MTY2ODg4MDU1Nn0.9CgToZP5Pm5FEeraJ1QrJS1m6hU6_GneeeU_73JTB08";
  const [wc, setWc] = useState([])
  

  
  
  // useEffect(() => {
  //   fetch("http://api.cup2022.ir/api/v1/team",{
  //       method: "GET",
  //       headers: {
  //         "Authorization": `Bearer ${token}`,
  //         "Content-Type": "application/json",
  //         "Access-Control-Allow-Origin": "*",
  //         "Access-Control-Allow-Methods":"POST,PATCH,OPTIONS"
  //         // "Access-Control-Allow-Credentials": "true"
  //       },
        
  //     })
  //       .then(res => res.json())
  //       .then(data => {
  //         console.log(data)
  //         setWc(data)
  //         const team = data.Results
  //         const home = data.Results[0].Home.TeamName[0].Description
  //         const away = data.Results[0].Away.TeamName[0].Description
  //         // const away = data[0].Results.away
  //         // console.log(`${home} vs ${away}`)
  //       })
  // }, [])

  // console.log(wc)
  // const matches = wc.map(match => (
  //   <Fixtures
  //     key={match.id}
  //     home={match.Home.TeamName[0].Description}
  //     away={match.Away.TeamName[0].Description}
  //     homeScore={match.Home.Score}
  //     awayScore={match.Away.Score}
  //     stats={match.MatchStatus}
  //     homeLogo={`${match.Home.isAssociation}`}
  //     awayLogo={`${match.Away.isAssociation}`}
  //   />
  // ))
   
  return (
    <div>
      <Navbar />
      <main>
        <aside>
          <ul>
            <li>Groups A</li>
            <li>Groups B</li>
            <li>Groups C</li>
            <li>Groups D</li>
            <li>Groups E</li>
            <li>Groups F</li>
            <li>Groups G</li>
          </ul>
        </aside>
        <section>
          <div>
            <img src="/wcimage/e08a63142069201.625ffbdb37740.jpg" style={{width:"100%",height:"auto"}}  alt="fifa2022" />
          </div>
          <Groups grpTeam="A" />
          <Groups grpTeam="B" />
          <Groups grpTeam="C" />
          <Groups grpTeam="D" />
          <Groups grpTeam="E" />
          <Groups grpTeam="F" />
          <Groups grpTeam="G" />
          <Groups grpTeam="H" />
          <Standing grpTeam="A" />
          <Standing grpTeam="C" />
          <Standing grpTeam="D" />
          <Standing grpTeam="E" />
          <Standing grpTeam="F" />
          <Standing grpTeam="G" />
          <Standing grpTeam="H" />
        </section>
      </main>
    </div>
  )
}

export default App;