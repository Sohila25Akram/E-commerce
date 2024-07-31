import React from 'react'
import ReactStars from "react-stars";
import { FaStar } from "react-icons/fa6";

export default function Rating({valueSelected, color1, color2, size=18, allowEdit=false}) {
  return (
    <ReactStars 
      count={5}
      value={valueSelected}
      size={size}
      color1={color1}
      color2={color2}
      edit={allowEdit}
      // char={<FaStar />}
  />
  )
}
