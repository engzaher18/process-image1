"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-dupe-else-if */
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var process_1 = __importDefault(require("../utilities/process"));
var rout = express_1.default.Router();
rout.get('/file', function (req, res) {
    var _a = req.query, fileName = _a.fileName, height = _a.height, width = _a.width;
    var newPath = path_1.default.join(__dirname, '..', '..', 'resized_images', "".concat(height, "_").concat(width).concat(fileName));
    var oldpath = path_1.default.join(__dirname, '..', '..', 'images', "".concat(fileName));
    if (!fileName) {
        res.send('you should enter your image name');
    }
    else if (fs_1.default.existsSync(oldpath) == false) {
        res.send('your image not found');
    }
    else if (fileName.split('.')[1] != 'jpg') {
        res.send('your image extension must be .jpg ');
    }
    else if (!height && !width) {
        res.send('please enter all dimensions of your image');
    }
    else if (!height || !width) {
        res.send('please enter the other dimension of your image');
    }
    else if (width <= 0 && height <= 0) {
        res.send('please enter a number of dimension more than zero ');
    }
    else if (height <= 0) {
        res.send('please enter a number of height more than zero');
    }
    else if (width <= 0) {
        res.send('please enter a number of width more than zero ');
    }
    else if (isNaN(width) && (isNaN(height))) {
        res.send('please enter a number of dimensions not string');
    }
    else if (isNaN(height)) {
        res.send('please enter a number of height not string');
    }
    else if (isNaN(width)) {
        res.send('please enter a number of width not string');
    }
    else {
        if (fs_1.default.existsSync(newPath)) {
            res.sendFile(newPath);
        }
        else {
            (0, process_1.default)(width, height, newPath, oldpath)
                .then(function () {
                res.sendFile(newPath);
            })
                .catch(function (err) {
                console.log(err);
                res.send("isn't valid");
            });
        }
    }
});
exports.default = rout;
