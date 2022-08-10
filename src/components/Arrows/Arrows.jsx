
import { useSelector } from 'react-redux';
import Arrow from './Arrow/Arrow';
import cl from './Arrows.module.css'

function Arrows() {
  const ArrowsMap = useSelector(state=>state.arrowReducer)

 

  return (
   
    <div className={cl.Arrows}>
      {
          ArrowsMap.map((item)=><Arrow number={item.number} key={item.number} direction={item.direction}/>)
      }
      
    </div>
  );
}

export default Arrows;