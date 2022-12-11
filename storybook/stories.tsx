import CustomIcon from '@mui/icons-material/CardTravel';
import IconWithTooltip from '../src/IconWithTooltip';
import React from 'react';
import { ErrorIconWithTooltip } from '../src/ErrorIconWithTooltip';
import { InfoIconWithTooltip } from '../src/InfoIconWithTooltip';
import { ComponentMeta, ComponentStory, storiesOf } from '@storybook/react';
import { SuccessIconWithTooltip } from '../src/SuccessIconWithTooltip';

const style: React.CSSProperties = {
  paddingTop: 40,
  textAlign: 'center',
};

export default {
  title: 'IconWithTooltip',
  component: IconWithTooltip,
} as ComponentMeta<typeof IconWithTooltip>;

export const WithCustomIconAndWithoutText: ComponentStory<
  typeof IconWithTooltip
> = () => (
  <div style={style}>
    <IconWithTooltip Icon={CustomIcon} />
  </div>
);

export const WithTextInDefaultBottomPosition: ComponentStory<
  typeof IconWithTooltip
> = () => (
  <div style={style}>
    <IconWithTooltip Icon={CustomIcon} text="The content of the tooltip" />
  </div>
);

export const WithTextInCustomTopPosition: ComponentStory<
  typeof IconWithTooltip
> = () => (
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

export const WithIncludedSuccessIcon: ComponentStory<typeof IconWithTooltip> =
  () => (
    <div style={style}>
      <SuccessIconWithTooltip text="Success" placement="left" />
    </div>
  );

export const WithIncludedErrorIcon: ComponentStory<typeof IconWithTooltip> =
  () => (
    <div style={style}>
      <ErrorIconWithTooltip text="Error" placement="right" />
    </div>
  );

export const WithIncludedInfoIcon: ComponentStory<typeof IconWithTooltip> =
  () => (
    <div style={style}>
      <InfoIconWithTooltip text="Info" placement="bottom-start" />
    </div>
  );
