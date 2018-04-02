const $_inkDefaultFonts = document.createElement('div');
$_inkDefaultFonts.setAttribute('style', 'display: none;');

$_inkDefaultFonts.innerHTML = `
<link rel='stylesheet' type='text/css' href='https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,600,600i' crossorigin='anonymous'>
`
;
document.head.appendChild($_inkDefaultFonts);


import { html } from '@polymer/polymer/polymer-element.js';
import {htmlLiteral} from '@polymer/polymer/lib/utils/html-tag';


export const inkThemeDefaults = htmlLiteral`
    <style>
			:host {
				--primary:						#0073e3;
				--primary-dark-blue:	#005FC9;
				--primary-dark:				#122E4A;
				--secondary:					#122E4A;
				--secondary-light:		#FE2727;


				--brd-bot-link: {
					border-bottom: 0.7px solid black;
					cursor: pointer;
				};
			}

			* {
				font-family: 'Source Sans Pro', sans-serif;
				font-weight: 500;
			}


			*[ghost] {
				border: 1px solid white;
			}

			paper-button {
				color: white;
				@apply --pd-sm;
			}

			paper-button[secondary] {
				background: var(--secondary);
			}

			paper-button, paper-button[primary] {
				background: var(--primary);
			}


			ink-head3 {
				font-size: 14px;
				color: var(--g50);
				font-weight: 400;
		    letter-spacing: 0.3px;
			}

			ink-head2 {
				font-size: 17px;
				color: var(--primary);
			}

			ink-head1 {
				font-size: 21px;
				color: var(--secondary);
			}


			ink-copy1 {
				font-size: 14px;
				color: var(--secondary);
			}

			ink-copy2 {
				font-size: 12px;
				color: var(--secondary);
			}

			paper-input {
				--paper-input-container-focus-color: var(--secondary);
				--paper-input-container-label: {
					font-size: 13px;
		    };
				--paper-input-container-input: {
					font-size: 13px;
				};
			}

			paper-checkbox {

			}
		</style>
`;
