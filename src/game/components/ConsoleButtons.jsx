import React from "react"
import switchButtons from '../assets/img/Switch.png';
import xboxButtons from '../assets/img/Xbox.png';

const ConsoleButton = ({ 
    style,
    src,
    width,
    height,
    left = 0,
    top = 0
}) => {

    return (
        <div 
            className='c-console--btn'
            style={{ 
                ...style,
                height: `${height}px`,
                width: `${width}px`,
                overflow: `hidden`,
                transform: `scale(2, 2)`
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
    height = 16, 
    width = 16
}) => {
    if ( isSelected ) return <ConsoleButton style={style} src={switchButtons} height={height} width={width} left={left} top={16}/>
    return <ConsoleButton style={style} src={switchButtons} height={height} width={width} left={left} />
}

export const AButton = ({ isSelected, style }) => { 
    return <SwitchButton style={style} isSelected={isSelected} left={48} />
}

export const BButton = ({ isSelected, style }) => { 
    return <SwitchButton style={style} isSelected={isSelected} left={64} />
}

export const XButton = ({ isSelected, style }) => { 
    return <SwitchButton style={style} isSelected={isSelected} left={80} />
}

export const YButton = ({ isSelected, style }) => { 
    return <SwitchButton style={style} isSelected={isSelected} left={96} />
}

export const PlusButton = ({ isSelected, style }) => { 
    return <SwitchButton style={style} isSelected={isSelected} left={16} />
}

export const MinusButton = ({ isSelected, style }) => { 
    return <SwitchButton style={style} isSelected={isSelected} />
}

const XboxButton = ({ 
    style,
    top = 0,
    left = 0,
    height = 32, 
    width = 32,
}) => {
    return <ConsoleButton style={style} src={xboxButtons} height={height} width={width} left={left} top={top}/>
}

export const DPad = ({ 
    style,
    inactive, 
    isLeftSelected, 
    isRightSelected, 
    isTopSelected, 
    isBottomSelected
}) => { 

    if ( inactive )
        return <XboxButton style={style} top={32} left={32}/>
    else if ( isTopSelected )
        return <XboxButton style={style} top={32} left={64}/>
    else if ( isBottomSelected )
        return <XboxButton style={style} top={32} left={96}/>
    else if ( isRightSelected )
        return <XboxButton style={style} top={32} left={128}/>
    else if ( isLeftSelected )
        return <XboxButton  style={style} top={32} left={160}/>

    return <XboxButton style={style} top={32} />
}
