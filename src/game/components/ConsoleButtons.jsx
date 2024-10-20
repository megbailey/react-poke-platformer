import React from "react"
import switchButtons from '../assets/img/Switch.png';
import xboxButtons from '../assets/img/Xbox.png';

const ConsoleButton = ({ 
    style,
    src,
    width,
    height,
    scale,
    left = 0,
    top = 0,
}) => {

    return (
        <div 
            className='c-console--btn'
            style={{ 
                ...style,
                height: `${height}px`,
                width: `${width}px`,
                overflow: `hidden`,
                transform: `scale(${scale}, ${scale})`
            }}
        >
            <img 
                style={{ 
                    transform: `translate(-${left}px, -${top}px)`
                }}
                src={src}
            />
        </div>  
    )
}

const SwitchButton = ({ 
    style,
    isSelected = false,
    left = 0,
    top = 0,
    scale = 2
}) => {
    const width = 16
    const height = 16
    if ( isSelected ) return (
        <ConsoleButton 
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
    top = 0,
    left = 0,
    height = 32, 
    width = 32,
    scale = 2.5
}) => {
    return <ConsoleButton style={style} src={xboxButtons} height={height} width={width} left={left} top={top} scale={scale}/>
}

export const DPad = ({ 
    style,
    scale,
    inactive, 
    isLeftSelected, 
    isRightSelected, 
    isTopSelected, 
    isBottomSelected
}) => { 

    if ( inactive )
        return <XboxButton style={style} scale={scale} top={32} left={32}/>
    else if ( isTopSelected )
        return <XboxButton style={style} scale={scale} top={32} left={64}/>
    else if ( isBottomSelected )
        return <XboxButton style={style} scale={scale} top={32} left={96}/>
    else if ( isRightSelected )
        return <XboxButton style={style} scale={scale} top={32} left={128}/>
    else if ( isLeftSelected )
        return <XboxButton style={style} scale={scale} top={32} left={160}/>

    return <XboxButton style={style} scale={scale} top={31.5} />
}
