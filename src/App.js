import './App.css';
import sprite1 from '../src/img/trainer-sprite-1.png'
import { Sprite } from './components/Sprite';

function App() {
  return (
    <div className="App"> 
      <Sprite  
        src={sprite1}
        tile={{ width: 16, height: 16 }}
        states={3}
        scale={1.5}
        framesPerStep={16}
      />
  </div>
  );
}

export default App;
