import React from "react";

const Table = (props) => {
    return ( 
        <tbody>
            <tr>
                <td><img src={props.flag} alt={props.teamName} className="box-img" />  {props.teamName}</td>
                <td>{props.MP}</td>
                <td>{props.W}</td>
                <td>{props.D}</td>
                <td>{props.L}</td>
                <td className="table-point">{props.Pts}</td>
                <td>{props.GF}</td>
                <td>{props.GA}</td>
                <td>{props.GD}</td>
            </tr>
        </tbody>
     );
}
 
export default Table;