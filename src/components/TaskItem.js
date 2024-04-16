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
var TaskItem = function (_a) {
    var task = _a.task, onDelete = _a.onDelete, onToggleReminder = _a.onToggleReminder;
    return ((0, jsx_runtime_1.jsxs)("li", __assign({ className: "flex justify-between items-center border-b border-gray-200 p-4" }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: "flex items-center" }, { children: [(0, jsx_runtime_1.jsx)("input", { type: "checkbox", checked: task.reminder, onChange: function () { return onToggleReminder(task.id); }, className: "mr-4" }, void 0), (0, jsx_runtime_1.jsxs)("div", __assign({ className: task.reminder ? "line-through" : "" }, { children: [(0, jsx_runtime_1.jsx)("div", { children: task.taskText }, void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: "text-xs" }, { children: task.day }), void 0)] }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)("button", __assign({ onClick: function () { return onDelete(task.id); }, className: "px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600" }, { children: "Delete" }), void 0)] }), void 0));
};
exports["default"] = TaskItem;
