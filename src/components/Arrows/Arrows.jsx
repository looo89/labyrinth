
import { useDispatch, useSelector } from 'react-redux';
import { setArrowDirection } from '../../store/arrowReducer';
import Arrow from './Arrow/Arrow';
import cl from './Arrows.module.css'

function Arrows() {
  const dispatch = useDispatch()
  const ArrowsMap = useSelector(state=>state.arrowReducer)
  const squareMap=useSelector(state=>state.squareReducer)
  let currentSquare=squareMap.find(square=> square.marker===true)
  console.log(currentSquare)

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
    console.log('generator')
    ArrowsMap.map(arrow=>{
      let number = arrow.number
      let direction=setNewDirection()
      console.log(direction, number)
      dispatch(setArrowDirection({number, direction}))
      currentSquare = setCurrentSquare(currentSquare.count, direction)
      console.log(currentSquare)
    })
  }

  return (
   
    <div className={cl.Arrows}>
      <button onClick={generatorArrow}>start</button>
      {
          ArrowsMap.map((item)=><Arrow number={item.number} key={item.number} direction={item.direction}/>)
      }
      
    </div>
  );
}

export default Arrows;