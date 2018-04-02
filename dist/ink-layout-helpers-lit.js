import { html } from 'lit-html/lib/lit-extended.js';

var radiusSizes = [
	'xxs',
  'xs',
	'sm',
	'md',
	'lg'
];

var radiusAll = {};
radiusSizes.map((size) => {
  radiusAll[size] = `border-radius: var(--rd-${size});`;
});



var sizes = [
  '50',
  'xxs',
  'xs',
  'sm',
  'md',
  'lg',
  'xlg',
  'xxlg',
  'xxxlg'
];

var marginAll = {};
sizes.map((size) => {
  marginAll[size] = `margin: var(--size-${size});`;
});

var marginTop = {};
sizes.map((size) => {
  marginTop[size] = `margin-top: var(--size-${size});`;
});

var marginBot = {};
sizes.map((size) => {
  marginBot[size] = `margin-bottom: var(--size-${size});`;
});

var marginLeft = {};
sizes.map((size) => {
  marginLeft[size] = `margin-left: var(--size-${size});`;
});

var marginRight = {};
sizes.map((size) => {
  marginRight[size] = `margin-right: var(--size-${size});`;
});



var paddingAll = {};
sizes.map((size) => {
  paddingAll[size] = `padding: var(--size-${size});`;
});

var paddingTop = {};
sizes.map((size) => {
  paddingTop[size] = `padding-top: var(--size-${size});`;
});

var paddingBot = {};
sizes.map((size) => {
  paddingBot[size] = `padding-bottom: var(--size-${size});`;
});

var paddingLeft = {};
sizes.map((size) => {
  paddingLeft = `padding-left: var(--size-${size});`;
});

var paddingRight = {};
sizes.map((size) => {
  paddingRight[size] = `padding-right: var(--size-${size});`;
});

export const inkLayoutHelpers = html`
    <style>
		    :host {
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






const trbl = `
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
`;

const fixedTop = `
	${trbl}
	position: fixed;
	bottom: auto;
`;


const fixedView = `
	${trbl}
	position: fixed;
	overflow-y: scroll;
`;

const relativeView = `
	position: relative;
	display: block;
`;

const absoluteView = `
	${trbl}
	position: absolute;
	overflow-y: scroll;
`;








const flx = `
	display: flex;
`;

const flxVert = `
	flex-direction: column;
`;

const flxGrow = `
	flex-grow: 1;
`;

const flxCtr = `
	align-items: center;
`;

const flxCtrJustified = `
	justify-content: center;
`;

const flxCtrCtr = `
	${flx}
	${flxCtr}
	${flxCtrJustified}
`;

const inFlx = `
	display: inline-flex;
`;



export {marginAll, marginTop, marginBot, marginLeft, marginRight} 
export {paddingAll, paddingTop, paddingBot, paddingLeft, paddingRight}
export {radiusAll}

export {trbl, fixedTop, fixedView, relativeView, absoluteView};
export {flx, flxVert, flxGrow, flxCtr, flxCtrJustified, flxCtrCtr, inFlx};
