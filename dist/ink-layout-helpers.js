// import { html } from 'lit-html/lib/lit-extended.js';
import { html } from '@polymer/polymer/polymer-element.js';

var radiusSizes = [
	'xxs',
  'xs',
	'sm',
	'md',
	'lg'
];

var radiusAll = html``;
radiusSizes.map((size) => {
  radiusAll = radiusAll + `
    --rd-all-${size}: { border-radius: var(--rd-${size}); }
  `;
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

var marginAll = html``;
sizes.map((size) => {
  marginAll = marginAll + `
    --m-all-${size}: { margin: var(--size-${size}); }
  `;
});

var marginTop = html``;
sizes.map((size) => {
  marginTop = marginTop + `
    --m-top-${size}: { margin-top: var(--size-${size}); }
  `;
});

var marginBot = html``;
sizes.map((size) => {
  marginBot = marginBot + `
    --m-bot-${size}: { margin-bottom: var(--size-${size}); }
  `;
});

var marginLeft = html``;
sizes.map((size) => {
  marginLeft = marginLeft + `
    --m-left-${size}: { margin-left: var(--size-${size}); }
  `;
});

var marginRight = html``;
sizes.map((size) => {
  marginRight = marginRight + `
    --m-right-${size}: { margin-right: var(--size-${size}); }
  `;
});



var paddingAll = html``;
sizes.map((size) => {
  paddingAll = paddingAll + `
    --pd-all-${size}: { padding: var(--size-${size}); }
  `;
});

var paddingTop = html``;
sizes.map((size) => {
  paddingTop = paddingTop + `
    --pd-top-${size}: { padding-top: var(--size-${size}); }
  `;
});

var paddingBot = html``;
sizes.map((size) => {
  paddingBot = paddingBot + `
    --pd-bottom-${size}: { padding-bottom: var(--size-${size}); }
  `;
});

var paddingLeft = html``;
sizes.map((size) => {
  paddingLeft = paddingLeft + `
    --pd-left-${size}: { padding-left: var(--size-${size}); }
  `;
});

var paddingRight = html``;
sizes.map((size) => {
  paddingRight = paddingRight + `
    --pd-right-${size}: { padding-right: var(--size-${size}); }
  `;
});

export const inkLayoutHelpers = html`
    <style>
		    :host {
					--fixed-top: {
						position: fixed;
						@apply --mix-trbl;
						bottom: auto;
					};

					--mix-trbl: {
						top: 0;
						bottom: 0;
						left: 0;
						right: 0;
					};

					--mix-fixed-view: {
						position: fixed;
						@apply --mix-trbl;
						overflow-y: scroll;
					};

					--mix-relative-view: {
						position: relative;
						display: block;
					};

					--mix-absolute-view: {
						position: absolute;
						overflow-y: scroll;
						@apply --mix-trbl;
					};

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



					--mw100: {max-width: 100px;}
					--mw200: {max-width: 200px;}
					--mw300: {max-width: 300px;}
					--mw400: {max-width: 400px;}
					--mw500: {max-width: 500px;}
					--mw600: {max-width: 600px;}
					--mw700: {max-width: 700px;}
					--mw800: {max-width: 800px;}
					--mw900: {max-width: 900px;}
					--mw1000: {max-width: 1000px;}



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


					--flx: {
						display: flex;
					};

					--flx-vert: {
						flex-direction: column;
					};

					--flx-grow: {
						flex-grow: 1;
					}

					--flx-ctr: {
						align-items: center;
					};

					--flx-ctr-justified: {
						justify-content: center;
					};

					--flx-ctr-ctr: {
						@apply --flx;
						@apply --flx-ctr;
						@apply --flx-ctr-justified;
					};

					--in-flx: {
						display: inline-flex;
					}

					${marginAll}
          ${marginTop}
          ${marginBot}
          ${marginLeft}
          ${marginRight}

          ${paddingAll}
          ${paddingTop}
          ${paddingBot}
          ${paddingLeft}
          ${paddingRight}

          ${radiusAll}


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



				*[mw100] {max-width: 100px;}
				*[mw200] {max-width: 200px;}
				*[mw300] {max-width: 300px;}
				*[mw400] {max-width: 400px;}
				*[mw500] {max-width: 500px;}
				*[mw600] {max-width: 600px;}
				*[mw700] {max-width: 700px;}
				*[mw800] {max-width: 800px;}
				*[mw900] {max-width: 900px;}
				*[mw1000] {max-width: 1000px;}
		</style>
`;



// View helpers

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





var paddingAllTest = {};
sizes.map((size) => {
  paddingAllTest[size] = `
		padding: var(--size-${size});
  `;
});


export {paddingAllTest};
export {trbl, fixedTop, fixedView, relativeView, absoluteView};
export {flx, flxVert, flxGrow, flxCtr, flxCtrJustified, flxCtrCtr, inFlx};
