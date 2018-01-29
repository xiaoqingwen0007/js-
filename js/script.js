var Module2=(function(){
	//私有变量
	var a=1;
	//私有函数
	var short=function(a){
		return document.getElementById(a)
	}
	//加法
	var plus=function(a,b){
		return a+b;
	};
	//减法
	var reduce=function(a,b){
		return a-b;
	};
	//乘法
	var ride=function(a,b){
		return a*b
	};
	return {
		short:short,
		plus:plus,
		reduce:reduce,
		ride:ride
	}
})()
//同时该模块还可以为其添加新的方法
Module2=(function(mod){
	//除法
	mod.except=function(){
		return a/b
	}
	return mod
})(Module2)

