import Square from '../Square/Square';
import {useSelector} from "react-redux"
import cl from './Field.module.css'

function Field() {
    const squareMap = useSelector(state=>state.reducer.squareMap)
  return (
    <div className={cl.Field}>
        {
            squareMap.map((item)=><Square number={item.number} 
              key={item.number} 
              marker={item.marker}
              selected={item.selected}
            />)
        }
    </div>
  );
}

export default Field;