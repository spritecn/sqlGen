{
    "code-genetator": {
        "name": "code-genetator",
        "tips": "code-genetator",
        "noPage": false,
        "contentScript": false,
        "contentScriptCss": false,
        "menuConfig": [
            {
                "icon": "✈",
                "text": "我是 code-genetator",
                "onClick": function (info, tab) {
                    alert("你好，我是code-genetator!");
                    chrome.DynamicToolRunner({
                        query: "tool=code-genetator"
                    });
                }
            }
        ],
        "updateUrl": null
    }
}