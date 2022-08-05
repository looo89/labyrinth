
import { useSelector } from 'react-redux';
import Arrow from './Arrow/Arrow';
import cl from './Arrows.module.css'

function Arrows() {
  const ArrowsMap = useSelector(state=>state.reducer.ArrowsMap)
  return (
   
    <div className={cl.Arrows}>
      {
            ArrowsMap.map((item)=><Arrow number={item.number} key={item.number}/>)
      }
      
    </div>
  );
}

export default Arrows;