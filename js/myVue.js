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
		// 实现能够直接通过vm调用methods的方法
		Object.keys(options.methods).forEach((methodName, index) => {
			this[methodName] = options.methods[methodName]
		})
	}
}