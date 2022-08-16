const SET_RESULT='SET_RESULT'
const SET_DEFAULT='SET_DEFAULT'

const initialState=0


export const resultReducer=(state=initialState, action)=>{
    switch(action.type) {
        case SET_RESULT: {
            return state=action.payload
        }

        case SET_DEFAULT: {
            return initialState
        }
        default: return state
    }
}

export const setResult=(payload)=>({type: SET_RESULT, payload})
export const setDefaultResult=()=>({type: SET_DEFAULT})


