import {inkVariables} from './ink-variables.js';
import {inkReset} from './ink-reset.js';
import {inkFlexGrid} from './ink-flex-grid.js';
import {inkColors} from './ink-colors.js';
import {inkTypography} from './ink-typography.js';
import {inkLayoutHelpers} from './ink-layout-helpers.js';

import { html } from '@polymer/polymer/polymer-element.js';
import {htmlLiteral} from '@polymer/polymer/lib/utils/html-tag';


export const inkling = htmlLiteral`
	${inkVariables}
	${inkReset}
	${inkFlexGrid}
	${inkColors}
	${inkTypography}
	${inkLayoutHelpers}
`;
