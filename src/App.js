import './App.css';
import Dropdown from './components/Dropdown';
import Input from './components/Input';
import Slider from './components/Slider';
import Tab from './components/Tab';
import Toggle from './components/Toggle';

function App() {
  return (
    <>
      <div>1. Toggle</div>
      <Toggle />
      <div>2. Tab</div>
      <Tab />
      <div>3. Slider</div>
      <Slider />
      <div>4. Input</div>
      <Input />
      <div>5. Dropdown</div>
      <Dropdown />
    </>
  );
}

export default App;
