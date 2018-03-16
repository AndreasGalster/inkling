import { html } from '@polymer/polymer/polymer-element.js';


var xs = html``;
for (var i = 1; i < 13; i++) {
  xs = xs + `
    *[c-xs-${i}] {
      flex: var(--c-${i}-o);
    }
  `;
}

var xsGapInside = html``;
for (var i = 1; i < 13; i++) {
  xsGapInside = xsGapInside + `
    *[ink-gap-i] *[c-xs-${i}] {
      flex: var(--c-${i}-i);
    }
  `;
}




var sm = html``;
for (var i = 1; i < 13; i++) {
  sm = sm + `
    *[c-sm-${i}] {
      flex: var(--c-${i}-o);
    }
  `;
}

var smGapInside = html``;
for (var i = 1; i < 13; i++) {
  smGapInside = smGapInside + `
    *[ink-gap-i] *[c-sm-${i}] {
      flex: var(--c-${i}-i);
    }
  `;
}


var md = html``;
for (var i = 1; i < 13; i++) {
  md = md + `
    *[c-md-${i}] {
      flex: var(--c-${i}-o);
    }
  `;
}

var mdGapInside = html``;
for (var i = 1; i < 13; i++) {
  mdGapInside = mdGapInside + `
    *[ink-gap-i] *[c-md-${i}] {
      flex: var(--c-${i}-i);
    }
  `;
}


var lg = html``;
for (var i = 1; i < 13; i++) {
  lg = lg + `
    *[c-lg-${i}] {
      flex: var(--c-${i}-o);
    }
  `;
}

var lgGapInside = html``;
for (var i = 1; i < 13; i++) {
  lgGapInside = lgGapInside + `
    *[ink-gap-i] *[c-lg-${i}] {
      flex: var(--c-${i}-i);
    }
  `;
}


var xlg = html``;
for (var i = 1; i < 13; i++) {
  xlg = xlg + `
    *[c-xlg-${i}] {
      flex: var(--c-${i}-o);
    }
  `;
}

var xlgGapInside = html``;
for (var i = 1; i < 13; i++) {
  xlgGapInside = xlgGapInside + `
    *[ink-gap-i] *[c-xlg-${i}] {
      flex: var(--c-${i}-i);
    }
  `;
}


export const inkFlexGrid = html`
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
