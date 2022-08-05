import cl from './Square.module.css'

function Square({number, marker, selected}) {
  return (
    <div className={cl.Square}>
      {number}
      {marker && <h1>true</h1>}
    </div>
  );
}

export default Square;