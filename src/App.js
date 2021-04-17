import './App.css';
import Counter from './Counter';

function App() {
  const array = [
    {
      appName: "Counter 1",
      counterStart: 200
    },
    {
      appName: "Counter 2",
      counterStart: 200
    },
    {
      appName: "Counter 3",
      counterStart: 200
    }
  ];

  return (
    <>
      {array.map((counter, i) => 
        <Counter  key={i} appName={counter.appName} counterStart={counter.counterStart}/>
      )};
    </>
  )
}

export default App;
