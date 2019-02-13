import { html, css } from "lit-element";


var borders = [
	css`g10`,
	css`g20`,
	css`g30`,
	css`g40`,
	css`g50`,
	css`g60`,
	css`g70`,
	css`g80`,
	css`g90`,
	css`g95`,
	css`g97`,
	css`g100`									
];

var border = {};
borders.map((b) => {
  border[b] = css`border-radius: var(--rd-${b});`;
});



var radiusSizes = [
	css`xxs`,
	css`xs`,
	css`sm`,
	css`md`,
	css`lg`
];

var radiusAll = {};
radiusSizes.map((size) => {
  radiusAll[size] = css`border-radius: var(--rd-${size});`;
});



var sizes = [
	css`50`,
	css`xxs`,
	css`xs`,
	css`sm`,
	css`md`,
	css`lg`,
	css`xlg`,
	css`xxlg`,
	css`xxxlg`
];

var marginAll = {};
sizes.map((size) => {
  marginAll[size] = css`margin: var(--size-${size});`;
});

var marginTop = {};
sizes.map((size) => {
  marginTop[size] = css`margin-top: var(--size-${size});`;
});

var marginBot = {};
sizes.map((size) => {
  marginBot[size] = css`margin-bottom: var(--size-${size});`;
});

var marginLeft = {};
sizes.map((size) => {
  marginLeft[size] = css`margin-left: var(--size-${size});`;
});

var marginRight = {};
sizes.map((size) => {
  marginRight[size] = css`margin-right: var(--size-${size});`;
});



var paddingAll = {};
sizes.map((size) => {
  paddingAll[size] = css`padding: var(--size-${size});`;
});

var paddingTop = {};
sizes.map((size) => {
  paddingTop[size] = css`padding-top: var(--size-${size});`;
});

var paddingBot = {};
sizes.map((size) => {
  paddingBot[size] = css`padding-bottom: var(--size-${size});`;
});

var paddingLeft = {};
sizes.map((size) => {
  paddingLeft = css`padding-left: var(--size-${size});`;
});

var paddingRight = {};
sizes.map((size) => {
  paddingRight[size] = css`padding-right: var(--size-${size});`;
});

export const inkLayoutHelpers = html`
    <style>
		    :host, :root {
					--brd-g10: { border: 1px solid var(--g10); }
					--brd-g20: { border: 1px solid var(--g20); }
					--brd-g30: { border: 1px solid var(--g30); }
					--brd-g40: { border: 1px solid var(--g40); }
					--brd-g50: { border: 1px solid var(--g50); }
					--brd-g60: { border: 1px solid var(--g60); }
					--brd-g70: { border: 1px solid var(--g70); }
					--brd-g80: { border: 1px solid var(--g80); }
					--brd-g90: { border: 1px solid var(--g90); }
					--brd-g100: { border: 1px solid var(--g100); }

					/* radius */
					--rd-xxs: 1px;
					--rd-xs: 2px;
					--rd-sm: 3px;
					--rd-md: 5px;
					--rd-lg: 8px;

					--size-xxs: 3px;
					--size-xs: 5px;
					--size-sm: 10px;
					--size-md: 15px;
					--size-lg: 25px;
					--size-xlg: 35px;
					--size-xxlg: 50px;
					--size-xxxlg: 90px;
					--size-50: 50%;
				}

				@media (min-width: 601px) {
					.hide-sm-and-above {
						display: none;
					}
				}

				@media (min-width: 961px) {
					.hide-md-and-above {
						display: none;
					}
				}

				@media (min-width: 1280px) {
					.hide-lg-and-above {
						display: none;
					}
				}




				@media (min-width: 1px) and (max-width: 600px) {
					.hide-xs-and-below {
						display: none;
					}
				}

				@media (min-width: 1px) and (max-width: 960px) {
					.hide-sm-and-below {
						display: none;
					}
				}

				@media (min-width: 1px) and (max-width: 1280px) {
					.hide-md-and-below {
						display: none;
					}
				}

				@media (min-width: 1px) and (max-width: 1600px) {
					.hide-lg-and-below {
						display: none;
					}
				}


				*[h-ctr] {
					@apply --flx-ctr;
				}

				*[hv-ctr] {
					@apply --flx-ctr-ctr;
				}



				*[fw] {
					width: 100%;
					margin: 0;
				}
		</style>
`;






const trbl = css`
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
`;

const fixedTop = css`
	${trbl}
	position: fixed;
	bottom: auto;
`;


const fixedView = css`
	${trbl}
	position: fixed;
	overflow-y: scroll;
`;

const relativeView = css`
	position: relative;
	display: block;
`;

const absoluteView = css`
	${trbl}
	position: absolute;
	overflow-y: scroll;
`;








const flx = css`
	display: flex;
`;

const flxVert = css`
	flex-direction: column;
`;

const flxGrow = css`
	flex-grow: 1;
`;

const flxCtr = css`
	align-items: center;
`;

const flxCtrJustified = css`
	justify-content: center;
`;

const flxCtrCtr = css`
	${flx}
	${flxCtr}
	${flxCtrJustified}
`;

const inFlx = css`
	display: inline-flex;
`;



export {marginAll, marginTop, marginBot, marginLeft, marginRight} 
export {paddingAll, paddingTop, paddingBot, paddingLeft, paddingRight}
export {radiusAll}
export {border}

export {trbl, fixedTop, fixedView, relativeView, absoluteView};
export {flx, flxVert, flxGrow, flxCtr, flxCtrJustified, flxCtrCtr, inFlx};
