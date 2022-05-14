
import './App.css';
import Card from './components/Card';
import Data from "./Data.json"
function App() {
  
  return (
    <>
    <h1 className="Header">Todo App!</h1>
    {Data.map((item,index)=><Card key={index} cardTitle={item.title} cardDesc={item.description}/> )}
    </>
  )
}

export default App;
