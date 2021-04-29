Vue.component("template-code-gen",{
    template:`
 <v-container>
      <v-row justify="center" >
        <v-col cols=12>
         <v-card outlined>
         <v-card-text>
          <div class="text--primary body-1  pt-1 pb-1">
            根据模板和参数生成代码,主要用于inset/update sql生成
          </div>
        </v-card-text>
        </v-card>
      </v-col>
      <v-col cols=8 justify="left">
          <v-textarea  outlined
            v-model = "template_str"
            label="模板"
            placeholder="Placeholder"
            rows="3" 
          ></v-textarea>
           <v-textarea  outlined readonly
            :value="result"
            label="生成结果"
            placeholder="Placeholder"
            rows="12" 
          > </v-textarea>
       </v-col>
       <v-col cols=4 justify="right">
        <v-textarea  outlined    v-model = "param"
            id="param" label="参数" rows="16" placeholder="参数,每行写一个"></v-textarea>
      </v-col>
      <v-col cols=12 justify="left" >
         <v-card pt-1 pb-1 >
          <span>TODO:</span>
          <ol>
           <li><s>支持多参数</s></li>
           <li>select in()生成括号内内容 </li>
           <li>支持可配置给字符串加引号</li>
          </ol>
          <span>格式化使用stringformat.js<a>https://github.com/jcayzac/stringformat.js</a> 感谢作者</span>
        </v-card>
    </v-col>
</v-row>
</v-container> 
 `
,
data: function() {
    return {
        template_str:"update usre set a = {1} where id = {0};",
        //防抖过的param,
        paramComputed:"1,2\n3,4"
    }
},
computed: {
    result:function(){return  templateCodeGen.genSql(this.template_str,this.paramComputed)},
    param: {
        get() {
            return this.paramComputed;
        },
        //防抖
        set: _.debounce(function(newValue) {
            this.paramComputed = newValue;
        }, 150)
    }
}
})
