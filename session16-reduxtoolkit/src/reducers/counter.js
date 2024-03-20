const abc=0;

export const counter=(state=abc,action)=>{
    switch (action.type) {
        case "tang len":
            return state+action.payload;
        case "giam xuong":
            return state-action.payload;
        default:
            return state;
    }
}