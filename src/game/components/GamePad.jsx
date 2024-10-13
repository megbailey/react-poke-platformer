import React from "react"
import { 
    AButton, 
    BButton, 
    XButton, 
    YButton, 
    PlusButton, 
    MinusButton, 
    DPad 
} from "./ConsoleButtons.jsx";


export const LeftGamePad = ({ }) => {

    return (
        <div 
            className='c-gamepad-left'
            style={{ 
                display: 'grid',
                justifyItems: 'center', /* Center buttons horizontally */
                alignItems: 'center', /* Center buttons vertically */  
                width: '80px', /* Adjust the width based on button size */
                height: '80px', /* Adjust the height based on button size */
            }}
        >
            <DPad />
        </div>  
    )
}

export const RightGamePad = ({ }) => {

    return (
        <div 
            className='c-gamepad--right'
            style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr', /* 3 columns */
                gridTemplateRows: '1fr 1fr 1fr',    /* 3 rows */
                width: '80px', /* Adjust the width based on button size */
                height: '80px', /* Adjust the height based on button size */
                justifyItems: 'center', /* Center buttons horizontally */
                alignItems: 'center' /* Center buttons vertically */
            }}
        >
            <AButton style={{ gridColumn: 3, gridRow: 2 }} />
            <BButton style={{ gridColumn: 2, gridRow: 3 }} />
            <XButton style={{ gridColumn: 2, gridRow: 1 }} />
            <YButton style={{ gridColumn: 1, gridRow: 2 }} />
        </div>
    )
}
