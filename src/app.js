function genSql() {
    let template = $("#template").val()
    let param = $("#param").val()
    if (template.length == 0 && param.length == 0) return
    let arr = param.split("\n")
    console.log(arr)
    if(arr.length == 0) return
    let result = []
    arr.forEach(element => {
        if(element.length == 0) return
        console.log(template,element)
        result.push(template.replace("#",element))
    })
    let resultStr = result.join(";\n") + ";"
    $("#result").val(resultStr)
  }