/*
1 meter = 3.281 feet | 1 feet = 0.304 meter
1 liter = 0.264 gallon | 1 gallon = 3.785 liter
1 kilogram = 2.204 pound | 1 pound = 0.453 kilogram
*/

const container = document.getElementsByClassName("container")
const headerEl = document.getElementById("header")
const inputEl = document.getElementById("input-text")
const convertBtn = document.getElementById("convert-btn")
const clearBtn = document.getElementById("clear-btn")
const conversions = document.getElementById("conversions")
const conversionOne = document.getElementById("conversion-one")
const conversionTwo = document.getElementById("conversion-two")
const conversionThree = document.getElementById("conversion-three")

const convertToFeet = 3.281
const convertToMeter = 0.304
const convertToGallon = 0.264
const convertToLiter = 3.785
const convertToPound = 2.204
const convertToKilogram = 0.453

convertBtn.addEventListener("click", function() {
    conversionOne.innerHTML = `${inputEl.value} meters = ${(inputEl.value * convertToFeet).toFixed(3)} feet | ${inputEl.value} feet = ${(inputEl.value * convertToMeter).toFixed(3)} meters`

    conversionTwo.innerHTML = `${inputEl.value} liters = ${(inputEl.value * convertToGallon).toFixed(3)} gallons | ${inputEl.value} gallons = ${(inputEl.value * convertToLiter).toFixed(3)} liters`

    conversionThree.innerHTML = `${inputEl.value} kilos = ${(inputEl.value * convertToPound).toFixed(3)} pounds | ${inputEl.value} pounds = ${(inputEl.value * convertToKilogram).toFixed(3)} kilos`
})

clearBtn.addEventListener("click", function() {
    inputEl.value = "0"
    conversionOne.innerHTML = `Please enter value to convert`
    conversionTwo.innerHTML = `Please enter value to convert`
    conversionThree.innerHTML = `Please enter value to convert`
})