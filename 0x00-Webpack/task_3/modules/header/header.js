import "./header.css";
const $ = require("jquery");

$("body").append("<header></header>");
$("header").append('<div id="logo"></div>', "<h1>Holberton Dashboard</h1>");

console.log("Init header");
