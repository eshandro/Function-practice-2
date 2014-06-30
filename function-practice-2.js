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
var keyValue = function(key, value) {
	var wantedValue = {};
	wantedValue[key] = value;
	return wantedValue;
}
keyValue('city', 'Denver');

//4
var testArray1 = ['a', 'b', 'c', 'd','e'];
var testArray2 = ['Erik', 'Stasia', 'Marne', 'Dennis'];
var negativeIndex = function(enteredArray, negativeNumber) {
	return enteredArray[enteredArray.length + negativeNumber];
}

// 5
var removeM = function(word) {
	var newWord = ''
	for(i=0; i < word.length; i++) {
		if (word.charAt(i) !== 'm') {
			newWord += word.charAt(i);
		}
		else if (word.charAt(i) === 'm') {
			newWord += ''
		}
	}
	return newWord;


//6
var printObject = function(insertedObject) {
	for(var key in insertedObject) {
		console.log(key + " is " + insertedObject[key]);
	}
}