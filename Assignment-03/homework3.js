"use strict";
/*globals _*/
/*jshint browser:true*/
/*jshint unused:false*/
var exercise1 = function (numbers) {

    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
    return sum / numbers.length;

};

var exercise2 = function (num) {
    var large = num[0];
    for (var i = 0; i < num.length; i++) {
        if (num[i] > large) {
            large = num[i];
        }
    }
    return large;
};

var exercise3 = function (num) {

    for (var i = 0; i < num.length; i++) {
        if (num[i] % 2 === 0) {
            return true;

        }

    }
    return false;
};

var exercise4 = function (num) {

    for (var i = 0; i < num.length; i++) {
        if (num[i] % 2 !== 0) {
            return false;

        }
    }
    return true;

};

var arrayContains = function (str1, str2) {
    if (str1.indexOf(str2) > -1) {
        return true;
    }
    else {
        return false;
    }


};

var arrayContainsTwo = function (str1, str2) {
    var count = 0;
    for (var i = 0; i < str1.length; i++) {
        if (str1[i] === str2) {
            count++;
        }
    }
    if (count >= 2) {
        return true;
    }
    else {
        return false;
    }
};

var arrayContainsNTimes = function (str1, str2, num) {
    var count = 0;
    for (var i = 0; i < str1.length; i++) {
        if (str1[i] === str2) {
            count++;
        }
    }
    if (count <= num) {
        return true;
    }
    else {
        return false;
    }
};

var atleast1 = function (number) {
    var at = _.some(number, function (num) { return num % 2 === 0; });
    return at;
};


var max = function (num) {
    return _.max(num);
};

var all_even = function (number) {
    var all = _.every(number, function (num) { return num % 2 === 0; });
    return all;
};


var click1 = function (name, input) {
    var array = document.getElementById(input).value;
    var result = [];
    result = array.split(",");

    var len = result.length;
    for (var i = 0; i < len; i++) {
        result[i] = parseInt(result[i], 10);
    }

    if (name === "exercise1") {

        document.getElementById("answer").innerHTML = exercise1(result).toString();
    }
    else if (name === "exercise2") {
        document.getElementById("answer1").innerHTML = exercise2(result).toString();
    }
    else if (name === "exercise3") {
        document.getElementById("answer2").innerHTML = exercise3(result).toString();
    }
    else if (name === "exercise4") {
        document.getElementById("answer3").innerHTML = exercise4(result).toString();
    }
    else if (name === "max") {
        document.getElementById("answer8").innerHTML = max(result).toString();
    }

    else if (name === "atleast1") {
        document.getElementById("answer9").innerHTML = atleast1(result).toString();
    }
    else if (name === "all_even") {
        document.getElementById("answer10").innerHTML = all_even(result).toString();
    }

};

var click2 = function (name, input1, input2) {

    var array = document.getElementById(input1).value;
    var array1 = document.getElementById(input2).value;
    var result = [];
    result = array.split(",");

    if (name === "arrayContains") {
        document.getElementById("answer4").innerHTML = arrayContains(result, array1).toString();
    }
    else if (name === "arrayContainsTwo") {
        document.getElementById("answer5").innerHTML = arrayContainsTwo(result, array1).toString();
    }
};

var click3 = function (name, input1, input2, input3) {
    var array = document.getElementById(input1).value;
    var array1 = document.getElementById(input2).value;
    var array2 = document.getElementById(input3).value;

    var result = [];
    result = array.split(",");

    if (name === "arrayContainsNTimes") {
        document.getElementById("answer6").innerHTML = arrayContainsNTimes(result, array1, array2).toString();
    }
};
