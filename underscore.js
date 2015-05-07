// underscore.js rebuild

var _ = (function() {

		return {

		// average - returns the average value in a given array
		// _.average([4,6,1,1]);
		// => 3

		average : function(arr) {
			var sum = 0;
			for (var i = 0; i < arr.length; i++){
				sum += arr[i];
			}
			return sum/arr.length;
		},
		// contains - returns true is a given value is present in an array
		
		// _.contains([7,55,99], 99);
		// => true

		contains : function(arr, value){
			var flag = false;
			for (var i = 0; i < arr.length; i++){
				if(arr[i] == value)
					flag = true;
			}
			return flag;
		},

		// first - returns the first element in an array
		
		// _.first([5, 4, 3, 2, 1]);
		// => 5

		first : function(arr){
			return arr[0];
		},

		// last - returns the last element in an array
		
		// _.last([5, 4, 3, 2, 1]);
		// => 1

		last : function(arr){
			return arr[arr.length - 1];
		},

		// max - returns the maximum value in an array
		
		// var numbers = [10, 5, 100, 2, 1000];
		// _.max(numbers);
		// => 1000

		max : function(arr){
			var max = arr[0];
			for (var i = 0; i < arr.length; i++){
				if(arr[i] > max)
					max = arr[i];
			}
			return max;
		},

		// min - returns the minimum value in an array
		
		// var numbers = [10, 5, 100, 2, 1000];
		// _.min(numbers);
		// => 2

		min : function(arr){
			var min = arr[0];
			for (var i = 0; i < arr.length; i++){
				if(arr[i] < min)
					min = arr[i];
			}
			return min;
		},

		// shuffle - Returns a shuffled copy of the list, using a version 
		// of the Fisher-Yates shuffle. Don't worry about implementing that 
		// exact shuffle alogrithm. Start by creating your own simple shuffle.
		
		// _.shuffle([1, 2, 3, 4, 5, 6]);
		// => [4, 1, 6, 3, 5, 2]

		shuffle : function(arr){
			var i = 0;
			var temp;
			while (i<arr.length)
			{
				var randIndex = Math.floor(Math.random() * (arr.length - 1));
				temp = arr[i];
				arr[i] = arr[randIndex];
				arr[randIndex] = temp;
				i++;
			}
			return arr;
		},

		// sample - Produce a random sample from the list. Pass a number to return 
		// n random elements from the list. Otherwise a single random item will be 
		// returned.

		// _.sample([1, 2, 3, 4, 5, 6]);
		// => 4
		// _.sample([1, 2, 3, 4, 5, 6], 3);
		// => [1, 6, 2]

		sample : function(arr, n) {
			var result = [];
			var i = 0;
			if (!n)
				n = 1;
			while (i < n){
				var randIndex = Math.floor(Math.random() * (arr.length - 1));
				if (_.contains(result,arr[randIndex])){
				} else {
					result.push(arr[randIndex]);
					i++;
				}
			}
			return result;
		},

		// difference - returns the values from array that are not present in the 
		// other array.

		// _.difference([1, 2, 3, 4, 5], [5, 2, 10]);
		// => [1, 3, 4]

		difference : function(arr1, arr2) {
			var resultArr = [];
			for (var i = 0; i < arr1.length; i++){
				if (_.contains(arr2,arr1[i])){

				} else {
						resultArr.push(arr1[i]);
				}
			}
			// for (var j = 0; j < arr2.length; j++){
			// 	if (_.contains(arr1,arr2[j])){

			// 	} else {
			// 		resultArr.push(arr2[j]);
			// 	}
			// }
			return resultArr;
		},

		// indexOf - Returns the index at which value can be found in the array, 
		// or -1 if value is not present in the array.

		// _.indexOf([1, 2, 3], 2);
		// => 1

		indexOf : function(arr, value){
			var resultIndex = -1;
			for (var i = 0; i < arr.length; i++){
				if (arr[i] == value)
					resultIndex = i;
			}
			return resultIndex;
		},

		// pluck - extracts a list of property values and returns them in an array.
		
		// var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
		// _.pluck(stooges, 'name');
		// => ["moe", "larry", "curly"]

		pluck : function(arr, key) {
			var valueArr = [];
			for (var i = 0; i < arr.length; i++)
			{
				if (key in arr[i])
					valueArr.push(arr[i][key]);
			}
			return valueArr;
		},


		//     each - iterates over an array and calls a given function with each element

		// _.each([1, 2, 3], alert);
		// => alerts each number in turn...

		each : function(arr, event) {
				arr.forEach(event);
				//for (var i = 0; i < arr.length; i++){ event(arr[i]);}
		},

		//     compact - returns a new array with all provided undefined values removed

		// _.compact([1, "hello", undefined, 3, undefined]);
		// => [1, "hello", 3]

		compact : function(arr) {
				for (var i = 0; i < arr.length; i++){
					if (!arr[i])
						arr.splice(i, 1);
				}
				return arr;
		},

		//     map - returns a new array of values produced by running each element of an array through a given function

		// _.map([1, 2, 3], function(num){ return num * 3; });
		// => [3, 6, 9]

		// _.map(["dogs", "before", "cats"], function(str){ return str.toUpperCase(); });
		// => ["DOGS", "BEFORE", "CATS"]

		map : function(array, event) {
			var resultArr = [];
			for (var i = 0; i < array.length; i++){
				resultArr[i] = event(array[i]);
			}
			return resultArr;
		},

		//     filter - Looks through each value in the list, returning an array of all the values that pass a truth test

		// var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
		// => [2, 4, 6]

		filter : function(array, truthTest) {
			var resultArr = [];
			for (var i = 0; i < array.length; i++){
				if(truthTest(array[i]))
					resultArr.push(array[i]);
			}
			return resultArr;
		}

		};
	})();

	module.exports = _;

	// console.log(_.average([4,6,1,1]));
	// // => 3
	// console.log(_.contains([7,55,99], 99));
	// // => true
	// console.log(_.first([5, 4, 3, 2, 1]));
	// // => 5
	// console.log(_.last([5, 4, 3, 2, 1]));
	// // => 1
	// console.log(_.max([5, 400, 3, 1200, 1]));
	// // => 1200
	// console.log(_.min([5, 400, 3, 1200, 1]));
	// // => 1
	// console.log(_.sample([1, 2, 3, 4, 5, 6]));
	// // => one random number from above array
	// console.log(_.sample([1, 2, 3, 4, 5, 6], 3));
	// // => three random numbers from above array
	// console.log(_.difference([1, 2, 3, 4, 5], [5, 2, 10]));
	// // => [1, 3, 4]
	// console.log(_.indexOf([1, 2, 3], 2));
	// // => 1
	// var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
	// console.log(_.pluck(stooges, 'name'));
	// // => ["moe", "larry", "curly"]
	// console.log(_.shuffle([1, 2, 3, 4, 5, 6]));

	// // console.log(_.each([1, 2, 3], alert));
	// // => alerts each number in turn...
	// console.log(_.compact([1, "hello", undefined, 3, undefined]));
	// // => [1, "hello", 3]
	// console.log(_.map([1, 2, 3], function(num){ return num * 3; }));
	// // => [3, 6, 9]
	// console.log(_.map(["dogs", "before", "cats"], function(str){ return str.toUpperCase(); }));
	// // => ["DOGS", "BEFORE", "CATS"]
	// console.log(_.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }));
	// // => [2, 4, 6]
