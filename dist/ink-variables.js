import { html } from '@polymer/polymer/polymer-element.js';

export const inkVariables = html`
  <style>
	    :host {
				/* colors */
				--primary:						#1177f3;
				--primary-light:			lightblue;
				--secondary:					orange;



				/* typography */
				--font-size-base: 16px;

				--font-size1:               2.5rem;
				--font-size2:               2rem;
				--font-size3:               1.75rem;
				--font-size4:               1.5rem;
				--font-size5:               1.25rem;
				--font-size6:               1rem;

				/*
				--font-size6:               2rem;
				--font-size6:               1.9rem;
				--font-size6:               1.8rem;
				--font-size6:               1.7rem;
				--font-size6:               1.6rem;
				--font-size6:               1.5rem;
				--font-size6:               1.4rem;
				--font-size6:               1.3rem;
				--font-size1-2:               1.2rem;
				--font-size1-1:               1.1rem;
				--font-size1-0:               1rem;
				*/




				--font-xlg:			2.75;
				--font-lg:			1.25;fire
				--font-md: 			0.5;
				--font-sm:  		.3;
				--font-xs: 			.75;


				/* grid */
				--xs: 				600px;
				--sm: 				960px;
				--md: 				1280px;
				--lg: 				1600px;
				--xlg: 				5000px;

				--columns:		12;
				--gap:				10px;
				--c-gap:			calc(var(--gap) * 3);

				--c-1: 				100% / var(--columns) * 1;
	      --c-2: 				100% / var(--columns) * 2;
	      --c-3: 				100% / var(--columns) * 3;
	      --c-4: 				100% / var(--columns) * 4;
				--c-5: 				100% / var(--columns) * 5;
	      --c-6: 				100% / var(--columns) * 6;
				--c-7: 				100% / var(--columns) * 7;
				--c-8: 				100% / var(--columns) * 8;
				--c-9: 				100% / var(--columns) * 9;
				--c-10: 			100% / var(--columns) * 10;
				--c-11: 			100% / var(--columns) * 11;
	      --c-12: 			100% / var(--columns) * 12;

				--c-1-o: 			0 0 calc(var(--c-1));
				--c-2-o: 			0 0 calc(var(--c-2));
				--c-3-o: 			0 0 calc(var(--c-3));
				--c-4-o: 			0 0 calc(var(--c-4));
				--c-5-o: 			0 0 calc(var(--c-5));
				--c-6-o: 			0 0 calc(var(--c-6));
				--c-7-o: 			0 0 calc(var(--c-7));
				--c-8-o: 			0 0 calc(var(--c-8));
				--c-9-o: 			0 0 calc(var(--c-9));
				--c-10-o: 		0 0 calc(var(--c-10));
				--c-11-o: 		0 0 calc(var(--c-11));
				--c-12-o: 		0 0 calc(var(--c-12));

				--c-1-i:			0 0 calc( var(--c-1) - (var(--gap)*2) );
				--c-2-i:			0 0 calc( var(--c-2) - (var(--gap)*2) );
				--c-3-i:			0 0 calc( var(--c-3) - (var(--gap)*2) );
				--c-4-i:			0 0 calc( var(--c-4) - (var(--gap)*2) );
				--c-5-i:			0 0 calc( var(--c-5) - (var(--gap)*2) );
				--c-6-i:			0 0 calc( var(--c-6) - (var(--gap)*2) );
				--c-7-i:			0 0 calc( var(--c-7) - (var(--gap)*2) );
				--c-8-i:			0 0 calc( var(--c-8) - (var(--gap)*2) );
				--c-9-i:			0 0 calc( var(--c-9) - (var(--gap)*2) );
				--c-10-i:			0 0 calc( var(--c-10) - (var(--gap)*2) );
				--c-11-i:			0 0 calc( var(--c-11) - (var(--gap)*2) );
				--c-12-i:			0 0 calc( var(--c-12) - (var(--gap)*2) );

				--off-2:			var(--c-2);
				--off-3:			var(--c-3);
				--off-4:			var(--c-4);
				--off-6:			var(--c-6);
				--off-8:			var(--c-8);
				--off-12:			var(--c-12);
			}
	</style>
`;
