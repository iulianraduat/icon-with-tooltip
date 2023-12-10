import CustomIcon from '@mui/icons-material/CardTravel';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ErrorIconWithTooltip } from '../src/ErrorIconWithTooltip';
import IconWithTooltip from '../src/IconWithTooltip';
import { InfoIconWithTooltip } from '../src/InfoIconWithTooltip';
import { SuccessIconWithTooltip } from '../src/SuccessIconWithTooltip';

const style: React.CSSProperties = {
  paddingTop: 40,
  textAlign: 'center',
};

const meta: Meta<typeof IconWithTooltip> = {
  title: 'IconWithTooltip',
  component: IconWithTooltip,
} as Meta<typeof IconWithTooltip>;
export default meta;
type Story = StoryObj<typeof IconWithTooltip>;

export const WithCustomIconAndWithoutText = () => (
  <div style={style}>
    <IconWithTooltip Icon={CustomIcon} />
  </div>
);

export const WithTextInDefaultBottomPosition = () => (
  <div style={style}>
    <IconWithTooltip Icon={CustomIcon} text="The content of the tooltip" />
  </div>
);

export const WithTextInCustomTopPosition = () => (
  <div style={style}>
    <p>
      Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
      consectetur, adipisci velit...
    </p>
    <IconWithTooltip
      Icon={CustomIcon}
      text="The content of the tooltip"
      placement="top"
    />
  </div>
);

export const WithIncludedSuccessIcon = () => (
  <div style={style}>
    <SuccessIconWithTooltip text="Success" placement="left" />
  </div>
);

export const WithIncludedErrorIcon = () => (
  <div style={style}>
    <ErrorIconWithTooltip text="Error" placement="right" />
  </div>
);

export const WithIncludedInfoIcon = () => (
  <div style={style}>
    <InfoIconWithTooltip text="Info" placement="bottom-start" />
  </div>
);
