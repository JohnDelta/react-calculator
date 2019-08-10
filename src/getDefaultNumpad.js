import React from 'react';

export default function getDefaultNumpad() {
	let numpad =
		[
			{
				"id" : "numpadPlus",
				"value" : "+",
				"symbol" : <i className="fa fa-plus" />,
				"class" : "operator"
			},
			{
				"id" : "numpadMinus",
				"value" : "-",
				"symbol" : <i className="fa fa-minus" />,
				"class" : "operator"
			},
			{
				"id" : "numpadMultiply",
				"value" : "*",
				"symbol" : <i className="fa fa-times" />,
				"class" : "operator"
			},
			{
				"id" : "numpadDivide",
				"value" : "/",
				"symbol" : <i className="fa fa-divide" />,
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
				"symbol" : <i className="fa fa-arrow-left" />,
				"class" : "operator"
			},
			{
				"id" : "numpadRightArrow",
				"value" : "rightArrow",
				"symbol" : <i className="fa fa-arrow-right" />,
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