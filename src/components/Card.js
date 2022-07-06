import React from 'react'

export default function Card(props) {
  return (
    <div className=' tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
     <img alt='robots' height={200} width={200} src={`https://robohash.org/${props.id}&200x200`} />
    <div>
        <h2>{props.name}</h2>
        <p>{props.email}</p>
    </div>
    </div>
        
  )
}
