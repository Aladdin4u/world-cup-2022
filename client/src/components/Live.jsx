import React, { useEffect, useState } from "react";
import Fixtures from "./Fixtures";
import api from '../data/api.js'

const Live = () => {
    const [wcMatches, setWcMatches] = useState(api[0].Results)
    console.log(wcMatches[0].Away.IdCountry)

    // useEffect(() => {
    // fetch("https://api.fifa.com/api/v3/calendar/matches?idseason=255711&idcompetition=17&count=100")
    //     .then(res => res.json())
    //     .then(data => {
    //       console.log(data)
    //     //   setWc(data)
    //       const team = data.Results
    //       const home = data.Results[0].Home.TeamName[0].Description
    //       const away = data.Results[0].Away.TeamName[0].Description
    //       // const away = data[0].Results.away
    //       // console.log(`${home} vs ${away}`)
    //     })
    // }, [])
    // const grpName = wcMatches.GroupName[0].Description
    // const date = new Date("2022-11-21")
    // const dte = date.toISOString()
    // console.log(dte, "date")
    // const el = wcMatches.map(el => el.Away.Score)
    // console.log(el)
    const apiElement = wcMatches.map(match => (
        <Fixtures 
        key={match.IdMatch}
        homeImg="https://api.fifa.com/api/v3/picture/flags-fwc2022-1/QAT"
        homeName="Qatar"
        homeScore={match.HomeTeamScore}
        awayScore={match.AwayTeamScore}
        awayImg="https://api.fifa.com/api/v3/picture/flags-fwc2022-1/ECU`"
        awayName="Ecobar"
        />
    ))
    // console.log(apiElement)
    return ( 
        <div>
            <h1>Live games</h1>
            {apiElement}
        </div>
     );
}
 
export default Live;