import { Tooltip } from '@mui/material';
import { makeStyles } from '@mui/styles';
import * as React from 'react';
import { IconWithTooltipProps } from './IconWithTooltip';

const useStyles = makeStyles({
  tooltip: {
    color: '#222222',
    backgroundColor: '#dddddd',
    margin: '2px 5px',
  },
});

const StyledTooltip: React.FC<StyledTooltipProps> = ({
  Icon,
  placement,
  text,
}) => {
  const classes = useStyles();
  if (!text) {
    return <Icon />;
  }

  return (
    <Tooltip title={text} placement={placement} classes={classes}>
      <Icon />
    </Tooltip>
  );
};

export type TooltipPlacement =
  | 'bottom-end'
  | 'bottom-start'
  | 'bottom'
  | 'left-end'
  | 'left-start'
  | 'left'
  | 'right-end'
  | 'right-start'
  | 'right'
  | 'top-end'
  | 'top-start'
  | 'top';

interface StyledTooltipProps extends IconWithTooltipProps {}

export default StyledTooltip;
