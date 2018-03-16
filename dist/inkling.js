import {inkVariables} from './ink-variables.js';
import {inkReset} from './ink-reset.js';
import {inkFlexGrid} from './ink-flex-grid.js';
import {inkColors} from './ink-colors.js';
import {inkTypography} from './ink-typography.js';
import {inkLayoutHelpers} from './ink-layout-helpers.js';

import { html } from '@polymer/polymer/polymer-element.js';

export const inkling = html`
	${inkVariables}
	${inkReset}
	${inkFlexGrid}
	${inkColors}
	${inkTypography}
	${inkLayoutHelpers}
`;
