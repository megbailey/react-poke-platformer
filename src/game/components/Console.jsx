import React from "react";
import { LeftController, RightController } from "./ConsoleControllers.jsx";

const Console = (props) => {
    const { height, children } = props
    
    return (
        <React.Fragment>
            <div 
                id="c-console-left" 
                style={{  
                    backgroundColor: 'purple', 
                    height: `${height + 30}px`,
                    padding: '10px',
                    border: 'solid',
                    borderWidth: '1px',
                    borderRadius: '25px',
                }}
            > 
            <LeftController />
        </div>
        <div 
            id="c-console-middle"
            style={{
                paddingTop: `20px`,
                paddingBottom: `20px`,
                paddingLeft: `10px`,
                paddingRight: `10px`,
                backgroundColor: 'purple',
                borderRadius: '25px',
                border: 'solid',
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
                { children }
            </div>
        </div>
        <div 
            className="c-console-right"
            style={{  
                backgroundColor: 'purple', 
                height: `${height + 30}px`,
                padding: '10px',
                border: 'solid',
                borderWidth: '1px',
                borderRadius: '25px',
            }}
        > 
            <RightController />
        </div>
      </React.Fragment>
    )
}

export default Console;