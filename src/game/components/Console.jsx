import React from "react";
import { useSelector } from "react-redux";

import { LeftController, RightController } from "./ConsoleControllers.jsx";

const HorizontalConsole = ({ children }) => {
    const gameState = useSelector((state) => state.game.value)
    const gameHeight = gameState.totalHeight

    return (
        <div
            id='c-console-horizontal'
            style={{
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <div 
                id="c-console--left" 
                style={{  
                    backgroundColor: 'purple', 
                    height: `${gameHeight + 30}px`,
                    padding: '10px',
                    border: 'solid',
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
                paddingTop: `20px`,
                paddingBottom: `20px`,
                paddingLeft: `10px`,
                paddingRight: `10px`,
                border: 'solid',
                borderWidth: '3px 0px',
                borderRadius: '25px',
            }}
        > 
            <div 
                id="c-console-game-window"
                style={{  
                    border: 'solid',
                    borderWidth: '3px',
                    borderRadius: '25px'
                }}
            >
                {children}
            </div>
        </div>
        <div 
            className="c-console--right"
            style={{  
                backgroundColor: 'purple', 
                height: `${gameHeight + 30}px`,
                padding: '10px',
                border: 'solid',
                borderWidth: '3px',
                borderRadius: '25px',
            }}
        > 
            <RightController />
        </div>
      </div>
    )
}

const VerticalConsole = ({ children }) => {
    const gameState = useSelector((state) => state.game.value)
    const gameWidth = gameState.totalWidth
    const gameHeight = gameState.totalHeight
    
    return (
        <div 
            id="c-console-vertical" 
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <div 
                id="c-console--top" 
                style={{  
                    backgroundColor: 'purple', 
                    padding: '17px',
                    border: 'solid',
                    borderWidth: '3px',
                    borderTopLeftRadius: '25px',
                    borderTopRightRadius: '25px',
                }}
            > 
                <div 
                    id="c-console-game-window"
                    style={{  
                        border: 'solid',
                        borderWidth: '3px',
                        borderRadius: '25px',
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
                justifyContent: 'center',
                backgroundColor: 'purple',
                padding: '20px',
                border: 'solid',
                borderLeftWidth: '3px',
                borderRightWidth: '3px',
                borderBottomWidth: '3px',
                borderBottomLeftRadius: '25px',
                borderBottomRightRadius: '25px',
                height: gameHeight,
                width: gameWidth
            }}
        > 
            <div 
                id="c-console--bottom-left"
                style={{ marginRight: 50 }}
            > 
                <LeftController type='vertical' />
            </div>
            <div id="c-console--bottom-right"> 
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