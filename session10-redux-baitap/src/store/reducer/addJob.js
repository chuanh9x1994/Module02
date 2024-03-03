import { useState } from "react";

const jobs=JSON.parse(localStorage.getItem("dataJob")) || [];
export const addJob = (state=jobs,action)=>{
    
    switch (action.type) {
        case "add":
            let newJobs=[...state];
            newJobs.push(action.payload);
            localStorage.setItem("dataJob", JSON.stringify(newJobs));
            return newJobs;
        case "add12":
            let newJobs2 = [...state];
            return newJobs2;
        case "del" :
            let newJobs3 = [...state];
            return newJobs3;
        default:
            return state;
    }
}