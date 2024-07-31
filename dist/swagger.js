"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const swagger_autogen_1 = __importDefault(require("swagger-autogen"));
const port = 3000;
const doc = {
    info: {
        title: 'Farm Storage',
        description: 'This is academic software that simulates farm inventory management'
    },
    host: `localhost: ${port}`
};
const outputFile = '../swagger-output.json';
const endpointsFiles = [path_1.default.join(__dirname, '../dist/models/item/routes.js')];
(0, swagger_autogen_1.default)(outputFile, endpointsFiles, doc);
/* NOTE: If you are using the express Router, you must pass in the 'routes' only the
root file where the route starts, such as index.js, app.js, routes.js, etc ... */
