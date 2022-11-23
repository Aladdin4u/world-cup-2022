import React from "react";
import Groups from "./Groups";

const Matches = (props) => {
    return ( 
        <section>
          <Groups grpTeam="A" />
          <Groups grpTeam="B" />
          <Groups grpTeam="C" />
          <Groups grpTeam="D" />
          <Groups grpTeam="E" />
          <Groups grpTeam="F" />
          <Groups grpTeam="G" />
          <Groups grpTeam="H" />
        </section> 
     );
}
 
export default Matches;