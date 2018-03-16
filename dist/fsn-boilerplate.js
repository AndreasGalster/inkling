<link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600" rel="stylesheet" type="text/css">
<dom-module id="view-styles">
	<template>
		<style>

		:root {
			--fixed-view: {
				position: fixed;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;
			};

			--absolute-view: {
				position: absolute;
		    top: 0;
		    bottom: 0;
		    left: 0;
		    right: 0;
			};

			--fixed-scroll: {
				overflow-y: scroll;
		    padding-bottom: 30px;
			}


	    --fill-view: {
				/*position: absolute;
		    top: 0;
		    bottom: 0;
		    left: 0;
		    right: 0;*/
				display: block;
			};
		}
		</style>
	</template>
</dom-module>


<dom-module id="houseme-styles">
	<template>
		<style>

		:host {
			font-size: 12px;
		}

    :root {

			--grey: #f2f2f2;
			--darkgrey: #494949;
			--blue: #0c8aeb;
			--green: #00bc9c;
			--red: #eb4f37;
			--orange: #eb9a0c;


			--copy-sm: 13px;
			--copy-md: 15px;
			--copy-lg: 17px;


			--pigments-padding-xxs: 5px;
			--pigments-padding-xs: 10px;
			--pigments-padding-sm: 15px;
			--pigments-padding-md: 25px;
			--pigments-padding-lg: 35px;


			--border-radius-xs: 2px;
			--border-radius-sm: 4px;
			--border-radius-md: 6px;
			--border-radius-lg: 8px;

			/*
			--480, 600, 840, 960, 1280, 1440, and 1600dp.
			*/

			--xs: 							600px;
			--sm: 							960px;
			--md: 							1280px;
			--lg: 							1600px;
			--xlg: 							5000px;

			--grid-columns:			12;
	    --grid-gutter: 			30px;

		}

			/*// Make the element grid-ready (applying everything but the width)
			@mixin make-col-ready($size, $columns: $grid-columns, $gutter: $grid-gutter-width) {
			  position: relative;
			  min-height: 1px;
			  padding-right: ($gutter / 2);
			  padding-left:  ($gutter / 2);
		    width: 100%;
			}

			@mixin make-col($size, $columns: $grid-columns, $gutter: $grid-gutter-width) {
			    flex: 0 0 percentage($size / $columns);
			    // Add a `max-width` to ensure content within each column does not blow out
			    // the width of the column. Applies to IE10+ and Firefox. Chrome and Safari
			    // do not appear to require this.
			    max-width: percentage($size / $columns);
			}*/







	    /*$container-max-widths: (
	      sm: 576px,
	      md: 720px,
	      lg: 940px,
	      xl: 1140px
	    );*/








			/*--xs*/
			@media screen and (max-width: var(--xs)) {
				*[hide-xs] {
					display: none;
				}

				*[show-xs] {
					display: block;
				}
      }

			/*--sm*/
			@media screen and (min-width: 601px) and (max-width: 960px) {
				*[hide-sm] {
					display: none;
				}

				*[show-sm] {
					display: block;
				}
      }

			/*--md*/
			@media screen and (min-width: 961px) and (max-width: 1280px) {
				*[hide-md] {
					display: none;
				}

				*[show-md] {
					display: block;
				}
      }

			/*--lg*/
			@media screen and (min-width: 1281px) and (max-width: 1600px) {
				*[hide-lg] {
					display: none;
				}

				*[show-lg] {
					display: block;
				}
      }

			/*--xlg*/
			@media screen and (min-width: 1601px) and (max-width: 5000px) {
				*[hide-xlg] {
					display: none;
				}

				*[show-xlg] {
					display: block;
				}
      }






			paper-material {
	        background: white;
			}

			paper-icon-button, iron-icon {
				color: var(--pigments-gray-700);
			}

			paper-checkbox {
				--paper-checkbox-unchecked-background-color: white;
				--paper-checkbox-unchecked-color: var(--pigments-gray-500);
				--paper-checkbox-unchecked-ink-color: var(--pigments-blue-500);

				--paper-checkbox-checked-color: var(--pigments-blue-500);
				--paper-checkbox-checked-ink-color: var(--pigments-blue-500);
				--paper-checkbox-checkmark-color: white;

				--paper-checkbox-label-color: var(--pigments-dark-500);
				--paper-checkbox-label-spacing: 7px;
				--paper-checkbox-size: 18px;
			}

			paper-radio-button {
				--paper-radio-button-unchecked-background-color: white;
				--paper-radio-button-unchecked-color: var(--pigments-gray-500);
				--paper-radio-button-unchecked-ink-color: var(--pigments-blue-500);
				--paper-radio-button-checked-color: var(--pigments-blue-500);
				--paper-radio-button-checked-ink-color: var(--pigments-blue-500);
				--paper-radio-button-label-color: var(--pigments-dark-500);
				--paper-radio-button-label-spacing: 7px;
			}

			paper-toggle-button {
				--paper-toggle-button-checked-button-color: var(--pigments-blue-500);
				--paper-toggle-button-unchecked-bar-color: var(--pigments-gray-300);
				--paper-toggle-button-checked-bar-color: var(--pigments-gray-500);
			}

			paper-input, paper-textarea {
				--paper-input-container-color: var(--pigments-gray-800);
				--paper-input-container-focus-color: var(--pigments-blue-500);
				--paper-input-container-input-color: var(--pigments-dark-500);

				--paper-input-suffix: {
					margin: -16px -7px -8px 0;
				}

				--paper-input-prefix: {
					margin: -16px 0 -8px -7px;
				}

				--paper-input-container-label-floating: {
					transform: translateY(-75%) scale(0.85);
					width: 117%;
				}
			}

			paper-button, paper-button:hover {
				background: var(--blue);
				color: white;
				font-family: 'Source Sans Pro', sans-serif;
				font-weight: 500;
				font-size: 15px;
			}

			paper-button[ghost] {
				background: none;
				border: 2px solid white;
			}

			/*padding: 20px 0;*/

      paper-button:hover {
        background: var(--orange);
				border-color: var(--orange);
      }

			paper-button[full-width] {
				width: 100%;
				margin: 0;
			}


			.white {
				color: white;
			}

			.black {
				color: black;
			}





			:root {
				--font-size-base: 16px;

				--font-size1:               2.5rem;
				--font-size2:               2rem;
				--font-size3:               1.75rem;
				--font-size4:               1.5rem;
				--font-size5:               1.25rem;
				--font-size6:               1rem;


				--font-md: 		1;
				--font-lg:			1.25;
				--font-xlg:			1.25;
				--font-sm:  		.875;
				--font-xs: 			.75;
			}
/*
			$font-size-base:             1rem !default;
			$font-size-lg:               1.25rem !default;
			$font-size-sm:               .875rem !default;
			$font-size-xs:               .75rem !default;

			*/




			/*hero1 { font-size: var(--font-size1); }
			hero2 { font-size: var(--font-size2); }
			hero3 { font-size: var(--font-size3); }
			hero4 { font-size: var(--font-size4); }*/

			[text-left] { text-align: left; }
			[text-right] { text-align: right; }
			[text-center] { text-align: center; }

			[hide] { display: none; }
			[show] { display: block; }
			[visible] { visibility: visible; }
			[invisible] { visibility: hidden; }



			/*[invert] { filter: }*/




			hero1 { font-size: calc(var(--font-size1) * var(--font-xlg)); }
			hero2 {	font-size: calc(var(--font-size2) * var(--font-xlg)); }
			hero3 {	font-size: calc(var(--font-size3) * var(--font-xlg)); }
			hero4 {	font-size: calc(var(--font-size4) * var(--font-xlg)); }
			hero5 {	font-size: calc(var(--font-size5) * var(--font-xlg)); }
			hero6 {	font-size: calc(var(--font-size6) * var(--font-xlg)); }

			head1 { font-size: calc(var(--font-size1) * var(--font-lg)); }
			head2 {	font-size: calc(var(--font-size2) * var(--font-lg)); }
			head3 {	font-size: calc(var(--font-size3) * var(--font-lg)); }
			head4 {	font-size: calc(var(--font-size4) * var(--font-lg)); }
			head5 {	font-size: calc(var(--font-size5) * var(--font-lg)); }
			head6 {	font-size: calc(var(--font-size6) * var(--font-lg)); }

			copy1 { font-size: calc(var(--font-size1) * var(--font-md)); }
			copy2 {	font-size: calc(var(--font-size2) * var(--font-md)); }
			copy3 {	font-size: calc(var(--font-size3) * var(--font-md)); }
			copy4 {	font-size: calc(var(--font-size4) * var(--font-md)); }
			copy5 {	font-size: calc(var(--font-size5) * var(--font-md)); }
			copy6 {	font-size: calc(var(--font-size6) * var(--font-md)); }

			tiny1 { font-size: calc(var(--font-size1) * var(--font-sm)); }
			tiny2 {	font-size: calc(var(--font-size2) * var(--font-sm)); }
			tiny3 {	font-size: calc(var(--font-size3) * var(--font-sm)); }
			tiny4 {	font-size: calc(var(--font-size4) * var(--font-sm)); }
			tiny5 {	font-size: calc(var(--font-size5) * var(--font-sm)); }
			tiny6 {	font-size: calc(var(--font-size6) * var(--font-sm)); }

			micro1 { font-size: calc(var(--font-size1) * var(--font-xs)); }
			micro2 {	font-size: calc(var(--font-size2) * var(--font-xs)); }
			micro3 {	font-size: calc(var(--font-size3) * var(--font-xs)); }
			micro4 {	font-size: calc(var(--font-size4) * var(--font-xs)); }
			micro5 {	font-size: calc(var(--font-size5) * var(--font-xs)); }
			micro6 {	font-size: calc(var(--font-size6) * var(--font-xs)); }


			hero1, hero2, hero3, hero4 {
				font-family: 'Source Sans Pro', sans-serif;
				font-weight: 200;
			}


			h1, h2, h3, h4, h5, h6 {
				padding: 0;
				margin: 0;
				font-family: 'Source Sans Pro', sans-serif;
				font-weight: 200;
				line-height: 1.1em;
				color: var(--pigments-blue-500);
			}

			h1[accent],h2[accent],h3[accent],h4[accent],h5[accent],h6[accent] {
				font-family: 'Norican', cursive;
			}

			h1[white],h2[white],h3[white],h4[white],h5[white],h6[white] {
				color: white;
			}


		</style>
	</template>
</dom-module>
