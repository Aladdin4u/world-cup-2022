import React, { useEffect, useState } from "react";
import Box from "./Box";
import Fixtures from "./Fixtures";
import match from '../data/match.js'
import team from '../data/team.js'


const Groups = ({grpTeam}) => {
    const [matches, setMatches] = useState(match[0].data)
    const [teams, setTeams] = useState(team[0].data)
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzc2ZTc5ZmZkOWFhYzIyNjczOTczMDIiLCJpYXQiOjE2NjkyMzQ0NzgsImV4cCI6MTY2OTMyMDg3OH0.9Oc3n00lrdC5LDvkR0L5Na7NZi52H6kS3adFWrTYWQY"
    // useEffect(() => {
    //     const fetchApi = async () => {
    //         const response = await fetch('api/v1/team', {
    //             headers: {
    //             "Authorization": `Bearer ${token}`,
    //             "Content-Type": "application/json",
    //             }
    //         })
    //         const data = await response.json()
    //         setTeams(data.data)
    //     }

    //     fetchApi()
    //     .catch(console.error)

        // fetch('api/v1/team', {
        //     headers: {
        //     "Authorization": `Bearer ${token}`,
        //     "Content-Type": "application/json",
        //     }
        // })
        // .then(res => res.json())
        // .then(data => setTeams(data.data))
    // }, [])
    
    // useEffect(() => {
    //     const fetchApi = async () => {
    //         const response = await fetch('api/v1/match', {
    //             headers: {
    //             "Authorization": `Bearer ${token}`,
    //             "Content-Type": "application/json",
    //             }
    //         })
    //         const data = await response.json()
    //         setMatches(data.data)
    //     }

    //     fetchApi()
    //     .catch(console.error)
        
        // .then(res => res.json())
        // .then(data => setMatches(data.data))
    // }, [])

    let el = grpTeam

    const matchElement = matches.filter(match => match.group == el).map(match => (
        <Fixtures 
        key={match._id}
        homeImg={match.home_flag}
        homeName={match.home_team_en}
        homeScore={match.time_elapsed === "notstarted" ? "-" : match.home_score}
        awayScore={match.time_elapsed === "notstarted" ? "-" : match.away_score}
        awayImg={match.away_flag}
        awayName={match.away_team_en} 
    />
    ))
    const teamElement = teams.filter(team => team.groups == el).map(team => (
    <Box 
        key={team._id}
        teamImg={team.flag} 
        teamName={team.name_en} />
    ))

    return ( 
        <section className="group-section" style={{marginTop:"70px"}} >
            <div className="row">
                <div className="side1">
                    <img className="nav--logo_icon" src="wcimage/Logo.png" />
                    <h3 style={{color:"white",}}>Teams {grpTeam}</h3>
                    {teamElement}
                </div>
                <div className="side2">
                    <h3 style={{color:"white",margin:"0 0 10 0",}}>Fixtures</h3>
                    {matchElement}
                </div>
            </div>
            
        </section>
    );
}
 
export default Groups;