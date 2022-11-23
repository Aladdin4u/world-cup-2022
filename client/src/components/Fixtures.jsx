import React, { useState } from 'react'

const Fixtures = (props) => {
    return (
        <div>
            <div className='fixture-list'>
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
        </div>
    );
}
 
export default Fixtures;