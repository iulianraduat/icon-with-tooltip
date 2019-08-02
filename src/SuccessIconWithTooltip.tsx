import * as React from 'react';
import IconWithTooltip from './IconWithTooltip';
import SuccessIcon from '@material-ui/icons/CheckCircle';
import { TooltipPlacement } from './StyledTooltip';

const style: React.CSSProperties = {
  color: '#008000'
};

export const SuccessIconWithTooltip: React.FC<SuccessIconWithTooltipProps> = ({ placement, text }): JSX.Element => (
  <div style={style}>
    <IconWithTooltip Icon={SuccessIcon} text={text} placement={placement} />
  </div>
);

interface SuccessIconWithTooltipProps {
  placement?: TooltipPlacement;
  text?: string;
}
