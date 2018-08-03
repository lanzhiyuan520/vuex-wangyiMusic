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
export const commentsTime = t=>{
    var oDate = new Date()
    oDate.setTime(t)
    var h = oDate.getHours()
    var ms = oDate.getMinutes()
    h = h + ''
    ms = ms + ''
    ms.length==1?ms='0'+ms:ms
    return h.length==1?`0${h}:${ms}`:`${h}:${ms}`
}
export const created = t => {
    var oDate = new Date()
    oDate.setTime(t)
    var y = oDate.getFullYear()
    var m = oDate.getMonth()+1
    var d = oDate.getDate()
    var h = oDate.getHours()
    var ms = oDate.getMinutes()
    var s = oDate.getSeconds()
    return y+'年'+'0'+m + '月' + d + '日'
}