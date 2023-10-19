import { SchemeOption } from './schemes/Scheme';
import { Theme, alpineTheme } from './themes';
import { mapPresentObjectValues } from './utils';
import { VariableValues } from './values';

export const renderCss = ({ values, className }: { values: VariableValues; className: string }) => {
  const properties = mapPresentObjectValues(values, (value) => value.toCss());
  let css = `.${className} {\n`;

  for (const [key, value] of Object.entries(properties)) {
    if (key && value) {
      css += `    ${key}: ${value};\n`;
    }
  }
  css += '}';
  return css;
};

export const renderSchemeCss = ({
  schemeValues,
  className,
}: {
  schemeValues: ReadonlyArray<SchemeOption | null>;
  className: string;
}) => {
  const values: VariableValues = {};

  for (const option of schemeValues) {
    Object.assign(values, option?.variables);
  }

  return addCssDocs({
    parentTheme: alpineTheme,
    themeClass: className,
    content: renderCss({ values, className }),
  });
};

export const addCssDocs = ({
  parentTheme,
  themeClass,
  content,
}: {
  parentTheme: Theme;
  themeClass: string;
  content: string;
}) => `/*
 * To use your new theme, copy this CSS into your application stylesheets and add
 * the class "${themeClass}" to the div containing the grid, *in addition to* the
 * ${parentTheme.label} class:
 * <div id="myGrid" class="${parentTheme.class} ${themeClass}"></div>
 * 
 * See https://ag-grid.com/javascript-data-grid/global-style-customisation/
 */

${content}

/*

You can customise the theme more by adding css variables on the theme class:

.${themeClass} {
    --ag-active-color: red;
}

Or by defining selectors that target grid classes, scoped to the theme class to ensure
that your rules override the built-in grid styles:

.${themeClass} .ag-header-cell {
    font-style: italic;
}

*/
`;
