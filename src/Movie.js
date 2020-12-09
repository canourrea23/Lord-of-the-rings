import React from 'react'

const Movie = (props) => {
   return (
   <div>
      <h1>The Lord of the Rings: {props.title}</h1>
      <p>{props.hours}h {props.minutes}min</p>
   </div>
   )
}

export default Movie