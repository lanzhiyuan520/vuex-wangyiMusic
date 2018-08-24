export const UserInfo = (name)=>{
    return JSON.parse(localStorage.getItem(name))
}