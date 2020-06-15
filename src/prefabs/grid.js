(() => ({
  name: 'Grid',
  icon: 'GridIcon',
  category: 'LAYOUT',
  structure: [
    {
      name: 'Grid',
      options: [
        {
          value: true,
          label: 'Show',
          key: 'show',
          type: 'TOGGLE',
        },
        {
          value: '',
          label: 'Model',
          key: 'model',
          type: 'MODEL',
        },
        {
          value: {},
          label: 'Filter',
          key: 'filter',
          type: 'FILTER',
          configuration: {
            dependsOn: 'model',
          },
        },
        {
          value: 'container',
          label: 'Type',
          key: 'type',
          type: 'CUSTOM',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              { name: 'Container', value: 'container' },
              { name: 'Item', value: 'item' },
            ],
          },
        },
        {
          value: 'row',
          label: 'Direction',
          key: 'direction',
          type: 'CUSTOM',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              { name: 'Horizontal', value: 'row' },
              { name: 'Vertical', value: 'column' },
            ],
          },
        },
        {
          value: false,
          label: 'Reverse',
          key: 'reverse',
          type: 'TOGGLE',
        },
        {
          value: 'stretch',
          label: 'Align items',
          key: 'alignItems',
          type: 'CUSTOM',
          configuration: {
            as: 'DROPDOWN',
            dataType: 'string',
            allowedInput: [
              { name: 'Start', value: 'flex-start' },
              { name: 'Center', value: 'center' },
              { name: 'End', value: 'flex-end' },
              { name: 'Stretch', value: 'stretch' },
              { name: 'Baseline', value: 'baseline' },
            ],
          },
        },
        {
          value: 'stretch',
          label: 'Align content',
          key: 'alignContent',
          type: 'CUSTOM',
          configuration: {
            as: 'DROPDOWN',
            dataType: 'string',
            allowedInput: [
              { name: 'Stretch', value: 'stretch' },
              { name: 'Center', value: 'center' },
              { name: 'Start', value: 'flex-start' },
              { name: 'End', value: 'flex-end' },
              { name: 'Space around', value: 'space-around' },
              { name: 'Space between', value: 'space-between' },
            ],
          },
        },
        {
          value: 'flex-start',
          label: 'Justify',
          key: 'justify',
          type: 'CUSTOM',
          configuration: {
            as: 'DROPDOWN',
            dataType: 'string',
            allowedInput: [
              { name: 'Start', value: 'flex-start' },
              { name: 'Center', value: 'center' },
              { name: 'End', value: 'flex-end' },
              { name: 'Space between', value: 'space-between' },
              { name: 'Space around', value: 'space-around' },
              { name: 'Space evenly', value: 'space-evenly' },
            ],
          },
        },
        {
          value: 'Transparent',
          label: 'Background color',
          key: 'backgroundColor',
          type: 'COLOR',
        },
        {
          value: '0',
          label: 'Spacing',
          key: 'spacing',
          type: 'CUSTOM',
          configuration: {
            as: 'DROPDOWN',
            dataType: 'string',
            allowedInput: [
              { name: '0', value: '0' },
              { name: '1', value: '1' },
              { name: '2', value: '2' },
              { name: '3', value: '3' },
              { name: '4', value: '4' },
              { name: '5', value: '5' },
              { name: '6', value: '6' },
              { name: '7', value: '7' },
              { name: '8', value: '8' },
              { name: '9', value: '9' },
              { name: '10', value: '10' },
            ],
          },
        },
        {
          value: 'wrap',
          label: 'Wrap',
          key: 'wrap',
          type: 'CUSTOM',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              { name: 'No wrap', value: 'nowrap' },
              { name: 'Wrap', value: 'wrap' },
              { name: 'Wrap reverse', value: 'wrap-reverse' },
            ],
          },
        },
        {
          value: false,
          label: 'Zero min width',
          key: 'zeroMinWidth',
          type: 'TOGGLE',
        },
        {
          value: false,
          label: 'Show responsive options',
          key: 'responsiveOptions',
          type: 'TOGGLE',
        },
        {
          value: 'true',
          label: 'XS width',
          key: 'xsWidth',
          type: 'CUSTOM',
          configuration: {
            as: 'DROPDOWN',
            dataType: 'string',
            allowedInput: [
              { name: 'Not set', value: 'false' },
              { name: 'Flexible', value: 'true' },
              { name: 'Fit content', value: 'auto' },
              { name: 'Hidden', value: 'hidden' },
              { name: '1', value: '1' },
              { name: '2', value: '2' },
              { name: '3', value: '3' },
              { name: '4', value: '4' },
              { name: '5', value: '5' },
              { name: '6', value: '6' },
              { name: '7', value: '7' },
              { name: '8', value: '8' },
              { name: '9', value: '9' },
              { name: '10', value: '10' },
              { name: '11', value: '11' },
              { name: '12', value: '12' },
            ],
            condition: {
              type: 'SHOW',
              option: 'responsiveOptions',
              comparator: 'EQ',
              value: true,
            },
          },
        },
        {
          value: 'false',
          label: 'SM width',
          key: 'smWidth',
          type: 'CUSTOM',
          configuration: {
            as: 'DROPDOWN',
            dataType: 'string',
            allowedInput: [
              { name: 'Not set', value: 'false' },
              { name: 'Flexible', value: 'true' },
              { name: 'Fit content', value: 'auto' },
              { name: 'Hidden', value: 'hidden' },
              { name: '1', value: '1' },
              { name: '2', value: '2' },
              { name: '3', value: '3' },
              { name: '4', value: '4' },
              { name: '5', value: '5' },
              { name: '6', value: '6' },
              { name: '7', value: '7' },
              { name: '8', value: '8' },
              { name: '9', value: '9' },
              { name: '10', value: '10' },
              { name: '11', value: '11' },
              { name: '12', value: '12' },
            ],
            condition: {
              type: 'SHOW',
              option: 'responsiveOptions',
              comparator: 'EQ',
              value: true,
            },
          },
        },
        {
          value: 'false',
          label: 'MD width',
          key: 'mdWidth',
          type: 'CUSTOM',
          configuration: {
            as: 'DROPDOWN',
            dataType: 'string',
            allowedInput: [
              { name: 'Not set', value: 'false' },
              { name: 'Flexible', value: 'true' },
              { name: 'Fit content', value: 'auto' },
              { name: 'Hidden', value: 'hidden' },
              { name: '1', value: '1' },
              { name: '2', value: '2' },
              { name: '3', value: '3' },
              { name: '4', value: '4' },
              { name: '5', value: '5' },
              { name: '6', value: '6' },
              { name: '7', value: '7' },
              { name: '8', value: '8' },
              { name: '9', value: '9' },
              { name: '10', value: '10' },
              { name: '11', value: '11' },
              { name: '12', value: '12' },
            ],
            condition: {
              type: 'SHOW',
              option: 'responsiveOptions',
              comparator: 'EQ',
              value: true,
            },
          },
        },
        {
          value: 'false',
          label: 'LG width',
          key: 'lgWidth',
          type: 'CUSTOM',
          configuration: {
            as: 'DROPDOWN',
            dataType: 'string',
            allowedInput: [
              { name: 'Not set', value: 'false' },
              { name: 'Flexible', value: 'true' },
              { name: 'Fit content', value: 'auto' },
              { name: 'Hidden', value: 'hidden' },
              { name: '1', value: '1' },
              { name: '2', value: '2' },
              { name: '3', value: '3' },
              { name: '4', value: '4' },
              { name: '5', value: '5' },
              { name: '6', value: '6' },
              { name: '7', value: '7' },
              { name: '8', value: '8' },
              { name: '9', value: '9' },
              { name: '10', value: '10' },
              { name: '11', value: '11' },
              { name: '12', value: '12' },
            ],
            condition: {
              type: 'SHOW',
              option: 'responsiveOptions',
              comparator: 'EQ',
              value: true,
            },
          },
        },
        {
          value: 'false',
          label: 'XL width',
          key: 'xlWidth',
          type: 'CUSTOM',
          configuration: {
            as: 'DROPDOWN',
            dataType: 'string',
            allowedInput: [
              { name: 'Not set', value: 'false' },
              { name: 'Flexible', value: 'true' },
              { name: 'Fit content', value: 'auto' },
              { name: 'Hidden', value: 'hidden' },
              { name: '1', value: '1' },
              { name: '2', value: '2' },
              { name: '3', value: '3' },
              { name: '4', value: '4' },
              { name: '5', value: '5' },
              { name: '6', value: '6' },
              { name: '7', value: '7' },
              { name: '8', value: '8' },
              { name: '9', value: '9' },
              { name: '10', value: '10' },
              { name: '11', value: '11' },
              { name: '12', value: '12' },
            ],
            condition: {
              type: 'SHOW',
              option: 'responsiveOptions',
              comparator: 'EQ',
              value: true,
            },
          },
        },
        {
          type: 'SIZE',
          label: 'Height',
          key: 'height',
          value: '',
          configuration: {
            as: 'UNIT',
          },
        },
      ],
      descendants: [],
    },
  ],
}))();
