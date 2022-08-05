const SET_SELECTED_SQUARE='SET_SELECTED_SQUARE'

const initialState={
    squareMap : [
        {count: 1, marker: true, selected:false},
        {count: 2, marker: false, selected:false},
        {count: 3, marker: false, selected:false},
        {count: 4, marker: false, selected:false},
        {count: 5, marker: false, selected:false},
        {count: 6, marker: false, selected:true},
        {count: 7, marker: false, selected:false},
        {count: 8, marker: false, selected:false},
        {count: 9, marker: false, selected:false},
    ],
    ArrowsMap : [
        {number: 1, direction: 'ArrowUp'},
        {number: 2, direction: 'ArrowLeft'},
        {number: 3, direction: 'ArrowRight'},
        {number: 4, direction: 'ArrowDown'},
        {number: 5, direction: 'ArrowDown'},
        {number: 6, direction: 'ArrowDown'},
        {number: 7, direction: 'ArrowDown'},
        {number: 8, direction: 'ArrowDown'},
        {number: 9, direction: 'ArrowDown'},
        {number: 10, direction: 'ArrowDown'},
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
        )}
    }
        
    default: return state
    } 
}

export const setSelectedSquare=(payload)=>({type: SET_SELECTED_SQUARE, payload})