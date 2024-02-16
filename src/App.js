import React, { useState } from 'react'
import Image from './components/Image'

function App() {
  const [imgValue,setImgvalue]=useState("")
  function handleSearch(e){
    const value=e.target.value
    setImgvalue(value)
    
  }
  const flex={
    width:100+"vw",
    height:100+"vh",
    display:"flex",
    justifyContent:"flex-start",
    alignItems:"center",
    flexDirection:"column",
    padding:"3rem",
    gap:"1rem",
    overflow:"hidden"
  }
  const input={
width:"40%",
height:"40px",
borderRadius:"10px",
padding:"0 20px",


  }
  return (
    <React.Fragment>
    <div style={flex}>
   <input style={input} type='text' placeholder='Search Anything' value={imgValue} onChange={handleSearch}></input>
   {imgValue===""?null:  <Image name={imgValue}></Image>}{/*don't render when input is empty*/}
   </div>
 
   </React.Fragment>
  )
}

export default App