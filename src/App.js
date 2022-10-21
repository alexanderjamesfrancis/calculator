
import './App.css';
import  Header from './componants/header'
import  Output from './componants/output'
import CalcBody from './componants/calc-body';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='upperwrapper'>
        <Header />
        <Output />
        </div>
        <div className='lowerwrapper'>
        <CalcBody />

        </div>
      </div>
      
      
    </div>
  );
}

export default App;
