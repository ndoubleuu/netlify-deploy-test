import './App.css';
import Text from './Some-Component.js';
import Button from './Button.js';

const handleClick = () => {
  alert('What ever happened to poking people on Facebook? Why was that ever even a thing?');
}

function App() {
  return (
    <div>
      <Text />
      <Button clickEvent={handleClick}/>
    </div>
  );
}

export default App;
