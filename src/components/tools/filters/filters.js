export const normalTime = time =>{
    if (time){
        var oDate = new Date()
        oDate.setTime(time)
        var y = oDate.getFullYear()
        var m = oDate.getMonth()+1
        var d = oDate.getDate()
        var h = oDate.getHours()
        var ms = oDate.getMinutes()
        var s = oDate.getSeconds()
        return '0'+m + '月' + d + '日'
    }
}
export const time = t=>{
    var oDate = new Date()
    oDate.setTime(t)
    var ms = oDate.getMinutes()
    var s = oDate.getSeconds()
    return `0${ms}:${s}`
}