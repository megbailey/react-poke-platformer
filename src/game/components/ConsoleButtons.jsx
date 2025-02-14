import React, { useRef } from "react"
import { useSelector } from "react-redux";

import useClickAndHold from "../utils/useClickAndHold.js";
import { 
    onMoveRight,
    onMoveLeft,
    onMoveTop,
    onMoveBottom 
} from "../utils/onMove.js";
import switchButtons from '../assets/img/Switch.png';
import xboxButtons from '../assets/img/Xbox.png';

const ConsoleButton = ({ 
    style,
    src,
    width,
    height,
    scale,
    useMap,
    children,
    left = 0,
    top = 0,
    ...other
}) => {
  
    return (
        <div 
            className='c-console--btn'
            style={{ 
                ...style,
                height: `${height}px`,
                width: `${width}px`,
                overflow: `hidden`,
                transform: `scale(${scale}, ${scale})`,
            }}
            {...other}
        >
            <img 
                style={{ 
                    transform: `translate(-${left}px, -${top}px)`,
                    '-moz-user-select': 'none',
                    '-webkit-user-select': 'none',
                    'user-select': 'none',
                    'user-drag': 'none',
                    '-webkit-user-drag': 'none',
                    '-moz-user-select': 'none',
                    '-ms-user-select': 'none',
                }}
                src={src}
                useMap={useMap}
            />
            {children}
        </div>  
    )
}

const SwitchButton = ({ 
    style,
    isSelected = false,
    left = 0,
    top = 0,
    scale = 2,
    ...other
}) => {
    const width = 16
    const height = 16
    if ( isSelected ) return (
        <ConsoleButton 
            {...other}
            style={style} 
            src={switchButtons} 
            height={height} 
            width={width} 
            scale={scale} 
            left={left} 
            top={top + 16}
        />
    )
    return (
        <ConsoleButton 
            {...other}
            style={style} 
            src={switchButtons} 
            height={height} 
            width={width}
            scale={scale} 
            left={left} 
            top={top}
        />
    )
}


export const AButton = ({ isSelected, style, scale }) => { 
    return <SwitchButton style={style} isSelected={isSelected} scale={scale} left={48} />
}

export const BButton = ({ isSelected, style, scale }) => { 
    return <SwitchButton style={style} isSelected={isSelected} scale={scale} left={64} />
}

export const XButton = ({ isSelected, style, scale }) => { 
    return <SwitchButton style={style} isSelected={isSelected} scale={scale} left={80} />
}

export const YButton = ({ isSelected, style, scale }) => { 
    return <SwitchButton style={style} isSelected={isSelected} scale={scale} left={96} />
}

export const PlusButton = ({ isSelected, style, scale }) => { 
    return <SwitchButton style={style} isSelected={isSelected} scale={scale} left={16} />
}

export const MinusButton = ({ isSelected, style, scale }) => { 
    return <SwitchButton style={style} isSelected={isSelected} scale={scale} />
}

export const ScreenshotButton = ({ isSelected, style, scale }) => { 
    return <SwitchButton style={style} isSelected={isSelected} scale={scale} top={32}/>
}

export const HomeButton = ({ isSelected, style, scale }) => { 
    return <SwitchButton style={style} isSelected={isSelected} scale={scale} left={208}/>
}

const XboxButton = ({ 
    style,
    useMap,
    children,
    top = 0,
    left = 0,
    height = 32, 
    width = 32,
    scale = 2.5,
    ...other
}) => {

    return ( 
        <ConsoleButton 
            {...other}
            style={style} 
            src={xboxButtons} 
            height={height} 
            width={width} 
            left={left} 
            top={top} 
            scale={scale}
            useMap={useMap}
        >
           {children}
        </ConsoleButton>
    )
}

export const DPad = ({ 
    style,
    scale,
    inactive, 
    /* isLeftSelected, 
    isRightSelected, 
    isTopSelected, 
    isBottomSelected */
}) => { 

    const gameState = useSelector((state) => state.game.value)
    let keyPress = gameState.activeKeyPress

    const leftRef = useRef(null)
    const rightRef = useRef(null)
    const topRef = useRef(null)
    const bottomRef = useRef(null)

    useClickAndHold(leftRef, onMoveLeft);
    useClickAndHold(rightRef, onMoveRight);
    useClickAndHold(topRef, onMoveTop);
    useClickAndHold(bottomRef, onMoveBottom);

    const imageMap = (
        <map name="dpad">
            {/* Top */}
            <area
                ref={topRef}
                id={'top-pad'}
                alt="D-Pad Top" 
                coords="12, 37, 20, 47" 
                shape="rect"                
            />
            {/* Left */}
            <area 
                ref={leftRef}
                id={'left-pad'}
                alt="D-Pad Left" 
                coords="4, 45, 12, 55" 
                shape="rect" 
            />
            {/* Right */}
            <area 
                ref={rightRef}
                id={'right-pad'}
                alt="D-Pad Right" 
                coords="19, 45, 28, 55" 
                shape="rect" 
            />
            {/* Bottom */}
            <area 
                ref={bottomRef}
                id={'bottom-pad'}
                alt="D-Pad Bottom" 
                coords="12, 55, 20, 63" 
                shape="rect" 
            />
        </map>
    )

    if ( inactive )
        return <XboxButton style={style} scale={scale} top={32} left={32}></XboxButton>
    else if ( keyPress === 'DPAD-UP' )
        return <XboxButton useMap={'#dpad'} style={style} scale={scale} top={32} left={64}>{imageMap}</XboxButton>
    else if ( keyPress === 'DPAD-DOWN' )
        return <XboxButton useMap={'#dpad'} style={style} scale={scale} top={32} left={96}>{imageMap}</XboxButton>
    else if ( keyPress === 'DPAD-RIGHT' )
        return <XboxButton useMap={'#dpad'} style={style} scale={scale} top={32} left={128}>{imageMap}</XboxButton>
    else if ( keyPress === 'DPAD-LEFT' )
        return <XboxButton useMap={'#dpad'} style={style} scale={scale} top={32} left={160}>{imageMap}</XboxButton>

    return <XboxButton useMap={'#dpad'} style={style} scale={scale} top={31.5} >{imageMap}</XboxButton>
}
