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

    return (
        <div 
            id='c-controller-left'
            style={{ 
                display: 'flex',
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'center',
                height: '100%', /* Ensure the full height is utilized */
                width: '100%', /* Ensure the full width is utilized */
                position: 'relative' /* Required for absolute positioning */
            }}
        >
            <div 
                id='c-controller--left-top' 
                style={{ 
                    position: 'absolute',
                    top: '15px', 
                    left: type === 'vertical' ? '85%' : '65%'
                }}
            >
                <MinusButton scale={type === 'vertical' ? 3 : 2} />
            </div>
            <div 
                id='c-controller--left-middle' 
                style={{ 
                    height: '50%',
                    width: '50%',
                    display: 'flex',
                    justifyContent: 'center', 
                    alignItems: 'center'
                }}
                scale={type === 'vertical' ? 3 : 2}
            >
                <DPad scale={type === 'vertical' ? 3.5 : 2.5} />
            </div>
            <div 
                id='c-controller--left-bottom' 
                style={{ 
                    position: 'absolute',
                    bottom: '20px', 
                    left: type === 'vertical' ? '85%' : '65%'
                }}
            >
                <ScreenshotButton scale={type === 'vertical' ? 2.5 : 2} />
            </div>
        </div>  
    )
}

export const RightController = ({ type }) => {
    const gameState = useSelector((state) => state.game.value)
    let keyPress = gameState.activeKeyPress

    return (
        <div 
            id='c-right-controller'
            style={{ 
                display: 'flex',
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'center',
                height: '100%', /* Ensure the full height is utilized */
                width: '100%', /* Ensure the full width is utilized */
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
                    top: '15px', 
                    left: '15%'
                }}
            >
                <PlusButton scale={type === 'vertical' ? 3 : 2} />
            </div>
            <div 
                id='c-right-controller--middle'
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr', /* 3 columns */
                    gridTemplateRows: '1fr 1fr 1fr',    /* 3 rows */
                    width: type === 'vertical' ? '60%' : '80%',
                    height: type === 'vertical' ? '40%' : '25%',
                    justifyItems: 'center', /* Center buttons horizontally */
                    alignItems: 'center', /* Center buttons vertically */
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
                    bottom: '15px', 
                    left: '15px'
                }}
            >
                <HomeButton 
                    scale={type === 'vertical' ? 2.5 : 2} 
                />
            </div>
        </div>
    )
}
