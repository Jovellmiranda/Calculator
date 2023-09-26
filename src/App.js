//File Path:
import './App.css';
//File Path:


function CalcuButton({label}) {
  return (
    <button>
      {label}
    </button>
  );
}
function CalcuDisplay({Display}) {
  return (
    <div className='CalcuDisplay'>
      {Display}
    </div>
  );
  }
function App() {
  return (
    <div classname = 'CalcContainer'>
      <CalcuDisplay Display = {'Hello World'}/>
      <div classname = 'ButtonContainer'>
        <CalcuButton label = {7}/>
        <CalcuButton label = {8}/>
        <CalcuButton label = {9}/>
        <CalcuButton label = {"+"}/>
        <CalcuButton label = {4}/>
        <CalcuButton label = {5}/>
        <CalcuButton label = {6}/>
        <CalcuButton label = {"-"}/>
        <CalcuButton label = {1}/>
        <CalcuButton label = {2}/>
        <CalcuButton label = {3}/>
        <CalcuButton label = {"*"}/>
        <CalcuButton label = {"C"}/>
        <CalcuButton label = {0}/>
        <CalcuButton label = {"="}/>
        <CalcuButton label = {"÷"}/>
      </div>
    </div>
  );
}




//Running the Code:
export default App;
//Running the Code: