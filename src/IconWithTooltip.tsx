import * as React from 'react';
import StyledTooltip, { TooltipPlacement } from './StyledTooltip';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

const style: React.CSSProperties = {
  display: 'inline-block',
  margin: '0 10px'
};

const IconWithTooltip: React.FC<IconWithTooltipProps> = ({ Icon, placement, text }) => (
  <div style={style}>{text ? <StyledTooltip Icon={Icon} text={text} placement={placement} /> : <Icon />}</div>
);

export interface IconWithTooltipProps extends React.Props<any> {
  Icon: React.ComponentType<SvgIconProps>;
  placement?: TooltipPlacement;
  text?: string;
}

export default IconWithTooltip;
