
import ArrowDown from '../../UI/Arrow/ArrowDown';
import ArrowUp from '../../UI/Arrow/ArrowUp';
import ArrowLeft from '../../UI/Arrow/ArrowLeft';
import ArrowRight from '../../UI/Arrow/ArrowRight';
import cl from './Arrow.module.css'

function Arrow({number, direction}) {
  
  return (
    <div className={cl.Arrow}>
      {direction==='ArrowDown' && <ArrowDown/>}
      {direction==='ArrowLeft' && <ArrowLeft/>}
      {direction==='ArrowRight' && <ArrowRight/>}
      {direction==='ArrowUp' && <ArrowUp/>}

    </div>
  );
}

export default Arrow;