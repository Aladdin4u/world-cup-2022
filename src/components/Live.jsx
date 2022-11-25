import React, { useEffect, useState } from "react";
import match from '../data/match.js'

const Fixtures = (props) => {

    return (
        <div>
            <div className='fixture-list' style={{marginBottom:"2px"}}>
                <div className='fixture-title'>
                    <img src={props.homeImg} alt="team" className="box-img"/>
                    <span>{props.homeName}</span>
                </div>
                <div className='score'>{props.homeScore}</div>
                <div className='score' style={{marginLeft:0}}>{props.awayScore}</div>
                <div className='fixture-title'>
                    <img src={props.awayImg} alt="team" className="box-img"/>
                    <span>{props.awayName}</span>
                </div>
            </div>
            <div className="team-Scorers" >
                <div className='team-Scorer'>
                    {props.playerHome}
                </div>
                <div className='team-Scorer'>
                    {props.playerAway}
                </div>
            </div>
        </div>
    );
}

const Live = () => {
    const [matches, setMatches] = useState(match[0].data)
    const [dates, setDates] = useState(6)
    const [hide, setHide] = useState(true)

    function addMatchDay() {
        if(dates < 13) {
            setDates(prevDate => prevDate + 1)
        }
    }
    function subMatchDay() {
        if(dates > 1) {
            setDates(prevDate => prevDate - 1)
        }
    }

    function handleHide() { 
        setHide(prevHide => !prevHide)
    }

    let matchDay = ""
    const matchElement = matches.filter(match => match.matchday == dates).map(match => (
        <Fixtures 
        key={match._id}
        homeImg={match.home_flag}
        homeName={match.home_team_en}
        homeScore={match.time_elapsed === "notstarted" ? "-" : match.home_score}
        awayScore={match.time_elapsed === "notstarted" ? "-" : match.away_score}
        awayImg={match.away_flag}
        awayName={match.away_team_en}
        playerHome={match.time_elapsed === "notstarted" ? "" : match.home_scorers} 
        playerAway={match.time_elapsed === "notstarted" ? "" : match.away_scorers}
    />
    ))

    const center = {

    }

    return ( 
        <section className="" style={{marginTop:"70px"}}>
            <div className="rowLive" style={{justifyContent:"space-between", alignItems: "center"}}>
                <span onClick={subMatchDay}><svg style={{width: 20, height: 20,color:"white",}} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"></path></svg></span>

                <h3 style={{color:"white",}}>MatchDay {dates}</h3>

                <span onClick={addMatchDay}><svg style={{width: 20, height: 20, color:"white",}} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg></span>
            </div>
            <div className="column">
                <h1 style={{color:"white",}}>Live games</h1>
                {matchElement}
            </div>
        </section>
     );
}
 
export default Live;