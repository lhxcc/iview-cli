<template>
   <div id="app-2">
     <form action="/vform" method="post">
        <vspace msg="textarea"></vspace>
        <textarea v-model="multimessage" name="textarea" placeholder="add multiple lines"></textarea>
        <p>Message is: {{ multimessage }}</p>
        
        <vspace msg="text"></vspace>
        <input v-model.lazy="message" name="text" placeholder="edit me">
        <p>Message is: {{ message }}</p>
     
        <vspace msg="checkbox"></vspace>
        <div>
            <input type="checkbox" id="checkbox" name="checkbox" value="333" v-model="checked">
	        <label for="checkbox">选项1</label>
	        <input type="checkbox" id="checkbox2" name="checkbox" value="444" v-model="checked2">
	        <label for="checkbox2">选项2</label>
	        <p>Checked: {{ checked }}, {{ checked2 }}</p>
        </div>
        <div>
	        <input type="checkbox" name="checkbox2" id="jack" value="Jack" v-model="checkedNames">
			<label for="jack">Jack</label>
			<input type="checkbox" name="checkbox2" id="john" value="John" v-model="checkedNames">
			<label for="john">John</label>
			<input type="checkbox" name="checkbox2" id="mike" value="Mike" v-model="checkedNames">
			<label for="mike">Mike</label>
			<p>Checked: {{ checkedNames }}</p>
		</div>
		
		<vspace msg="radio"></vspace>
		<input type="radio" name="radio" id="one" value="One" v-model="picked">
		<label for="one">One</label>
		<input type="radio" name="radio" id="two" value="Two" v-model="picked">
		<label for="two">Two</label>
		<p>Picked: {{ picked }}</p>
		
		<vspace msg="select"></vspace>
		<select name="select1" v-model="selected">
		    <option value='a'>A</option>
		    <option value='b'>B</option>
		    <option value='c'>C</option>
	    </select>
        <p>Selected: {{ selected }}</p>
        
        <vspace msg="multiple select"></vspace>
		<select name="select2" v-model="selectedArr" multiple style="width: 50px">
		    <option v-for="item of items" :value='item.value'>{{item.text}}</option>
	    </select>
        <p>Selected: {{ selectedArr }}</p>
        
        <vspace msg="绑定 value"></vspace>
        <label for="bindck">checkbox绑定value到动态属性</label>
        <input
          id="bindck"
          name="bindck"
		  type="checkbox"
		  v-model="toggle"
		  value="xxx"
		  v-bind:true-value="a"
		  v-bind:false-value="b"
		>
        <p>Selected: {{ toggle }}</p>
        
        
		<div>
			<input type="submit" value="commit">
	    </div>
     </form>
   </div>
</template>

<script>
    import Vue from 'vue'
    
    Vue.component('vspace', {
    	props: {
    		msg: {
    			type: String,
    			default: 'default'
    		}
    	},
    	template: '<div style="margin:10px;"><h2>{{ msg }}</h2></div>'
    });

    export default {
        data () {
            return {
                checked:true,
                checked2:false,
                checkedNames: ['Jack'],
                message: '',
                multimessage: '',
                picked: '',
                selected: '',
                selectedArr: ['a'],
                items: [{value:'a', text:'A'},{value:'b', text:'B'},{value:'c', text:'C'}],
                toggle: '',
                a: {value: 'a'},
                b: {value: 'b'},
            }
        },
        methods: {
             
        },
        beforeCreate () {
            console.log("base--->beforeCreate");
        },
        created () {
        	console.log("base--->created");
        },
        beforeMount () {
        	console.log("base--->beforeMount");
        },
        mounted () {
            console.log("base--->mounted");
        },
        beforeUpdate () {
            console.log("base--->beforeUpdate");
        },
        updated () {
        	console.log("base--->updated");
        },
        beforeDestroy () {
            console.log("base--->beforeDestroy");
        },
        destroyed () {
        	console.log("base--->destroyed");
        }
    }
</script>
