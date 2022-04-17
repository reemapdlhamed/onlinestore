import React from 'react'
import { useSelector } from 'react-redux'

export default function Favourites() {
    const prod =useSelector((state)=>state.favourites)
  return (
    <div className="container min-vh-100 my-5 py-5">
      hello
    </div>
  )
}
