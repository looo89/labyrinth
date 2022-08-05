import Marker from "./../UI/FieldMark/Marker/Marker"
import Selected from "./../UI/FieldMark/Selected/Selected"

import {useDispatch} from "react-redux"

import { setSelectedSquare } from "../../store/reducer"

import cl from './Square.module.css'


function Square({marker, selected, count}) {
  const dispatch=useDispatch()
  const setSelected=(count)=>{
    dispatch(setSelectedSquare(count))
  }
  
  return (
    <div className={cl.Square} onClick={()=>setSelected(count)}>
      {marker && <Marker/>}
      {selected && <Selected/>}
    </div>
  );
}

export default Square;