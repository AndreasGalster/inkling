import { html } from '@polymer/polymer/polymer-element.js';
import {htmlLiteral} from '@polymer/polymer/lib/utils/html-tag';

var number = [
  htmlLiteral`1`,
  htmlLiteral`2`,
  htmlLiteral`3`,
  htmlLiteral`4`,
  htmlLiteral`5`,
  htmlLiteral`6`,
  htmlLiteral`7`,
  htmlLiteral`8`,
  htmlLiteral`9`,
  htmlLiteral`10`,
  htmlLiteral`11`,
  htmlLiteral`12`          
];


var xs = htmlLiteral``;
number.map((number) => {
  xs = htmlLiteral`${xs}
    *[c-xs-${number}] {
      flex: var(--c-${number}-o);
    }
  `;
});

var xsGapInside = htmlLiteral``;
number.map((number) => {
  xsGapInside = htmlLiteral`${xsGapInside}
    *[ink-gap-i] *[c-xs-${number}] {
      flex: var(--c-${number}-i);
    }
  `;
});




var sm = htmlLiteral``;
number.map((number) => {
  sm = htmlLiteral`${sm}
    *[c-sm-${number}] {
      flex: var(--c-${number}-o);
    }
  `;
});

var smGapInside = htmlLiteral``;
number.map((number) => {
  smGapInside = htmlLiteral`${smGapInside}
    *[ink-gap-i] *[c-sm-${number}] {
      flex: var(--c-${number}-i);
    }
  `;
});


var md = htmlLiteral``;
number.map((number) => {
  md = htmlLiteral`${md}
    *[c-md-${number}] {
      flex: var(--c-${number}-o);
    }
  `;
});

var mdGapInside = htmlLiteral``;
number.map((number) => {
  mdGapInside = htmlLiteral`${mdGapInside}
    *[ink-gap-i] *[c-md-${number}] {
      flex: var(--c-${number}-i);
    }
  `;
});


var lg = htmlLiteral``;
number.map((number) => {
  lg = htmlLiteral`${lg}
    *[c-lg-${number}] {
      flex: var(--c-${number}-o);
    }
  `;
});

var lgGapInside = htmlLiteral``;
number.map((number) => {
  lgGapInside = htmlLiteral`${lgGapInside}
    *[ink-gap-i] *[c-lg-${number}] {
      flex: var(--c-${number}-i);
    }
  `;
});


var xlg = htmlLiteral``;
number.map((number) => {
  xlg = htmlLiteral`${xlg}
    *[c-xlg-${number}] {
      flex: var(--c-${number}-o);
    }
  `;
});




var xlgGapInside = htmlLiteral``;
number.map((number) => {
  xlgGapInside = htmlLiteral`${xlgGapInside}
    *[ink-gap-i] *[c-xlg-${number}] {
      flex: var(--c-${number}-i);
    }
  `;
});


export const inkFlexGrid = htmlLiteral`
  <style>
	    *[ink-grid], *[ink-grid-fw] {
	      display: flex;
	      flex-wrap: wrap;
	    }

			*[ink-grid-fw] {
				width:100%;
			}

			*[ink-box], ink-box {
				max-width: 700px;
				margin: 0 auto;
				width: 100%;
				display: block;
				box-sizing: border-box;
			}


			*[ink-grid] > *, *[ink-grid-fw] > * {
				box-sizing: border-box;
				overflow-x: overlay;
			}

	    *[ink-gap-i] > * {
	      margin: 0 var(--gap);
	    }

	    *[ink-gap-o] {
	      margin: 0 var(--gap);
	    }

			*[c] {
				flex: auto;
			}

			*[o-sm-2] {
				margin-left: calc(var(--off-2));
			}

			*[o-sm-3] {
				margin-left: calc(var(--off-3));
			}

			*[o-sm-4] {
				margin-left: calc(var(--off-4));
			}

			*[o-sm-6] {
				margin-left: calc(var(--off-6));
			}

			*[o-sm-12] {
				margin-left: calc(var(--off-12));
			}


	    /*--xs*/
	    @media (min-width: 1px) {
        ${xs}
        ${xsGapInside}
	    }

	    /*--sm*/
	    @media (min-width: 601px) {
        ${sm}
        ${smGapInside}
	    }

	    /*--md*/
	    @media (min-width: 961px) {
        ${md}
        ${mdGapInside}
	    }

	    /*--lg*/
	    @media (min-width: 1281px) {
        ${lg}
        ${lgGapInside}
	    }

	    /*--xlg*/
	    @media (min-width: 1601px) {
        ${xlg}
        ${xlgGapInside}
	    }
	</style>
`;
