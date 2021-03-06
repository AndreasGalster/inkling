import { html } from 'lit-html/lib/lit-extended.js';

export const inkReset = html`
  <style>
		/* Change the default font family in all browsers */
		html {
		  font-family: sans-serif;
		}

		/* Remove the margin in all browsers */
		body {
		  margin: 0;
		}

		/* Remove the outline on focused links when they are also active or hovered in all browsers */
		a:active,
		a:hover {
		  outline-width: 0;
		}

		/* Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari */
		abbr[title] {
		  text-decoration: underline;
		  text-decoration: underline dotted;
		}

		/* Add the correct font weight in Chrome, Edge, and Safari */
		b, strong {
		  font-weight: bolder;
		}

		/* Add the correct font size in all browsers */

		small {
		  font-size: 80%;
		}

		/* Prevent sub and sup elements from affecting the line height in all browsers */

		sub, sup {
		  font-size: 75%;
		  line-height: 0;
		  position: relative;
		  vertical-align: baseline;
		}

		sub {
		  bottom: -0.25em;
		}

		sup {
		  top: -0.5em;
		}

		/* 1. Correct the inheritance and scaling of font size in all browsers.*/
		/* 2. Correct the odd em font sizing in all browsers.*/
		code, kbd, pre, samp {
		  font-family: monospace, monospace; /*1*/
		  font-size: 1em; /*2*/
		}

		h1, h2, h3, h4, h5, h6, p {
			margin: 0;
		}
	</style>
`;
