import React, { useEffect, useState } from "react";
import match from '../data/match.js'

const Fixtures = (props) => {
    let dateArray = props.date
    function splitLocalDate(date) {
        return date.split(" ")[0]
    }
    let date = splitLocalDate(dateArray)

    return (
        <>
            <div className='live-list'>
                <h4 className='live-title' style={{margin:0}}>
                    {date}
                </h4>
                <div className="live-row">
                    <div className="live-column">
                        <div className='live-row-list'>
                            <img src={props.homeImg} alt="team" className="box-img"/>
                            <span className="span-right">{props.homeName}</span>
                            <span >{props.homeScore}</span>
                        </div>
                        <div className='live-row-list'>
                            <img src={props.awayImg} alt="team" className="box-img"/>
                            <span className="span-right">{props.awayName}</span>
                            <span>{props.awayScore}</span>
                        </div>
                    </div>
                    <div className="live-right">
                        {props.time}
                    </div>
                </div>
                
            </div>
        </>
    );
}

const Round = (props) => {
    const [matches, setMatches] = useState(match[0].data)

    // useEffect(() => {
    //     const api_url = `https://world-cup-2022-ten.vercel.app/api/match`; // Use localhost locally = http://localhost:3000/api/match
    //     // fetch(api_url)
    //     // .then(res => res.json())
    //     // .then(data => setMatches(data.data))

    //     async function fetchdata () {
    //         const response = await fetch(api_url)
    //         const data = await response.json()
    //         setMatches(data.data)
    //         // console.log(data)
    //     }

    //     fetchdata()
    // },[])
    

    let group = props.group
    const matchElement = matches.filter(match => match.group == group).map(match => (
        <Fixtures 
        key={match._id}
        date={match.local_date}
        homeImg={match.home_flag}
        homeName={match.home_team_en}
        homeScore={match.time_elapsed === "notstarted" ? "-" : match.home_score}
        awayScore={match.time_elapsed === "notstarted" ? "-" : match.away_score}
        awayImg={match.away_flag}
        awayName={match.away_team_en}
        playerHome={match.time_elapsed === "notstarted" ? "" : match.home_scorers} 
        playerAway={match.time_elapsed === "notstarted" ? "" : match.away_scorers}
        time={match.time_elapsed}
    />
    ))
    
    return ( 
        <section>
            <div className="column">
                <h1 style={{color:"white",}}>{props.type}</h1>
                <div className="cards-list">
                    {matchElement}
                </div>
            </div>
        </section>
     );
}
 
export default Round;