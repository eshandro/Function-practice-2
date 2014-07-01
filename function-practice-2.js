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

//7 
var vowels = function (newString) {
	var workingList = newString.split('');
	var vowelsList = ['a', 'e', 'i', 'o', 'u'];
	var vowelsInString = [];
	for(i=0; i<workingList.length; i++) {
		for(j=0; j<vowelsList.length; j++) {
			if(workingList[i] === vowelsList[j]) {
				vowelsInString.push(vowelsList[j]);
			}
		}
	}
	return vowelsInString;
}

// 8 
var twins = function (newArray) {
	if (newArray.length % 2 !== 0) {
		return false;
	}
	for(i=0; i<newArray.length; i+=2) {
		if (newArray[i] !== newArray[i+1]) {
			return false;
		}
	}
	return true;
}

// 9
var or = function(listBooleans) {
	for(i=0; i<listBooleans.length; i++) {
		if (listBooleans[i]) {
			return true;
		}
	}
	return false;

//10
var unique = function(enteredStrings) {
	var newArray = [enteredStrings[0]]
	for(i=1; i<enteredStrings.length; i++) {
		for(j=i+1; j<enteredStrings.length; j++) {
			if(enteredStrings[i] !== enteredStrings[j])
		}
	}
}