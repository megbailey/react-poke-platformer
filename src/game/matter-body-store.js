import Matter from 'matter-js';

/* 
    Utilizing a custom store of matter.js bodies for manipulation outside of game engine 
    and because adding body to redux fails due to maximum call stack exceeded while 
    trying to recurisvely copy the body.
*/
const GlobalPlayerBodyStore = (() => {
    let _playerbody = null;
    return {
        initialize: body => _playerbody = body,
        translate: (x, y) => Matter.Body.translate( 
            _playerbody, { 
                x: x,
                y: y
        }),
        setVerticalVelocity: (y) => Matter.Body.setVelocity( 
            _playerbody, {
                x: _playerbody.velocity.x,
                y: y
        })
    }
  })()

export default GlobalPlayerBodyStore;