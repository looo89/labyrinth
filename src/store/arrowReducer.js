
const SET_ARROWS_DIRECTION='SET_ARROWS_DIRECTION'

const initialState= [
        {number: 1, direction: ''},
        {number: 2, direction: ''},
        {number: 3, direction: ''},
        {number: 4, direction: ''},
        {number: 5, direction: ''},
        {number: 6, direction: ''},
        {number: 7, direction: ''},
        {number: 8, direction: ''},
        {number: 9, direction: ''},
        {number: 10, direction: ''},
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