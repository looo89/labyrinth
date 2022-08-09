
const SET_ARROWS_DIRECTION='SET_ARROWS_DIRECTION'

const initialState= [
        {number: 1, direction: 'down'},
        {number: 2, direction: 'down'},
        {number: 3, direction: 'down'},
        {number: 4, direction: 'down'},
        {number: 5, direction: 'down'},
        {number: 6, direction: 'down'},
        {number: 7, direction: 'down'},
        {number: 8, direction: 'down'},
        {number: 9, direction: 'down'},
        {number: 10, direction: 'down'},
    ]


export const arrowReducer=(state=initialState, action)=>{
    switch(action.type) {      
        case SET_ARROWS_DIRECTION: {
            return state.map(el=>{
                if(el.number===action.payload.number){
                    return {...el, direction: action.payload.direction } 
                }else { return {...el};
                }
            })
        }
        
    default: return state
    } 
}

export const setArrowDirection=(payload)=>({type: SET_ARROWS_DIRECTION, payload})