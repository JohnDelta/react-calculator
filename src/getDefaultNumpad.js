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
				"symbol" : "\u00d7",
				"class" : "operator"
			},
			{
				"id" : "numpadDivide",
				"value" : "/",
				"symbol" : "\u00f7",
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
				"class" : "bottom-line"
			},
			{
				"id" : "numpadLeftArrow",
				"value" : "leftArrow",
				"symbol" : <i className="fa fa-arrow-left" />,
				"class" : "top-line"
			},
			{
				"id" : "numpadRightArrow",
				"value" : "rightArrow",
				"symbol" : <i className="fa fa-arrow-right" />,
				"class" : "top-line"
			},
			{
				"id" : "numpadReset",
				"value" : "reset",
				"symbol" : "c",
				"class" : "bottom-line"
			},
			{
				"id" : "numpadLeftBracket",
				"value" : "(",
				"symbol" : "(",
				"class" : "top-line"
			},
			{
				"id" : "numpadRightBracket",
				"value" : ")",
				"symbol" : ")",
				"class" : "top-line"
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