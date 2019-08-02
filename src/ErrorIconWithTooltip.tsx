import * as React from 'react';
import ErrorIcon from '@material-ui/icons/Error';
import IconWithTooltip from './IconWithTooltip';
import { TooltipPlacement } from './StyledTooltip';

const style: React.CSSProperties = {
  color: '#c00000',
  display: 'inline-block'
};

export const ErrorIconWithTooltip: React.FC<ErrorIconWithTooltipProps> = ({ placement, text }): JSX.Element => (
  <div style={style}>
    <IconWithTooltip Icon={ErrorIcon} text={text} placement={placement} />
  </div>
);

interface ErrorIconWithTooltipProps {
  placement?: TooltipPlacement;
  text?: string;
}
