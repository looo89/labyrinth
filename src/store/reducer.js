const ADD='ADD'

const initialState={
    squareMap : [
        {number: 1, marker: true, selected:false},
        {number: 2, marker: false, selected:false},
        {number: 3, marker: false, selected:false},
        {number: 4, marker: false, selected:false},
        {number: 5, marker: false, selected:false},
        {number: 6, marker: false, selected:false},
        {number: 7, marker: false, selected:false},
        {number: 8, marker: false, selected:false},
        {number: 9, marker: false, selected:false},
    ],
    ArrowsMap : [
        {number: 1, direction: 'top'},
        {number: 2, direction: 'left'},
        {number: 3, direction: 'right'},
        {number: 4, direction: 'bottom'},
        {number: 5, direction: 'top'},
        {number: 6, direction: 'top'},
        {number: 7, direction: 'top'},
        {number: 8, direction: 'top'},
        {number: 9, direction: 'top'},
        {number: 10, direction: 'top'},
    ]
}

export const reducer=(state=initialState, action)=>{
    switch(action.type) {
        case ADD: {}
        
    default: return state
    } 
}