
import ArrowDown from '../../UI/Arrow/ArrowDown';
import cl from './Arrow.module.css'

function Arrow({number}) {
  return (
    <div className={cl.Arrow}>
      <ArrowDown/>
    </div>
  );
}

export default Arrow;