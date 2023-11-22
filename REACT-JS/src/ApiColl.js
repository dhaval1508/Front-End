import React from 'react'
import Tast123 from './ClassCompo'

export default function Hello() {
const x = ()=>

    fetch('https://jsonplaceholder.typicode.com/users')

    .then((res)=>{ return res.json()} )

    .then( (data)=>{
        let html ="<h1>---Api Data --- </h1>"
        data.map((v)=>{

            html = html + `
            
            <b>${v.name +" " + v.username +"<br/>"}</b>
              
            `
        })
    
    
        document.getElementById('op').innerHTML = html

    }

    )

  return (
    <div>
<button onClick={x} style={{height:"100px" , width:"200px"}}> Api</button>
<div id='op'> </div> 
<Tast123/>


{/* <img src='logo192.png' /> */}
        
      
    </div>
  )
}

