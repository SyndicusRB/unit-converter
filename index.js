/*
1 meter = 3.281 feet | 1 feet = 0.304 meter
1 liter = 0.264 gallon | 1 gallon = 3.785 liter
1 kilogram = 2.204 pound | 1 pound = 0.453 kilogram
*/

const container = document.getElementsByClassName("container")
const headerEl = document.getElementById("header")
const inputEl = document.getElementById("input-text")
const convertBtn = document.getElementById("convert-btn")
const conversions = document.getElementById("conversions")
const conversionOne = document.getElementById("conversion-one")
const conversionTwo = document.getElementById("conversion-two")
const conversionThree = document.getElementById("conversion-three")

headerEl.innerHTML += `<h1 id="header-text">Metric/Imperial Unit Conversion</h1>`
headerEl.innerHTML += `<input type="text" id="input-text"></input>`
headerEl.innerHTML += `<button id="convert-btn">Convert</button>`

conversionOne.innerHTML += `<h3>Length (Meter/Feet)</h3>
                            <p>20 meters = 65.616 feet | 20 feet = 6.096 meters</p>`
