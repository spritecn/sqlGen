Vue.component("object-gen",{
    template:`
 <v-container>
      <v-row justify="center" >
        <v-col cols=12>
         <v-card outlined>
         <v-card-text>
          <div class="text--primary body-1  pt-1 pb-1">
            json,urlEncode,config(properties)
          </div>
        </v-card-text>
        </v-card>
      </v-col>
      <v-col cols=8 justify="left">
          <v-textarea  outlined readonly
            v-model = "template_str"
            label="转换规则"
            placeholder="Placeholder"
            rows="3" 
          ></v-textarea>
           <v-textarea  outlined readonly
            :value="result"
            label="转换结果"
            placeholder="Placeholder"
            rows="12" 
          > </v-textarea>
       </v-col>
       <v-col cols=4 justify="right">
        <v-textarea  outlined    v-model = "param"
            id="param" label="输入" rows="16" ></v-textarea>
      </v-col>
      <v-col cols=12>
         <v-card pt-1 pb-1 >
          <span>TODO:</span>
          <ol>
           <li>none</li>
          </ol>
        </v-card>
    </v-col>
</v-row>
</v-container>
 `
,
data: function() {
    return {
        template_str:"json => config \nurlEncode => json \nconfig=>json",
        //防抖过的param,
        paramComputed:'{"a":1,"b":"c"}'
    }
},
computed: {
    result:function(){return  genObject(this.paramComputed)},
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
