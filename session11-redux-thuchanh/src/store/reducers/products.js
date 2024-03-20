const products = [
    {
        img:"images/pizza.jpg",
        name:"Pizza",
        describe:"Pizzaaaaaaaaaa rất ngon",
        price:30,
        id:1,
    },
    {
        img:"images/Hamburger.jpg",
        name:"Hamburger",
        describe:"Hamburgerrrrrrrrrrrrr rất ngon",
        price:15,
        id:2,
    },
    {
        img:"images/bread.jpg",
        name:"Bread",
        describe:"Breadddddddddddddd rất ngon",
        price:20,
        id:3,
    },
    {
        img:"images/Cake.jpg",
        name:"Cake",
        describe:" Cakeeeeeeeeeeeeeeeee rất ngon",
        price:10,
        id:4,
    },
]
export const dataProducts = (state = products,action)=>{
    return state
}