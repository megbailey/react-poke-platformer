import React from "react"
import { useSelector } from "react-redux";

import { 
    AButton, 
    BButton, 
    XButton, 
    YButton, 
    PlusButton, 
    MinusButton, 
    DPad, 
    ScreenshotButton,
    HomeButton
} from "./ConsoleButtons.jsx";


export const LeftController = ({ }) => {
    const gameState = useSelector((state) => state.game.value)
    let keyPress = gameState.activeKeyPress

    return (
        <div 
            className='c-controller-left'
            style={{ 
                display: 'flex',
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'center',
                height: '100%', /* Ensure the full height is utilized */
                width: '85px', /* Ensure the full width is utilized */
                position: 'relative' /* Required for absolute positioning */
            }}
        >
            <div className='c-controller--left-top' 
                style={{ 
                    position: 'absolute',
                    top: '10px', 
                    left: '60px'
                }}
            >
                <MinusButton />
            </div>
            <div className='c-controller--left-middle'>
                <DPad 
                    isLeftSelected={ keyPress === 'DPAD-LEFT'}
                    isRightSelected={ keyPress === 'DPAD-RIGHT' }
                    isTopSelected={ keyPress === 'DPAD-UP' }
                    isBottomSelected={ keyPress === 'DPAD-DOWN' }
                />
            </div>
            <div className='c-controller--left-bottom' 
                style={{ 
                    position: 'absolute',
                    bottom: '20px', 
                    left: '60px'
                }}
            >
                <ScreenshotButton />
            </div>
        </div>  
    )
}

export const RightController = ({ }) => {

    const gameState = useSelector((state) => state.game.value)
    let keyPress = gameState.activeKeyPress

    return (
        <div className='c-controller--right'
            style={{ 
                display: 'flex',
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'center',
                height: '100%', /* Ensure the full height is utilized */
                width: '85px',
                position: 'relative' /* Required for absolute positioning */
            }}
        >
            <div className='c-controller--right-top' 
                style={{ 
                    display: 'flex', 
                    justifyContent: 'flex-start', 
                    alignItems: 'flex-start',
                    position: 'absolute',
                    top: '10px', 
                    left: '10px'
                }}
            >
                <PlusButton />
            </div>
            <div className='c-controller--right-middle c-gamepad--action-buttons'
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
                <AButton 
                    style={{ gridColumn: 3, gridRow: 2 }} 
                    isSelected={ keyPress === 'ACTION-A' }
                />
                <BButton 
                    style={{ gridColumn: 2, gridRow: 3 }} 
                    isSelected={ keyPress === 'ACTION-B' }
                />
                <XButton
                    style={{ gridColumn: 2, gridRow: 1 }} 
                    isSelected={ keyPress === 'ACTION-X' }
                />
                <YButton 
                    style={{ gridColumn: 1, gridRow: 2 }} 
                    isSelected={ keyPress === 'ACTION-Y' }
                />
            </div>
            <div className='c-controller--right-bottom' 
                style={{ 
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-end',
                    position: 'absolute',
                    bottom: '20px', 
                    left: '10px'
                }}
            >
                <HomeButton />
            </div>
        </div>
    )
}
