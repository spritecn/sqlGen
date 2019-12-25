function genSql(){
    let template = $("#template").val()
    let param = $("#param").val()
    let paramLine = param.split("\n")
    let resultArr = []
    paramLine.forEach(element => {
        console.log(template,element)
        if(element.length == 0) return
        if(",".indexOf(element)){
            let tmpArr = element.split(",")
            resultArr.push(template.format(...tmpArr))
        }else{
            resultArr.push(template.format(element))
        }
    })
    let resultStr = resultArr.join("\n")
    $("#result").val(resultStr)
}