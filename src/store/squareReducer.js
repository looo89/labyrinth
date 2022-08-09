const SET_SELECTED_SQUARE='SET_SELECTED_SQUARE'

const initialState=[
    {count: 1, marker: true, selected:false, possibleArrow: ['right', 'down']},
    {count: 2, marker: false, selected:false, possibleArrow: ['left', 'right', 'down']},
    {count: 3, marker: false, selected:false, possibleArrow: ['left', 'down']},
    {count: 4, marker: false, selected:false, possibleArrow: ['up', 'right', 'down']},
    {count: 5, marker: false, selected:false, possibleArrow: ['left', 'up', 'right', 'down']},
    {count: 6, marker: false, selected:true, possibleArrow: ['left', 'up', 'down']},
    {count: 7, marker: false, selected:false, possibleArrow: ['up', 'right']},
    {count: 8, marker: false, selected:false, possibleArrow: ['left', 'up', 'right']},
    {count: 9, marker: false, selected:false, possibleArrow: ['left', 'up']},
]


export const squareReducer=(state=initialState, action)=>{
    switch(action.type) {
        case SET_SELECTED_SQUARE: {
            return state.map(el=>{
                if(el.count===action.payload){
                    return {...el, selected: true } 
                }else return {...el, selected: false}
            }
        )}
        
        default: return state
    }
}

export const setSelectedSquare=(payload)=>({type: SET_SELECTED_SQUARE, payload})