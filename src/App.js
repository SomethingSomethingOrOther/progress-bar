import {useState,useEffect} from "react"
import './App.css';

function App() {
  const [rangeInput,setRangeInput]=useState(1)
  const [intervalId,setIntervalId] = useState(null)
  const [width,setWidth]=useState(0)

 


   const handleStart=()=>{
         
            const interval=setInterval(()=>{
              setWidth(prev=>prev >=1365 ? 0:prev + 10)
           },100/rangeInput)
        setIntervalId(interval)            
          
     }

     const handlePause=()=>{
        clearInterval(intervalId)
        setIntervalId(null)
     }

     const handleReset=()=>{
        setRangeInput(1)
        clearInterval(intervalId)
        setIntervalId(null)
        setWidth(0)


     }
    
     useEffect(() => {
      return () => {
        clearInterval(intervalId);
      };
    }, [intervalId]);
    
    useEffect(() => {
      if (rangeInput === 10) {
        clearInterval(intervalId); 
        setIntervalId(null);
      }
    }, [rangeInput, intervalId]);


  return (
    <div className="App">
      <div>
        <h1>Progressbar</h1>
      </div>
      <div style={{border:"1px solid black",height:"5rem",borderRadius:"5rem"}}>
      <div style={{width:width,maxWidth:"inherit",backgroundColor:"red",marginBottom:"2rem",border:"1px solid grey",height:"5rem",borderRadius:"5rem"}}>

      </div>
      </div>
      <div>
        <button onClick={handleStart}style={{cursor:"pointer",margin:"1rem",borderRadius:"3rem",border:"none",padding:"1rem 2rem",backgroundColor:"purple",color:"orange"}}>Start</button>
        <button onClick={handlePause}style={{cursor:"pointer",margin:"1rem",borderRadius:"3rem",border:"none",padding:"1rem 2rem",backgroundColor:"purple",color:"orange"}}>Pause</button>
        <button onClick={handleReset}style={{cursor:"pointer",margin:"1rem",borderRadius:"3rem",border:"none",padding:"1rem 2rem",backgroundColor:"purple",color:"orange"}}>Reset</button>
      </div>
      <div>
        <input value={rangeInput}
        onChange={(e)=>setRangeInput(e.target.value)}
        type="range"min="1" max="10"/>
          <p>{rangeInput}</p>
      </div>
    </div>
  );
}

export default App;
