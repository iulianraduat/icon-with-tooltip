import React from 'react';
import IconWithTooltip from '../src/IconWithTooltip';
import { storiesOf } from '@storybook/react';
import CustomIcon from '@material-ui/icons/CardTravel';
import { SuccessIconWithTooltip } from '../src/SuccessIconWithTooltip';
import { ErrorIconWithTooltip } from '../src/ErrorIconWithTooltip';
import { InfoIconWithTooltip } from '../src/InfoIconWithTooltip';

const style: React.CSSProperties = {
  paddingTop: 40,
  textAlign: 'center'
};

storiesOf('IconWithTooltip', module)
  .add('with custom Icon and without text', () => (
    <div style={style}>
      <IconWithTooltip Icon={CustomIcon} />
    </div>
  ))
  .add('with text in default position (bottom)', () => (
    <div style={style}>
      <IconWithTooltip Icon={CustomIcon} text="The content of the tooltip" />
    </div>
  ))
  .add('with text in custom position (top)', () => (
    <div style={style}>
      <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
      <IconWithTooltip Icon={CustomIcon} text="The content of the tooltip" placement="top" />
    </div>
  ))
  .add('with included success Icon', () => (
    <div style={style}>
      <SuccessIconWithTooltip text="Success" placement="left" />
    </div>
  ))
  .add('with included error Icon', () => (
    <div style={style}>
      <ErrorIconWithTooltip text="Error" placement="right" />
    </div>
  ))
  .add('with included info Icon', () => (
    <div style={style}>
      <InfoIconWithTooltip text="Info" placement="right" />
    </div>
  ));
