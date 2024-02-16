import React from 'react'

function Image(props) {
    const img= `https://source.unsplash.com/600x400/?${props.name}`
   
    console.log(props.name)
  return (
    <img style={{borderRadius:"13px"}} src={img}/>
  )
}

export default Image