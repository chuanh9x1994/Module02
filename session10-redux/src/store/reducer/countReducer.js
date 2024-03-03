// reducer thực ra là những hàm, nhiệm vụ tính toán lại state mới
// khởi tạo state
const initialState=["mai","anh"];
export const countReducer=(state=initialState,action)=>{
    switch (action.type) {
        case "tang":
            let newState=[...state];
            newState.push("thúy");
            return newState;
        case "giam":
            
        return state-1;
    
        default:
            return state;
    }
}