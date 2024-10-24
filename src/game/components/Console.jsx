import React from "react";
import { useSelector } from "react-redux";

import { LeftController, RightController } from "./ConsoleControllers.jsx";

const HorizontalConsole = ({ windowWidth, windowHeight, children }) => {
    const gameState = useSelector((state) => state.game.value)
    const totalWidth = gameState.totalWidth
    const totalHeight = gameState.totalHeight

    return (
        <div
            id='c-console-horizontal'
            style={{
                display: 'flex',
                alignItems: 'center',
                width: `${totalWidth}px`,
                height: `${totalHeight}px`,
            }}
        >
            <div 
                id="c-console--left" 
                style={{  
                    backgroundColor: 'purple', 
                    height: `${totalHeight - 6 /* TB border width */}px`,
                    width: `94px`, /* static width + border width = 100 */
                    border: 'solid',
                    borderColor: 'black',
                    borderWidth: '3px',
                    borderRadius: '25px',
                    
                }}
            > 
            <LeftController />
        </div>
        <div 
            id="c-console--middle"
            style={{
                backgroundColor: 'purple',
                border: 'solid',
                borderColor: 'black',
                borderWidth: '3px 0px',
                borderRadius: '25px',
                padding: '15px',
            }}
        > 
            <div 
                id="c-console-game-window"
                style={{  
                    width: `${windowWidth}px`,
                    height: `${windowHeight}px`,
                    display: 'flex',
                    justifyContent: 'center', 
                    alignItems: 'center',
                    border: 'solid',
                    borderColor: 'black',
                    borderWidth: '3px',
                    borderRadius: '25px',
                    overflow: 'hidden'
                }}
            >
                {children}
            </div>
        </div>
        <div 
            className="c-console--right"
            style={{  
                backgroundColor: 'purple', 
                height: `${totalHeight - 6 /* TB border width */}px`,
                width: `94px`, /* static width + border width = 100 */
                border: 'solid',
                borderColor: 'black',
                borderWidth: '3px',
                borderRadius: '25px',
            }}
        > 
            <RightController />
        </div>
      </div>
    )
}

const VerticalConsole = ({  windowWidth, windowHeight, children }) => {
    const gameState = useSelector((state) => state.game.value)
    const totalWidth = gameState.totalWidth
    const totalHeight = gameState.totalHeight
    
    return (
        <div 
            id="c-console-vertical" 
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: `${totalWidth}px`,
                height: `${totalHeight}px`,
            }}
        >
            <div 
                id="c-console--top" 
                style={{  
                    backgroundColor: 'purple', 
                    padding: '15px',
                    border: 'solid',
                    borderColor: 'black',
                    borderWidth: '3px',
                    borderTopLeftRadius: '25px',
                    borderTopRightRadius: '25px',
                    height: '50%',
                }}
            > 
                <div 
                    id="c-console-game-window"
                    style={{
                        width: `${windowWidth}px`,
                        height: `${windowHeight}px`,
                        display: 'flex',
                        justifyContent: 'center', 
                        alignItems: 'center',
                        border: 'solid',
                        borderColor: 'black',
                        borderWidth: '3px',
                        borderRadius: '25px',
                        overflow: 'hidden'
                    }}
                >
                    {children}
                </div>
            </div>
        <div 
            id="c-console--bottom"
            style={{
                display: 'flex',
                flexDirection: 'row',
                backgroundColor: 'purple',
                padding: '15px',
                border: 'solid',
                borderColor: 'black',
                borderLeftWidth: '3px',
                borderRightWidth: '3px',
                borderBottomWidth: '3px',
                borderBottomLeftRadius: '25px',
                borderBottomRightRadius: '25px',
                height: `${totalWidth - 30 /* padding */ - 6 /* border width */}px`,
                width: `${totalWidth - 30 /* padding */ - 6 /* border width */}px`,
            }}
        > 
            <div 
                id="c-console--bottom-left"
                style={{ 
                    height: '100%', 
                    width: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignSelf: 'left'
                }}
            > 
                <LeftController type='vertical' />
            </div>
            <div 
                id="c-console--bottom-right"
                style={{ 
                    height: '100%',  
                    width: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            > 
                <RightController type='vertical' />
            </div>
        </div>
      </div>
    )
}

const Console = ({ type, ...other }) => {
    switch (type) {
        case 'vertical':
            return <VerticalConsole {...other} />
        default: 
            return <HorizontalConsole {...other}/>
    }
}

export default Console;