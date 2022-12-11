import { SvgIconProps } from '@mui/material';
import * as React from 'react';
import StyledTooltip, { TooltipPlacement } from './StyledTooltip';

const style: React.CSSProperties = {
  display: 'inline-block',
  margin: '0 10px',
};

const IconWithTooltip: React.FC<IconWithTooltipProps> = ({
  Icon,
  placement,
  text,
}) => (
  <div style={style}>
    {text ? (
      <StyledTooltip Icon={Icon} text={text} placement={placement} />
    ) : (
      <Icon />
    )}
  </div>
);

export interface IconWithTooltipProps {
  Icon: React.ComponentType<SvgIconProps>;
  placement?: TooltipPlacement;
  text?: string;
}

export default IconWithTooltip;
