# icon-with-tooltip

An icon displaying a tooltip on hover.

---

## Demo

You can access the storybook for this component [here](https://iulian-radu-at.github.io/icon-with-tooltip/).

## Props

The component accepts the props defined bellow in the table.

### Props accepted by IconWithTooltip

| Name      | Type                              | Required | Default   | Description                        |
|-----------|-----------------------------------|----------|-----------|------------------------------------|
| Icon      | React.ComponentType<SvgIconProps> | yes      | -         | The icon (from @material-ui/icons) |
| placement | TooltipPlacement                  | no       | bottom    | The placement of the tooltip text  |
| text      | string                            | no       | undefined | The tooltip text                   |

---

## Versions

| IconWithTooltip _uses_ | Material-ui | Material-ui icons | React  |
|-----------------------:|:-----------:|:-----------------:|:------:|
|                  1.0.x |    4.3.0    |       4.2.1       | 16.8.6 |
|                  1.1.x |    4.3.2    |       4.2.1       | 16.9.0 |

### About versioning schema used for IconWithTooltip

- Major - it will be increased if the major version of the dependat package changes or there are breaking changes in the code of IconWithTooltip
- Minor - it will be increased if no major version of the dependat package changes, but there are changes of the minor or patch versions of it
- Patch - it will be increased if there are no changes of the dependat packages, but there are non breaking changes in the code of IconWithTooltip

---

## Example

Displaying an icon with a tooltip positioned above:

```js
import * as React from 'react';
import IconWithTooltip from 'icon-with-tooltip';
import CustomIcon from '@material-ui/icons/CardTravel';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <IconWithTooltip Icon={CustomIcon} text="The content of the tooltip" placement="top"/>
      </div>
    );
  }
}

export default App;
```

Using the predefined icons with tooltip components:

```js
import * as React from 'react';
import { SuccessIconWithTooltip } from 'icon-with-tooltip';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SuccessIconWithTooltip text="Success" placement="left" />
      </div>
    );
  }
}

export default App;
```

```js
import * as React from 'react';
import { ErrorIconWithTooltip } from 'icon-with-tooltip';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ErrorIconWithTooltip text="Error" placement="right" />
      </div>
    );
  }
}

export default App;
```

```js
import * as React from 'react';
import { InfoIconWithTooltip } from 'icon-with-tooltip';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <InfoIconWithTooltip text="Info" placement="right" />
      </div>
    );
  }
}

export default App;
```

---

## Changelog

### 1.0.0

- icon-with-tooltip is made publicly available

### 1.0.1

- Fixed the types file

### 1.0.2

- Display the custom icons inline

### 1.1.0

- Update packages
