const initialState = localStorage.getItem("số lượng job") || 0;

export const countJob = (state=initialState,action)=>{
    switch (action.type) {
        case "add":
            state=state+1;
            localStorage.setItem("số lượng job",state);
            return state
        case "del":
            state=state-1;
            localStorage.setItem("số lượng job",state);
            return state;
        default:
            return state
    }
}

