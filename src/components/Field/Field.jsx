import Square from '../Square/Square';
import { useSelector} from "react-redux"

import cl from './Field.module.css'

function Field() {
  const squareMap = useSelector(state=>state.squareReducer)
 
  return (
    <div className={cl.Field}>
        {
            squareMap.map((item)=><Square 
              key={item.count} 
              marker={item.marker}
              selected={item.selected}
              count={item.count}
              target={item.target}

            />)
        }
    </div>
  );
}

export default Field;