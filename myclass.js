"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myClass = /** @class */ (function () {
    function myClass() {
        this.myArray = [];
    }
    myClass.prototype.addTask = function (task) {
        var count = this.myArray.push(task);
        console.log("Item " + task + " added to array.");
        return count;
    };
    myClass.prototype.listAllTasks = function () {
        for (var _i = 0, _a = this.myArray; _i < _a.length; _i++) {
            var item = _a[_i];
            console.log(item);
        }
    };
    myClass.prototype.deleteTask = function (task) {
        var index = this.myArray.indexOf(task);
        if (index > -1) {
            this.myArray.splice(index, 1);
            console.log("We have deleted " + task);
        }
        return this.myArray.length;
    };
    return myClass;
}());
var newClass = new myClass();
var x = newClass.addTask("Hello");
console.log(x);
