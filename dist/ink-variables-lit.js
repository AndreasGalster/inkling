import { html } from 'lit-html/lib/lit-extended.js';

export const inkVariables = html`
  <style>
	    :host, :root {
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


					--g10: hsl(360, 0%, 10%);
				--g20: hsl(360, 0%, 20%);
				--g30: hsl(360, 0%, 30%);
				--g40: hsl(360, 0%, 40%);
				--g50: hsl(360, 0%, 50%);
				--g60: hsl(360, 0%, 60%);
				--g70: hsl(360, 0%, 70%);
				--g80: hsl(360, 0%, 80%);
				--g90: hsl(360, 0%, 90%);
				--g95: hsl(360, 0%, 95%);
				--g97: hsl(360, 0%, 97%);
				--g100: hsl(360, 0%, 100%);


				/* typography */
				--font-size-base: 16px;

				--font-size1:               2.5rem;
				--font-size2:               2rem;
				--font-size3:               1.75rem;
				--font-size4:               1.5rem;
				--font-size5:               1.25rem;
				--font-size6:               1rem;


				--font-xlg:			2.75;
				--font-lg:			1.25;
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

				--off-1:			var(--c-1);
				--off-2:			var(--c-2);
				--off-3:			var(--c-3);
				--off-4:			var(--c-4);
				--off-5:			var(--c-5);
				--off-6:			var(--c-6);
				--off-7:			var(--c-7);
				--off-8:			var(--c-8);
				--off-9:			var(--c-9);
				--off-10:			var(--c-10);
				--off-11:			var(--c-11);								
				--off-12:			var(--c-12);
			}
	</style>
`;
