import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [len,setLen]=useState(8);
  let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let nums="1234567890"
  let chars="`~!@#$%^&*()_-=+[]\\|}{;'\":,./?><";
  const [password,setPassword]=useState("")
  const [allowNum,setAllowNum]=useState(false);
  const [allowChar,setAllowChar]=useState(false);

  function passwordGenerator(){
    if (allowNum){
      str+=nums;
    }
    if (allowChar){
      str+=chars;
    }
    let s=""
    for (let i=0;i<len;i++){
      s+=str.charAt(Math.floor(Math.random()*str.length))
    }
    setPassword(s);
  }

  //useEffect(()=>{},[])
  useEffect(()=>{
    passwordGenerator()
  },[len,allowNum,allowChar])

  function copyPassword() {
  navigator.clipboard.writeText(password)
  alert("Copied")
}

  return (
    <>
    <div className="container">
    <h1>Password Generator</h1>

    <input type="text" value={password} readOnly className='passwordBox' />

    <button className='copyBttn'
    onClick={()=>copyPassword()}>Copy</button><br /><br />

    <input type="range" min={8} max={50} 
    onChange={(e)=>{setLen(e.target.value)}}/>
    <label>Length: {len}</label>

    <input type="checkbox" 
    onChange={(e)=>setAllowNum(e.target.checked)}/>
    <label>Numbers</label>

    <input type="checkbox"
    onChange={(e)=>setAllowChar(e.target.checked)}/>
    <label>Characters</label>
    </div>
    </>
  )
}

export default App
