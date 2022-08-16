import Marker from "./../UI/FieldMark/Marker/Marker"
import Selected from "./../UI/FieldMark/Selected/Selected"

import {useDispatch, useSelector} from "react-redux"


import cl from './Square.module.css'
import { setSelectedSquare } from "../../store/squareReducer"
import FalseSquare from "../UI/FieldMark/FalseSquare/FalseSquare"
import { useState } from "react"
import { useEffect } from "react"
import { setResult } from "../../store/resultReducer"


function Square({marker, selected, count, target}) {
  const result=useSelector(state=>state.resultReducer)
  const squareMap = useSelector(state=>state.squareReducer)
  const targetSquare=squareMap.find(square=> square.target===true)
  const selectedSquare=squareMap.find(square=>square.selected===true)
  

  const dispatch=useDispatch()
  
  
  const setSelected=(count)=>{
    dispatch(setSelectedSquare(count))
    if(targetSquare.count===count){
      dispatch(setResult(1))
    } else{
      dispatch(setResult(-1))
    }
  }
  return (
    <div className={cl.Square} onClick={()=>setSelected(count)}>
      {result===0 && marker && <Marker/>}
      {result===1 && marker && <Marker/>}
      {result===-1 && marker && <Marker/>}
      {result===1 && selected && <Selected/>}
      {result===-1 && selected && <FalseSquare/> }
      {result===-1&& target && <Selected/> }
    </div>
  );
}

export default Square;