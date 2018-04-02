//				ink-block-quote {
//					quotes: '\201C' '\201D' '\2018' '\2019';
//				}

import { html } from 'lit-html/lib/lit-extended.js';

export const inkTypography = html`
<style>
	ink-hero1, ink-hero2, ink-hero3, ink-hero4,
	ink-head1, ink-head2, ink-head3, ink-head4, ink-head5, ink-head6,
	ink-copy1, ink-copy2, ink-copy3, ink-copy4, ink-copy5, ink-copy6,
	ink-micro1, ink-micro2,
	ink-quote {
		display: block;
		overflow-wrap: break-word;
		word-wrap: break-word;
		-webkit-hyphens: auto;
		-ms-hyphens: auto;
		hyphens: auto;
	}

	ink-inline-quote {
		quotes: '«' '»';
	}


	ink-hero1 {
		font-size: 				calc(var(--font-size1) * var(--font-xlg));
		letter-spacing: 	calc(var(--font-size1) * var(--font-xlg) * -0.02);
		line-height:			calc(var(--font-size1) * var(--font-xlg) * 1.4);
		padding: 					calc(var(--font-size1) * var(--font-xlg) * 0.5) 0;
	}

	ink-hero2 {
		font-size: 				calc(var(--font-size2) * var(--font-xlg));
		letter-spacing: 	calc(var(--font-size1) * var(--font-xlg) * -0.01);
		line-height:			calc(var(--font-size2) * var(--font-xlg) * 1.4);
		padding: 					calc(var(--font-size2) * var(--font-xlg) * 0.5) 0;
	}

	ink-hero3 {
		font-size: 				calc(var(--font-size3) * var(--font-xlg));
		letter-spacing: 	calc(var(--font-size3) * var(--font-xlg) * 0.005);
		line-height:			calc(var(--font-size3) * var(--font-xlg) * 1.4);
		padding: 					calc(var(--font-size3) * var(--font-xlg) * 0.5) 0;
	}

	ink-hero4 {
		font-size: 				calc(var(--font-size4) * var(--font-xlg));
		letter-spacing: 	calc(var(--font-size4) * var(--font-xlg) * 0.005);
		line-height:			calc(var(--font-size4) * var(--font-xlg) * 1.4);
		padding: 					calc(var(--font-size4) * var(--font-xlg) * 0.5) 0;
	}

	ink-head1 { font-size: calc(var(--font-size1) * var(--font-lg)); }
	ink-head2 { font-size: calc(var(--font-size2) * var(--font-lg)); }
	ink-head3 { font-size: calc(var(--font-size3) * var(--font-lg)); }
	ink-head4 { font-size: calc(var(--font-size4) * var(--font-lg)); }
	ink-head5 { font-size: calc(var(--font-size5) * var(--font-lg)); }
	ink-head6 { font-size: calc(var(--font-size6) * var(--font-lg)); }

	ink-copy1 { font-size: calc(var(--font-size1) * var(--font-md)); }
	ink-copy2 { font-size: calc(var(--font-size2) * var(--font-md)); }
	ink-copy3 { font-size: calc(var(--font-size3) * var(--font-md)); }
	ink-copy4 { font-size: calc(var(--font-size4) * var(--font-md)); }



	ink-micro1 {
		font-size: 				calc(var(--font-size1) * var(--font-sm));
		letter-spacing: 	calc(var(--font-size1) * var(--font-sm) * 0.1);
		line-height:			calc(var(--font-size1) * var(--font-sm) * 1.4);
		padding: 					calc(var(--font-size1) * var(--font-sm) * 0.5) 0;
	}

	ink-micro2 {
		font-size: 				calc(var(--font-size2) * var(--font-sm));
		letter-spacing: 	calc(var(--font-size2) * var(--font-sm) * 0.2);
		line-height:			calc(var(--font-size2) * var(--font-sm) * 1.4);
		padding: 					calc(var(--font-size2) * var(--font-sm) * 0.6) 0;
	}



	strong {
		font-weight: bold;
	}



	/* columns */

	/*ink-cols > * {*/
	ink-cols {
		-moz-column-width: 300px;
		column-width: 300px;

		-moz-column-count: 1;
		column-count: 1;

		-moz-column-fill: balance;
		column-fill: balance;

		column-gap: var(--c-gap);
		/*column-rule: 1px dashed #CCC;*/

		display: block;
	}

	[c2] {
		column-count: 2;
	}

	[c3] {
		column-count: 3;
	}

	[c4] {
		column-count: 4;
	}

	[c5] {
		column-count: 5;
	}

	[c6] {
		column-count: 6;
	}


	ink-cols > *[ink-span] {
		column-span: all;
	}




	/*column-count: 3;*/
	/*.multi-column.width {
		column-width: 175px;
	}*/

	/*.multi-column.three-columns {
		columns: 3 350px;
	}*/




	a {
		color: inherit;
		font-weight: 600;
		text-decoration: none;
	}


	ink-hero1, ink-hero2, ink-hero3, ink-hero4 {
		font-family: 'Source Sans Pro', sans-serif;
		font-weight: 200;
	}



	*[ink-txt-l] { text-align: left; }
	*[ink-txt-r] { text-align: right; }
	*[ink-txt-c] { text-align: center; }
	*[ink-txt-j] { text-align: justify; }


	*[ink-hide] { display: none; }
	*[ink-show] { display: block; }
	*[ink-vis] { visibility: visible; }
	*[ink-invis] { visibility: hidden; }

	*[ink-accent] {
		font-family: 'Norican', cursive;
	}

	*[white] {
		color: white;
	}
</style>
`;






const $_inkLinks = document.createElement('div');
$_inkLinks.setAttribute('style', 'display: none;');

$_inkLinks.innerHTML = `<dom-module id='ink-links'>
  <template>
    <style>
				/*a {
				display: inline-block;
				border-bottom: 2px solid var(--primary);
				}*/

				/*a:after {
				content: '';
				display: block;
				margin: auto;
				height: 1px;
				width: 0;
				background: var(--secondary);
				transition: width .2s ease, background-color .2s ease;
			}

			a:hover:after {
			width: 100%;
			background: var(--primary);
			}*/

		</style>
  </template>
</dom-module>`;

document.head.appendChild($_inkLinks);
