import Marker from "./../UI/FieldMark/Marker/Marker"
import Selected from "./../UI/FieldMark/Selected/Selected"

import {useDispatch, useSelector} from "react-redux"


import cl from './Square.module.css'
import { setSelectedSquare } from "../../store/squareReducer"


function Square({marker, selected, count, target}) {
  
  const dispatch=useDispatch()

  const setSelected=(count)=>{
    dispatch(setSelectedSquare(count))
  }

  console.log('target', target)
  console.log('selected', selected)
  
  return (
    <div className={cl.Square} onClick={()=>setSelected(count)}>
      {marker && <Marker/>}
      {
        
        
      }
    </div>
  );
}

export default Square;