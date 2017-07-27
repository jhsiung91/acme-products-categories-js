const data = { 
	"Basketball Players": [
		{id: 1, name: "Michael Jordan"},
		{id: 2, name: "Kobe Bryant"}
	],
	"Baseball Players": [
		{id: 1, name: "Derek Jeter"},
		{id: 2, name: "Aaron Judge"}
	]
};

function getCategoryNames(){
	return Object.keys(data);
}
function getProductsByCategory(category){
	return data[category];
}
function createProduct(category,productName){
	data[category].push({name: productName, id: data[category].length+1})
}
function deleteProduct(category,id){
	data[category] = data[category].filter(function(product){
		return product.id !== Number(id);
	})
}
function updateProduct(){
	
}
function createCategory(category){
	data[category] = [];
}
function deleteCategory(category){
	delete data[category]
}

module.exports = {getCategoryNames: getCategoryNames,
				  getProductsByCategory: getProductsByCategory,
                  createProduct: createProduct,
                  deleteProduct: deleteProduct,
                  deleteCategory: deleteCategory,
                  createCategory: createCategory,
                  updateProduct: updateProduct};