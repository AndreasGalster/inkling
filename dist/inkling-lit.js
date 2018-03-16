import {inkVariables} from './ink-variables-lit.js';
import {inkReset} from './ink-reset-lit.js';
import {inkFlexGrid} from './ink-flex-grid-lit.js';
import {inkColors} from './ink-colors-lit.js';
import {inkTypography} from './ink-typography-lit.js';
import {inkLayoutHelpers} from './ink-layout-helpers-lit.js';

import { html } from 'lit-html/lib/lit-extended.js';

export const inkling = html`
	${inkVariables}
	${inkReset}
	${inkFlexGrid}
	${inkColors}
	${inkTypography}
	${inkLayoutHelpers}
`;
