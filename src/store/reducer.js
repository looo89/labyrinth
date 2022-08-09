const SET_SELECTED_SQUARE='SET_SELECTED_SQUARE'
const SET_ARROWS_DIRECTION='SET_ARROWS_DIRECTION'

const initialState={
    squareMap : [
        {count: 1, marker: true, selected:false, possibleArrow: ['right', 'down']},
        {count: 2, marker: false, selected:false, possibleArrow: ['left', 'right', 'down']},
        {count: 3, marker: false, selected:false, possibleArrow: ['left', 'down']},
        {count: 4, marker: false, selected:false, possibleArrow: ['up', 'right', 'down']},
        {count: 5, marker: false, selected:false, possibleArrow: ['left', 'up', 'right', 'down']},
        {count: 6, marker: false, selected:true, possibleArrow: ['left', 'up', 'down']},
        {count: 7, marker: false, selected:false, possibleArrow: ['up', 'right']},
        {count: 8, marker: false, selected:false, possibleArrow: ['left', 'up', 'right']},
        {count: 9, marker: false, selected:false, possibleArrow: ['left', 'up']},
    ],
    ArrowsMap : [
        {number: 1, direction: 'up'},
        {number: 2, direction: 'left'},
        {number: 3, direction: 'right'},
        {number: 4, direction: 'down'},
        {number: 5, direction: 'down'},
        {number: 6, direction: 'down'},
        {number: 7, direction: 'down'},
        {number: 8, direction: 'down'},
        {number: 9, direction: 'down'},
        {number: 10, direction: 'up'},
    ]
}

export const reducer=(state=initialState, action)=>{
    switch(action.type) {
        case SET_SELECTED_SQUARE: {
            return {...state,
                squareMap: state.squareMap.map(el=>{
                    if(el.count===action.payload){
                        return {...el, selected: true } 
                    }else { return {...el, selected: false};
                }
            }
        )}}        
        case SET_ARROWS_DIRECTION: {
            return {...state,
                ArrowsMap: state.ArrowsMap.map(el=>{
                    if(el.number===action.payload.number){
                        return {...el, direction: action.payload.direction } 
                    }else { return {...el};
                }
            }
        )}
        
    }
        
    default: return state
    } 
}

export const setSelectedSquare=(payload)=>({type: SET_SELECTED_SQUARE, payload})
export const setArrowDirection=(payload)=>({type: SET_ARROWS_DIRECTION, payload})