const SET_SELECTED_SQUARE='SET_SELECTED_SQUARE'
const SET_TARGET_SQUARE='SET_TARGET_SQUARE'
const SET_MARKER_SQUARE='SET_MARKER_SQUARE'
const SET_DEFAULT_SQUARE='SET_DEFAULT_SQUARE'

const initialState=[
    {count: 1, marker: false, selected:false, target:false, possibleArrow: ['right', 'down']},
    {count: 2, marker: false, selected:false, target:false, possibleArrow: ['left', 'right', 'down']},
    {count: 3, marker: false, selected:false, target:false, possibleArrow: ['left', 'down']},
    {count: 4, marker: false, selected:false, target:false, possibleArrow: ['up', 'right', 'down']},
    {count: 5, marker: false, selected:false, target:false, possibleArrow: ['left', 'up', 'right', 'down']},
    {count: 6, marker: false, selected:false, target:false, possibleArrow: ['left', 'up', 'down']},
    {count: 7, marker: false, selected:false, target:false, possibleArrow: ['up', 'right']},
    {count: 8, marker: false, selected:false, target:false, possibleArrow: ['left', 'up', 'right']},
    {count: 9, marker: false, selected:false, target:false, possibleArrow: ['left', 'up']},
]


export const squareReducer=(state=initialState, action)=>{
    switch(action.type) {
        case SET_MARKER_SQUARE: {
            return state.map(el=>{
                if(el.count===action.payload){
                    return {...el, marker: true } 
                }else return {...el, marker: false}
            }
        )}
        case SET_SELECTED_SQUARE: {
            return state.map(el=>{
                if(el.count===action.payload){
                    return {...el, selected: true } 
                }else return {...el, selected: false}
            }
        )}
        case SET_TARGET_SQUARE: {
            return state.map(el=>{
                if(el.count===action.payload){
                    return {...el, target: true } 
                }else return {...el, target: false}
            }
        )}
        case SET_DEFAULT_SQUARE: {
            return initialState
        }
        
        default: return state
    }
}

export const setSelectedSquare=(payload)=>({type: SET_SELECTED_SQUARE, payload})
export const setTargetSquare=(payload)=>({type: SET_TARGET_SQUARE, payload})
export const setMarkerSquare=(payload)=>({type: SET_MARKER_SQUARE, payload})
export const setDefaultSquare=()=>({type: SET_DEFAULT_SQUARE})



