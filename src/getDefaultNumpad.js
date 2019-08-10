import React from 'react';

export default function getDefaultNumpad() {
	let numpad =
		[
			{
				"id" : "numpadPlus",
				"value" : "+",
				"symbol" : "+",
				"class" : "operator"
			},
			{
				"id" : "numpadMinus",
				"value" : "-",
				"symbol" : "-",
				"class" : "operator"
			},
			{
				"id" : "numpadMultiply",
				"value" : "*",
				"symbol" : "*",
				"class" : "operator"
			},
			{
				"id" : "numpadDivide",
				"value" : "/",
				"symbol" : "/",
				"class" : "operator"
			},
			{
				"id" : "numpadDot",
				"value" : ".",
				"symbol" : ".",
				"class" : "operator"
			},
			{
				"id" : "numpadEval",
				"value" : "=",
				"symbol" : "=",
				"class" : "operator"
			},
			{
				"id" : "numpadLeftArrow",
				"value" : "leftArrow",
				"symbol" : "<-",
				"class" : "operator"
			},
			{
				"id" : "numpadRightArrow",
				"value" : "rightArrow",
				"symbol" : "->",
				"class" : "operator"
			},
			{
				"id" : "numpadReset",
				"value" : "reset",
				"symbol" : "reset",
				"class" : "operator"
			}
		];
	for(let i = 0; i < 10; i++) {
		numpad.push(
			{
				"id" : "numpad"+i,
				"value" : i,
				"symbol" : i,
				"class" : "number"
			}
		);
	}
	return numpad;
}