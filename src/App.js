import './App.css';
import Counter from './componenets/counter';
function App() {
  return (
    <>
    <div className="bg-warning setting">

      <h2 className="text-center mt-20">  CHARACTER AND WORD COUNTER</h2>
      <div className="container">
      <Counter/>
      </div>
    </div>
    </>
  );
}

export default App;
