import * as React from 'react';
import IconWithTooltip from './IconWithTooltip';
import InfoIcon from '@material-ui/icons/Info';
import { TooltipPlacement } from './StyledTooltip';

const style: React.CSSProperties = {
  color: '#0040ff'
};

export const InfoIconWithTooltip: React.FC<InfoIconWithTooltipProps> = ({ placement, text }): JSX.Element => (
  <div style={style}>
    <IconWithTooltip Icon={InfoIcon} text={text} placement={placement} />
  </div>
);

interface InfoIconWithTooltipProps {
  placement?: TooltipPlacement;
  text?: string;
}
