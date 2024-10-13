import React from "react"

import Health from "./Health.jsx";
import Bag from "./Bag.jsx";


const TopBar = ( props ) => {
    const { 
        height
    } = props

    return (
        <div 
            id='game-top'
            style={{ 
                height: height,
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: 'black',
                borderTopLeftRadius: '25px',
                borderTopRightRadius: '25px'
            }}
        >
            <Health />
            <Bag />
      </div>
    )
}

export default TopBar;