import React, { useState } from "react";
import standing from '../data/standing.js'
import Tbody from "./Tbody.jsx";

const Standing = ({grpTeam}) => {
    const [tables, setTables] = useState(standing[0].data)

    let el = grpTeam
    const tableElement = tables.filter(table => table.group == el)
        .map(table => table.teams.sort((a,b) => b.pts - a.pts))
        .map(table => table.map(table => (
        <Tbody 
            key={table.team_id}
            flag={table.flag}
            teamName={table.name_en}
            MP={table.mp}
            W={table.w}
            D={table.d}
            L={table.l}
            Pts={table.pts}
            GF={table.gf}
            GA={table.ga}
            GD={table.gd}
        />
    )))

    return ( 
        <div className="standing-container">
            <h3 style={{color:"white",marginBottom:"10px",}}>Teams {grpTeam}</h3>
            <table>
                <thead>
                    <tr>
                        <th>Team</th>
                        <th>MP</th>
                        <th>W</th>
                        <th>D</th>
                        <th>L</th>
                        <th>Pts</th>
                        <th>GF</th>
                        <th>GA</th>
                        <th>GD</th>
                    </tr>
                </thead>
                {tableElement}
            </table>
        </div>
     );
}
 
export default Standing;