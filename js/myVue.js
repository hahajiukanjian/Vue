class Vue{

	constructor(options) {
		// 获取到data对象的数据
		Object.keys(options.data).forEach((propertyName, index) => {
			// console.log(propertyName, index, firstChar);
			// 判断propertyName的开头字母是否为$ _
			let firstChar = propertyName.charAt(0);
			if (firstChar != '_' && firstChar != '$') {
				Object.defineProperty(this, propertyName, {
					get : function() {
						return options.data[propertyName]
					},
					set : function(val) {
						options.data[propertyName] = val
					}
				})
			}
		})
		// 获取所有的方法名
		// Object.keys(options.methods).forEach((methodName, index) => {
		// 	// 给当前的Vue实例扩展一个方法
		// 	this[methodName] = options.methods[methodName]
		// })
	}

}