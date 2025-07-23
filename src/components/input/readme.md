# ds-input



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute      | Description                              | Type                                                                        | Default     |
| -------------- | -------------- | ---------------------------------------- | --------------------------------------------------------------------------- | ----------- |
| `autocomplete` | `autocomplete` | Input autocomplete attribute             | `string`                                                                    | `''`        |
| `disabled`     | `disabled`     | Whether the input is disabled            | `boolean`                                                                   | `false`     |
| `error`        | `error`        | Error message to display                 | `string`                                                                    | `''`        |
| `fullWidth`    | `full-width`   | Whether the input should take full width | `boolean`                                                                   | `false`     |
| `helperText`   | `helper-text`  | Helper text to display                   | `string`                                                                    | `''`        |
| `label`        | `label`        | The input label                          | `string`                                                                    | `''`        |
| `maxlength`    | `maxlength`    | Maximum length of input                  | `number`                                                                    | `undefined` |
| `minlength`    | `minlength`    | Minimum length of input                  | `number`                                                                    | `undefined` |
| `name`         | `name`         | Input name attribute                     | `string`                                                                    | `''`        |
| `placeholder`  | `placeholder`  | The input placeholder                    | `string`                                                                    | `''`        |
| `readonly`     | `readonly`     | Whether the input is readonly            | `boolean`                                                                   | `false`     |
| `required`     | `required`     | Whether the input is required            | `boolean`                                                                   | `false`     |
| `size`         | `size`         | The input size                           | `"lg" \| "md" \| "sm"`                                                      | `'md'`      |
| `type`         | `type`         | The input type                           | `"email" \| "number" \| "password" \| "search" \| "tel" \| "text" \| "url"` | `'text'`    |
| `value`        | `value`        | The input value                          | `string`                                                                    | `''`        |


## Events

| Event     | Description                          | Type                  |
| --------- | ------------------------------------ | --------------------- |
| `dsBlur`  | Emitted when the input loses focus   | `CustomEvent<void>`   |
| `dsFocus` | Emitted when the input is focused    | `CustomEvent<void>`   |
| `dsInput` | Emitted when the input value changes | `CustomEvent<string>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
