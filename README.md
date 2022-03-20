# icon-with-tooltip ![Weekly downloads](https://img.shields.io/npm/dw/icon-with-tooltip 'Weekly downloads')

An icon displaying a tooltip on hover.

---

## Demo

You can access the storybook for this component [here](https://iulian-radu-at.github.io/icon-with-tooltip/).

## Props

The component accepts the props defined bellow in the table.

### Props accepted by IconWithTooltip

| Name      | Type                              | Required | Default   | Description                        |
| --------- | --------------------------------- | -------- | --------- | ---------------------------------- |
| Icon      | React.ComponentType<SvgIconProps> | yes      | -         | The icon (from @material-ui/icons) |
| placement | TooltipPlacement                  | no       | bottom    | The placement of the tooltip text  |
| text      | string                            | no       | undefined | The tooltip text                   |

---

## Versions

| IconWithTooltip _uses_ | Material-ui | Material-ui icons |      React       |
| ---------------------: | :---------: | :---------------: | :--------------: |
|                  1.0.x |    4.3.0    |       4.2.1       |      16.8.6      |
|                  1.1.x |    4.3.2    |       4.2.1       |      16.9.0      |
|                  1.2.x |    4.9.0    |       4.5.1       |      16.9.0      |
|                  1.3.x |   4.10.2    |       4.9.1       |      16.9.0      |
|                  1.4.x |   4.11.0    |       4.9.1       |      16.9.0      |
|                  1.5.x |   4.11.3    |      4.11.2       | 16.9.0 or 17.0.0 |
|                  2.0.x |    5.5.1    |       5.5.1       |    >= 17.0.0     |

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
        <IconWithTooltip
          Icon={CustomIcon}
          text="The content of the tooltip"
          placement="top"
        />
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

### 1.2.0

- Update packages

### 1.2.1

- Updated packages
- Moved from npm to yarn

### 1.3.0

- Update packages

### 1.4.0

- Update packages

### 1.4.1

- Fixed crash produced by "export \* from"

### 1.5.0

- Accepting React 17 as peerDependencies

### 1.5.1

- Fixed security warnings

### 2.0.0

- Migrated to material-ui 5
- Supports minimum React 17
