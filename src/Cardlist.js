import React from 'react'
import Card from './components/Card'


export default function Cardlist({robots}) {
    const CardComponent=robots.map((user,i)=>
        {
            return  <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
        })
  return (
    <div>
      {CardComponent}
    </div>
  )
}
