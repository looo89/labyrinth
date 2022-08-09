
import ArrowDown from '../../UI/Arrow/ArrowDown';
import ArrowUp from '../../UI/Arrow/ArrowUp';
import ArrowLeft from '../../UI/Arrow/ArrowLeft';
import ArrowRight from '../../UI/Arrow/ArrowRight';
import cl from './Arrow.module.css'

function Arrow({number, direction}) {
  
  return (
    <div className={cl.Arrow}>
      {direction==='down' && <ArrowDown/>}
      {direction==='left' && <ArrowLeft/>}
      {direction==='right' && <ArrowRight/>}
      {direction==='up' && <ArrowUp/>}

    </div>
  );
}

export default Arrow;