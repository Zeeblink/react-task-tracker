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
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var AddTaskForm = function (_a) {
    var addTask = _a.addTask;
    var _b = (0, react_1.useState)(""), taskText = _b[0], setTaskText = _b[1];
    var _c = (0, react_1.useState)(""), day = _c[0], setDay = _c[1];
    var _d = (0, react_1.useState)(false), reminder = _d[0], setReminder = _d[1];
    var handleSubmit = function (e) {
        e.preventDefault();
        if (!taskText || !day)
            return;
        addTask({ taskText: taskText, day: day, reminder: reminder });
        setTaskText("");
        setDay("");
        setReminder(false);
    };
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "max-w-xs mx-auto mt-8" }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "mb-4" }, { children: [(0, jsx_runtime_1.jsx)("label", __assign({ htmlFor: "task", className: "block text-sm font-medium text-gray-700" }, { children: "Task" }), void 0), (0, jsx_runtime_1.jsx)("input", { type: "text", id: "task", className: "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md", placeholder: "Enter Task", value: taskText, onChange: function (e) { return setTaskText(e.target.value); } }, void 0)] }), void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "mb-4" }, { children: [(0, jsx_runtime_1.jsx)("label", __assign({ htmlFor: "day", className: "block text-sm font-medium text-gray-700" }, { children: "Set day" }), void 0), (0, jsx_runtime_1.jsx)("input", { type: "text", id: "day", className: "mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md", placeholder: "Set Day", value: day, onChange: function (e) { return setDay(e.target.value); } }, void 0)] }), void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ className: "flex items-center" }, { children: [(0, jsx_runtime_1.jsx)("input", { id: "reminder", type: "checkbox", className: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded", checked: reminder, onChange: function (e) { return setReminder(e.target.checked); } }, void 0), (0, jsx_runtime_1.jsx)("label", __assign({ htmlFor: "reminder", className: "ml-2 block text-sm text-gray-900" }, { children: "Reminder" }), void 0), (0, jsx_runtime_1.jsx)("button", __assign({ className: "px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-900 ml-32", onClick: handleSubmit }, { children: "Add Task" }), void 0)] }), void 0)] }), void 0));
};
exports["default"] = AddTaskForm;
