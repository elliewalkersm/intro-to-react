import './App.css';
import Counter from './Counter';

function App() {
  return (
    <>
      <Counter appName="Counter 1" counterStart={200}/>
      <Counter appName="Counter 2" counterStart={200}/>
      <Counter appName="Counter 3" counterStart={200}/>
    </>
  )
}

export default App;
