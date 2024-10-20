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


export const LeftController = ({ type }) => {
    const gameState = useSelector((state) => state.game.value)
    let keyPress = gameState.activeKeyPress
    let gameWidth = gameState.totalWidth

    return (
        <div 
            id='c-controller-left'
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
            <div id='c-controller--left-top' 
                style={{ 
                    position: 'absolute',
                    top: '10px', 
                    left: '60px'
                }}
            >
                <MinusButton 
                    scale={type === 'vertical' ? 3 : 2}
                />
            </div>
            <div 
                id='c-controller--left-middle' 
                style={{ marginRight: type === 'vertical' ? gameWidth/2.4 : 0 }}
                scale={type === 'vertical' ? 3 : 2}
            >
                <DPad 
                    scale={type === 'vertical' ? 3.5 : 2.5}
                    isLeftSelected={ keyPress === 'DPAD-LEFT'}
                    isRightSelected={ keyPress === 'DPAD-RIGHT' }
                    isTopSelected={ keyPress === 'DPAD-UP' }
                    isBottomSelected={ keyPress === 'DPAD-DOWN' }
                />
            </div>
            <div id='c-controller--left-bottom' 
                style={{ 
                    position: 'absolute',
                    bottom: '20px', 
                    left: '60px'
                }}
            >
                <ScreenshotButton 
                    scale={type === 'vertical' ? 2.5 : 2} 
                />
            </div>
        </div>  
    )
}

export const RightController = ({ type }) => {

    const gameState = useSelector((state) => state.game.value)
    let keyPress = gameState.activeKeyPress
    let gameWidth = gameState.totalWidth

    return (
        <div 
            id='c-right-controller'
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
            <div 
                id='c-right-controller--top' 
                style={{ 
                    display: 'flex', 
                    justifyContent: 'flex-start', 
                    alignItems: 'flex-start',
                    position: 'absolute',
                    top: '10px', 
                    left: '10px'
                }}
            >
                <PlusButton 
                    scale={type === 'vertical' ? 3 : 2} 
                />
            </div>
            <div 
                id='c-right-controller--middle'
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr', /* 3 columns */
                    gridTemplateRows: '1fr 1fr 1fr',    /* 3 rows */
                    width: type === 'vertical' ? '110px' : '80px',
                    height: type === 'vertical' ? '110px' : '80px', 
                    justifyItems: 'center', /* Center buttons horizontally */
                    alignItems: 'center', /* Center buttons vertically */
                    marginLeft: type === 'vertical' ? gameWidth/2.4 : 0
                }}
            >
                <AButton 
                    style={{ gridColumn: 3, gridRow: 2 }} 
                    scale={type === 'vertical' ? 2.5 : 2}
                    isSelected={ keyPress === 'ACTION-A' }
                />
                <BButton 
                    style={{ gridColumn: 2, gridRow: 3 }} 
                    scale={type === 'vertical' ? 2.5 : 2}
                    isSelected={ keyPress === 'ACTION-B' }
                />
                <XButton
                    style={{ gridColumn: 2, gridRow: 1 }} 
                    scale={type === 'vertical' ? 2.5 : 2}
                    isSelected={ keyPress === 'ACTION-X' }
                />
                <YButton 
                    style={{ gridColumn: 1, gridRow: 2 }} 
                    scale={type === 'vertical' ? 2.5 : 2}
                    isSelected={ keyPress === 'ACTION-Y' }
                />
            </div>
            <div 
                id='c-right-controller--bottom' 
                style={{ 
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-end',
                    position: 'absolute',
                    bottom: '20px', 
                    left: '10px'
                }}
            >
                <HomeButton 
                    scale={type === 'vertical' ? 2.5 : 2} 
                />
            </div>
        </div>
    )
}
