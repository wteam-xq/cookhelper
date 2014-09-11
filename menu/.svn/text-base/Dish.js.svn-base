//∂®“ÂDish¿‡
if (typeof Dish == 'undefined') {
	function Dish() {
		this.dishid = null;
		this.cuisinename = null;
		this.cookingmethodname = null;
		this.tastename = null;
		this.dishname = null;
		this.ingredientslist = null;
		this.condimentlist = null;
		this.directions = null;
		this.tips = null;
		this.mainingredientsArray = new Array();
		this.seasonArray = new Array();
		this.imageArray = new Array();
	}
}

Dish.prototype.setDish = function(dishid, cuisinename, cookingmethodname,
		tastename, dishname, ingredientslist, condimentlist, directions, tips,
		mainingredients, season, image) {
	this.dishid = dishid;
	this.cuisinename = cuisinename;
	this.cookingmethodname = cookingmethodname;
	this.tastename = tastename;
	this.dishname = dishname;
	this.ingredientslist = ingredientslist;
	this.condimentlist = condimentlist;
	this.directions = directions;
	this.tips = tips;
	this.mainingredientsArray.push(mainingredients);
	this.seasonArray.push(season);
	this.imageArray.push(image);
};