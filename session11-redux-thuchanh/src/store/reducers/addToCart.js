import { useState } from "react";

const carts = JSON.parse(localStorage.getItem("carts")) || [];
export const addToCart = (state = carts, action) => {
    switch (action.type) {
        case "addCart":
            let newCarts = [...state];
            let check;
            if (newCarts.length == 0) {
                check = -1;
            }
            for (let i = 0; i < newCarts.length; i++) {
                if (action.payload.itemName != newCarts[i].itemName) {
                    check = -1;
                } else {
                    check = i;
                    break;
                }
            }
            if (check == -1) {
                newCarts.push(action.payload);
                localStorage.setItem("carts", JSON.stringify(newCarts));
            } else {
                newCarts[check].quantityItem = newCarts[check].quantityItem + action.payload.quantityItem;
                localStorage.setItem("carts", JSON.stringify(newCarts));
            }
            return newCarts;
        case "del":
            let newCarts2 = [...state];
            return newCarts2;
        case "update":
            let newCarts3 = [...state];
            return newCarts3;
        default:
            return state;
    }
}