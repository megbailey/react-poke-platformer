import { useRef, useEffect } from "react";

/** 
* @param elRef The HTML element to apply the event to
* @param callback The function to run once the target is pressed
*/
const useClickAndHold = (elRef, callback, timeout = 25) => {
    const isHeld = useRef(false)
    const activeHoldTimeoutId = useRef(null)

    useEffect(() => {
        //console.log(elRef.current)
        const pressEvents = [/* "mousedown", */ "touchstart"]
        const unpressEvents = [/* "mouseup", "mouseleave", */ "touchend", "touchcancel"]
        if ( elRef.current) {
            pressEvents.forEach( type => {
                elRef.current.addEventListener( type, onHoldStart, { passive: true } )
            });
            unpressEvents.forEach( type => {
                elRef.current.addEventListener( type, () => {
                    //console.log("stop move", type)
                    onHoldEnd()
                } )
            });

            return () => {
                pressEvents.forEach( type => {
                    if ( elRef.current ) elRef.current.removeEventListener( type, onHoldStart, { passive: true } )
                });
                unpressEvents.forEach( type => {
                    if ( elRef.current ) elRef.current.removeEventListener( type, onHoldEnd, { passive: true } )
                });
    
            }
        }
    }, [elRef.current])

    const onHoldStart = () => {
        isHeld.current = true
        activeHoldTimeoutId.current = setInterval(() => {
            if ( isHeld.current === true ) {
                console.log('isHeld is true')
                callback();
            }
        }, timeout)
    }

    const onHoldEnd = ( ) => {
        isHeld.current = false
        clearInterval(activeHoldTimeoutId);
    }

}

export default useClickAndHold;