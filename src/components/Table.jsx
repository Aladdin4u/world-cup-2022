import React from "react";
import Standing from './Standing'

const Table = (props) => {
    return ( 
        <section>
          <Standing grpTeam="A" />
          <Standing grpTeam="C" />
          <Standing grpTeam="D" />
          <Standing grpTeam="E" />
          <Standing grpTeam="F" />
          <Standing grpTeam="G" />
          <Standing grpTeam="H" />
        </section> 
     );
}
 
export default Table;