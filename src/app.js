function genSql(){
    $("#result").val('')
    let template = $("#template").val()
    let param = $("#param").val()
    let paramLineArr = param.split("\n")
    let parseParamLineArr = []
    let resultArr = []
    //解析处理参数中的横杠
    paramLineArr.forEach(item =>{
        if(item.indexOf("-") != -1){
            let parseArr = genParamForDash(item)
            console.log(item)
            //将解析后的数组合入原数组
            parseParamLineArr = [...parseParamLineArr,...parseArr]
        }else{
            parseParamLineArr.push(item)
        }
        console.log(parseParamLineArr)
    })
    
    parseParamLineArr.forEach(element => {
        console.log(template,element)
        if(element.length == 0){
            return
        }
        if(element.indexOf(",") != -1){
            let tmpArr = element.split(",")
            //处理转义符
            tmpArr = parseParamEscape(tmpArr)
            resultArr.push(template.format(...tmpArr))
        }else{
            resultArr.push(template.format(element))
        }
    })
    let resultStr = resultArr.join("\n")
    $("#result").val(resultStr)
}


function genParamForDash(param){
    //如果参数里有 - ,如 101-110，将参数转换成 101，102...110多行参数数组
    //注意,号要原样输出
    //每行只能有一个横杠
    let lineSplitArr = []
    let dashInlineSplitArrIndex = 0
    let resultArr = []
    if(param.indexOf(",") != -1){
        lineSplitArr = param.split(",")
    }else{
        lineSplitArr.push(param)
    }
    //判断 '-' 在数组中的第几个位置
    //只能有一个 "-"
    if(lineSplitArr.length > 1){
        lineSplitArr.forEach((item,index) =>{
            if(item.indexOf("-") != -1){
                dashInlineSplitArrIndex = index
            }
        })
    }
    let tempArr =  lineSplitArr[dashInlineSplitArrIndex].split("-")
    let numArr = []
    if(tempArr.length>1){
        if(!isInteger(tempArr[0]) || !isInteger(tempArr[1])){
            //如果-前后不是数字,原样输出
            resultArr.push(param)
            return resultArr
        }
        let startNum = tempArr[0]
        let endNum = tempArr[1]
        for(let i=parseInt(startNum);
            i<(parseInt(endNum)+1);
            i++){
            console.log(tempArr)  
            numArr.push(i)
        }
    }
    numArr.forEach(item =>{
        lineSplitArr[dashInlineSplitArrIndex] = item
        resultArr.push(lineSplitArr.join(','))
    }) 
    return resultArr
}

var parseParamEscape = (paramArr) =>{
    //'\'为转义字符,只转义,不做分隔符用
    console.log("paramArr",paramArr)
    let result = []
    let tmpParam = ''
    for (let i of paramArr){
        if (i.substr(i.length-1,1) === '\\'){
            tmpParam = tmpParam + i.substr(0,i.length -1) + ','
        }else{
            result.push(tmpParam + i)
            tmpParam = ''
        }
    }
    console.log('Escap:',result)
    return result
}

function genSqlIn(){
    //in 模式
    let template = $("#template").val()
    let param = $("#param").val()
    let paramLine = param.split("\n")
    let resultArr = []
    paramLine.forEach(element => {
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

function isInteger(num){
    if (!isNaN(num) && num % 1 === 0) {
        return true
    } else {
        return false
    }
}