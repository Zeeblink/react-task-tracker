"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
// src/App.tsx
var react_1 = require("react");
var TaskList_1 = __importDefault(require("../src/components/TaskList"));
var AddTaskForm_1 = __importDefault(require("../src/components/AddTaskForm"));
var App = function () {
    var _a = (0, react_1.useState)([
        { id: 1, taskText: "Write letter", day: "2024-04-13", reminder: false },
    ]), tasks = _a[0], setTasks = _a[1];
    var _b = (0, react_1.useState)(false), showForm = _b[0], setshowForm = _b[1];
    var _c = (0, react_1.useState)("Add New"), addNewText = _c[0], setAddNewText = _c[1];
    // Function to toggle add new task
    var toggleForm = function () {
        setshowForm(!showForm);
        setAddNewText(function (prevText) { return (prevText === "Add New" ? "Close" : "Add New"); });
    };
    // Function to add new task to task TaskList
    var addTask = function (task) {
        var newTask = __assign({ id: Math.floor(Math.random() * 1000) + 1 }, task);
        setTasks(__spreadArray(__spreadArray([], tasks, true), [newTask], false));
    };
    // Function to delete a task
    var deleteTask = function (id) {
        setTasks(tasks.filter(function (task) { return task.id !== id; }));
    };
    // Function to toggle reminder for a task
    var toggleReminder = function (id) {
        setTasks(tasks.map(function (task) {
            return task.id === id ? __assign(__assign({}, task), { reminder: !task.reminder }) : task;
        }));
    };
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "App" }, { children: [(0, jsx_runtime_1.jsx)("h1", __assign({ className: "text-3xl font-bold mt-4 text-center width-full" }, { children: "Task Tracker" }), void 0), showForm && (0, jsx_runtime_1.jsx)(AddTaskForm_1["default"], { addTask: addTask }, void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "bg-gray-100 h-screen" }, { children: (0, jsx_runtime_1.jsx)(TaskList_1["default"], { tasks: tasks, onDelete: deleteTask, onToggleReminder: toggleReminder, toggleForm: toggleForm, addNewText: addNewText }, void 0) }), void 0)] }), void 0));
};
exports["default"] = App;
