// 1
var names = {
	name: 'Luisa',
	age: 25
	}
var getName = function(list) {
	return list.name;
};
getName(names);

//2
var longString = ['what', 'happened', 'to', 'my', 'function'];
var anotherString = ['Hello', 'my', 'name', 'is', 'Erik'];
var totalLetters = function(strArray) {
	var total = 0;
	for(i=0; i < strArray.length; i++) {
		total += strArray[i].length;
	}
	return total;
}
totalLetters(longString);

// 3
