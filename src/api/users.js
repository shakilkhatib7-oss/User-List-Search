//api call

export const usersList = async()=>{
    return await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((res)=>res.json())
}