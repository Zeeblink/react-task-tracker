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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
var TaskItem_1 = __importDefault(require("./TaskItem"));
var TaskList = function (_a) {
    var tasks = _a.tasks, onDelete = _a.onDelete, onToggleReminder = _a.onToggleReminder, toggleForm = _a.toggleForm, addNewText = _a.addNewText;
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "mt-8" }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "flex justify-between items-center border-b border-gray-500 p-4" }, { children: [(0, jsx_runtime_1.jsx)("h3", __assign({ className: "text-lg font-semibold mb-4 ml-3" }, { children: "Tasks" }), void 0), (0, jsx_runtime_1.jsx)("button", __assign({ className: "px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-900", onClick: toggleForm }, { children: addNewText }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)("ul", { children: tasks.map(function (task) { return ((0, jsx_runtime_1.jsx)(TaskItem_1["default"], { task: task, onDelete: onDelete, onToggleReminder: onToggleReminder }, task.id)); }) }, void 0)] }), void 0));
};
exports["default"] = TaskList;
