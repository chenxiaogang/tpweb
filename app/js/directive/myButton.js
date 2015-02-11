/*compile 和 link 不能同时使用*/
app.directive('hello',function(){
	return {
		restrict	:'E',
		template	:'<button>MyButton</button>',
		replace		:true,
		//transclude	:true,
		compile	: function(element,attrs,transclude){
			return function(scope,iElement,iAttrs,ctrl,linker){
				iElement.bind('click',function(){
					alert('click event trigger');
				});
            }
            /*
			return {
				pre : function(scope,element,attris,controller){
					var txt=element.text();
					element.html('#'+txt);
				},
				post: function(scope,element,attris,controller){
					var txt=element.text();
					element.html(txt+'*');
				}
			}
			*/
		}
		/*
		,link	: function(scope,iElement,iAttrs){
			iElement.bind('click',function(){
				alert('click event trigger');
			});
		}
		*/
	}
});
