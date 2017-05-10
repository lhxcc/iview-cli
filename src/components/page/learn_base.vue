<template>
    <div id="app-2">
    
      <vspace msg="v-bind"></vspace>
	  <span :title="message">
	    鼠标悬停几秒钟查看此处动态绑定的提示信息！
	  </span>
	  
	  <vspace msg="v-if"></vspace>
	  <div v-if="seen">
	    {{text}}
	    <button @click="reverseMessage">逆转消息</button>
	  </div>
	  
	  <vspace msg="v-for"></vspace>
	  <table>
	    <tr>
	      <th>id</th>
	      <th>name</th>
	    </tr>
	    <tr v-for="item in items">
	      <td>{{item.id}}</td>
	      <td>{{item.name}}</td>
	    </tr>
	  </table>
	  
	  <vspace :msg="initmsg" ref="myvspace"></vspace>
      <ol>
        <todo-item :propdata="initpropdata"></todo-item>
      </ol>
    
      <vspace msg="v-once"></vspace>
      <vspace :msg="initmsg" v-once></vspace>
    
      <vspace msg="v-html"></vspace>
      <div v-html="rawHtml"></div>
	    
	  <vspace msg="render函数"></vspace>
	  <anchored-heading :level="4">Hello world!</anchored-heading>  
   </div>
</template>

<script>
    import Vue from 'vue'
    
    Vue.component('todo-item', {
    	props: ['propdata'],
    	template: '<li>{{ propdata.text }}</li>'
    });
    
    Vue.component('anchored-heading', {
	  render: function (createElement) {
	    return createElement(
	      'h' + this.level,   // tag name 标签名称
	      this.$slots.default // 子组件中的阵列
	    )
	  },
	  props: {
	    level: {
	      type: Number,
	      required: true
	    }
	  }
	});
    
    Vue.component('vspace', {
    	props: {
    		msg: {
    			type: String,
    			default: 'default'
    		}
    	},
    	template: '<div style="margin:10px;"><h2>{{ msg }}</h2></div>',
    	beforeCreate () {
            console.log("vspace--->beforeCreate");
            // data与props还未定义
            // console.log("vspace--->beforeCreate++++++++++>"+this.msg);
        },
        created () {
            console.log("vspace--->created");
            console.log("vspace--->created++++++++++>"+this.msg);
        },
        beforeMount () {
            console.log("vspace--->beforeMount");
            console.log("vspace--->beforeMount++++++++++>"+this.msg);
        },
        mounted () {
            console.log("vspace--->mounted");
            console.log("vspace--->beforeMount++++++++++>"+this.msg);
        },
        beforeUpdate () {
            console.log("vspace--->beforeUpdate");
            console.log("vspace--->beforeUpdate++++++++++>"+this.msg);
        },
        updated () {
        	console.log("vspace--->updated");
        	console.log("vspace--->updated++++++++++>"+this.msg);
        },
        beforeDestroy () {
        	console.log("vspace--->beforeDestroy");
        },
        destroyed () {
        	console.log("vspace--->destroyed");
        }
    });
    
    export default {
        data () {
            return {
                message: '鼠标悬停！',
                seen: false,
                text: '开始是不可见的',
                items: [{id:'1', name:'alan'},{id:'2', name:'alex'}],
                initpropdata: {text:'传递给子组件的属性'},
                initmsg: '父组件的信息',
                rawHtml: '<h5>html标签</h5>'
            }
        },
        methods: {
             reverseMessage: function () {
			    this.text = this.text.split('').reverse().join('')
			 }
        },
        beforeCreate () {
            console.log("base--->beforeCreate");
            // data与props还未定义
            // console.log("base--->beforeCreate--->"+this.$data.seen);
        },
        created () {
        	console.log("base--->created");
        	console.log("base--->created--->"+this.$data.seen);
        },
        beforeMount () {
        	console.log("base--->beforeMount");
        	console.log("base--->beforeMount--->"+this.$data.seen);
        },
        mounted () {
            console.log("base--->mounted");
            console.log("base--->mounted--->"+this.$data.seen);
            setTimeout(()=>{
            	this.$data.seen = true;
            },2000);
        },
        beforeUpdate () {
            console.log("base--->beforeUpdate");
            console.log("base--->beforeUpdate--->"+this.$data.text);
            
            this.$data.initmsg = '改变父组件的信息';
        },
        updated () {
        	console.log("base--->updated");
        	console.log("base--->updated--->"+this.$data.text);
        },
        beforeDestroy () {
            console.log("base--->beforeDestroy");
        },
        destroyed () {
        	console.log("base--->destroyed");
        }
    }
</script>
