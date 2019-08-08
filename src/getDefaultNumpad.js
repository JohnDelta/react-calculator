export default function getDefaultNumpad() {
	let numpad =
		[
			{
				"id" : "numpadPlus",
				"value" : "+",
				"symbol" : "+"
			},
			{
				"id" : "numpadMinus",
				"value" : "-",
				"symbol" : "-"
			},
			{
				"id" : "numpadMultiply",
				"value" : "*",
				"symbol" : "x"
			},
			{
				"id" : "numpadDivide",
				"value" : "/",
				"symbol" : "/"
			},
			{
				"id" : "numpadDot",
				"value" : ".",
				"symbol" : "."
			},
			{
				"id" : "numpadEval",
				"value" : "=",
				"symbol" : "="
			},
			{
				"id" : "numpadLeftArrow",
				"value" : "leftArrow",
				"symbol" : "<-"
			},
			{
				"id" : "numpadRightArrow",
				"value" : "rightArrow",
				"symbol" : "->"
			}
		];
	for(let i = 0; i < 10; i++) {
		numpad.push(
			{
				"id" : "numpad"+i,
				"value" : i,
				"symbol" : i
			}
		);
	}
	return numpad;
}