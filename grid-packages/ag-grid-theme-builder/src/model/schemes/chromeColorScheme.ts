import { Color } from 'model/values/Color';
import { Scheme } from './Scheme';

export const chromeColorScheme = new Scheme('chromeColorScheme', [
  {
    value: 'high-contrast',
    label: 'Alpine',
    description: 'High contrast blacks, whites and light greys',
    variables: {},
  },
  {
    value: 'low-contrast',
    label: 'Balham',
    description: 'Low contrast shades of grey',
    variables: {
      '--ag-foreground-color': Color.parseCss('#000'),
      '--ag-background-color': Color.parseCss('#fff'),
      '--ag-header-background-color': Color.parseCss('#f5f7f7'),
      '--ag-subheader-background-color': Color.parseCss('#e2e9eb'),
      '--ag-control-panel-background-color': Color.parseCss('#f5f7f7'),
      '--ag-border-color': Color.parseCss('#bdc3c7'),
      '--ag-odd-row-background-color': Color.parseCss('#fcfdfe'),
      '--ag-invalid-color': Color.parseCss('#e02525'),
      '--ag-secondary-foreground-color': Color.parseCss('#000')?.withAlpha(0.54),
      '--ag-disabled-foreground-color': Color.parseCss('#000')?.withAlpha(0.38),
      '--ag-subheader-toolbar-background-color': Color.parseCss('#e2e9eb')?.withAlpha(0.5),
      '--ag-row-border-color': Color.parseCss('#bdc3c7')?.withAlpha(0.58),
      '--ag-chip-background-color': Color.parseCss('#000')?.withAlpha(0.1),
      '--ag-header-column-separator-color': Color.parseCss('#bdc3c7')?.withAlpha(0.5),
    },
  },
  {
    value: 'minimal',
    label: 'Minimal',
    description: 'Plain grid with light grey chrome',
    variables: {
      '--ag-foreground-color': Color.parseCss('rgba(0, 0, 0, 0.87)'),
      '--ag-secondary-foreground-color': Color.parseCss('rgba(0, 0, 0, 0.54)'),
      '--ag-disabled-foreground-color': Color.parseCss('rgba(0, 0, 0, 0.38)'),
      '--ag-background-color': Color.parseCss('#fff'),
      '--ag-odd-row-background-color': Color.parseCss('#fff'),
      '--ag-header-background-color': Color.parseCss('#fff'),
      '--ag-tooltip-background-color': Color.parseCss('#fff'),
      '--ag-subheader-background-color': Color.parseCss('#fafafa'),
      '--ag-subheader-toolbar-background-color': Color.parseCss('#fafafa')?.withAlpha(0.5),
      '--ag-chip-background-color': Color.parseCss('#e2e2e2'),
      '--ag-control-panel-background-color': Color.parseCss('#fafafa'),
    },
  },
  {
    value: 'none',
    label: 'None',
    description: 'Plain grid and chrome',
    variables: {
      '--ag-foreground-color': Color.parseCss('#000'),
      '--ag-secondary-foreground-color': Color.parseCss('#000'),
      '--ag-disabled-foreground-color': Color.parseCss('rgba(0, 0, 0, 0.38)'),
      '--ag-background-color': Color.parseCss('#fff'),
      '--ag-odd-row-background-color': Color.parseCss('#fff'),
      '--ag-header-background-color': Color.parseCss('#fff'),
      '--ag-tooltip-background-color': Color.parseCss('#fff'),
      '--ag-subheader-background-color': Color.parseCss('#fff'),
      '--ag-subheader-toolbar-background-color': Color.parseCss('transparent'),
      '--ag-chip-background-color': Color.parseCss('#e2e2e2'),
      '--ag-control-panel-background-color': Color.parseCss('#fff'),
    },
  },
]);
