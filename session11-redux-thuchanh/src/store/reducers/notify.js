const notify = "";

export const notification = ((state = notify,acton)=>{
    switch (acton.type) {
        case "addCart":
            state = "đã thêm";
            return state;
        case "del":
            state = "đã xóa";
            return state;
        case "update":
            state = "đã cập nhật";
            return state;
        default:
            return state;
    }
})