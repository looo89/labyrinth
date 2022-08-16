
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Arrows from './components/Arrows/Arrows';
import Field from './components/Field/Field';
import { setArrowDirection } from './store/arrowReducer';
import { setMarkerSquare, setTargetSquare } from './store/squareReducer';

function App() {

  const dispatch = useDispatch()
  
  const ArrowsMap = useSelector(state=>state.arrowReducer)
  const squareMap=useSelector(state=>state.squareReducer)
  let markerSquare=squareMap.find(square=> square.marker===true)
  
  let currentSquare=markerSquare
  let targetSquare=squareMap.find(square=> square.target===true)

  
  const setCurrentSquare=(currentSquareCount, direction)=>{
    switch(currentSquareCount){
      case 1 : {
        if( direction==='right')  return squareMap.find(square=>square.count===2);
        if (direction==='down')   return squareMap.find(square=>square.count===4);
      }
      case 2 : {
        if( direction==='left') return squareMap.find(square=>square.count===1)
        if( direction==='right') return squareMap.find(square=>square.count===3)
        if (direction==='down') return squareMap.find(square=>square.count===5)
      }
      case 3 : {
        if( direction==='left') return squareMap.find(square=>square.count===2)
        if (direction==='down') return squareMap.find(square=>square.count=== 6)
      }
      case 4 : {
        if( direction==='up') return squareMap.find(square=>square.count=== 1)
        if( direction==='right') return squareMap.find(square=>square.count===5)
        if (direction==='down') return squareMap.find(square=>square.count=== 7)
      }
      case 5 : {
        if( direction==='left') return squareMap.find(square=>square.count=== 4)
        if (direction==='up') return squareMap.find(square=>square.count=== 2)
        if( direction==='right') return squareMap.find(square=>square.count=== 6)
        if (direction==='down') return squareMap.find(square=>square.count=== 8)
      }
      case 6 : {
        if( direction==='left') return squareMap.find(square=>square.count=== 5)
        if( direction==='up') return squareMap.find(square=>square.count=== 3)
        if ( direction==='down') return squareMap.find(square=>square.count===9)
      }
      case 7 : {
        if( direction==='up') return squareMap.find(square=>square.count===4)
        if ( direction==='right') return squareMap.find(square=>square.count=== 8)
      }
      case 8 : {
        if( direction==='left') return squareMap.find(square=>square.count=== 7)
        if( direction==='up') return squareMap.find(square=>square.count=== 5)
        if ( direction==='right') return squareMap.find(square=>square.count=== 9)
      }
      case 9 : {
        if( direction==='left') return squareMap.find(square=>square.count=== 8)
        if ( direction==='up') return squareMap.find(square=>square.count=== 6)
      }
    }
  }
  function getRandomArrowDirection() {
    let random= Math.floor(Math.random() * (4 - 1 + 1) + 1)
    if(random==1) return 'left'
    if(random==2) return 'up'
    if(random==3) return 'right'
    if(random==4) return 'down'
  }

  function setNewDirection(){
  
    let direction=''
    do{
      direction=getRandomArrowDirection()
    } while(!currentSquare.possibleArrow.includes(direction))
    return direction
  }
  
  const generatorArrow=()=>{
    ArrowsMap.map(arrow=>{                                    //генерируем стрелки
      let number = arrow.number
      let direction=setNewDirection()
      dispatch(setArrowDirection({number, direction}))
      currentSquare = setCurrentSquare(currentSquare.count, direction)
      dispatch(setTargetSquare(currentSquare.count)) 
    })
  }
  const startGame=()=>{
    let randomMarker= Math.floor(Math.random() * (9 - 1 + 1)) + 1;
    dispatch(setMarkerSquare(randomMarker))
    currentSquare=squareMap.find(square=>square.count===randomMarker)
    generatorArrow()
  }
  

  return (
    <div className="App">
      <Field/>
      <div>Пройди по лабиринту по стрелкам от ячейки, помеченной флагом. Укажи конечную ячейку</div>
    
      <button onClick={startGame}>start</button>
      <Arrows/>
    </div>
  );
}

export default App;
