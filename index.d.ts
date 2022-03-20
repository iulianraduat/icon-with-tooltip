import * as React from 'react';
import { SvgIconProps } from '@mui/material/SvgIcon';

export interface IconWithTooltipProps extends React.Props<any> {
  Icon: React.ComponentType<SvgIconProps>;
  placement?: TooltipPlacement;
  text?: string;
}

type TooltipPlacement =
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

declare class IconWithTooltip extends React.Component<IconWithTooltipProps> {}

interface CustomIconWithTooltipProps {
  placement?: TooltipPlacement;
  text?: string;
}

declare class SuccessIconWithTooltip extends React.Component<CustomIconWithTooltipProps> {}

declare class ErrorIconWithTooltip extends React.Component<CustomIconWithTooltipProps> {}

declare class InfoIconWithTooltip extends React.Component<CustomIconWithTooltipProps> {}

declare module 'icon-with-tooltip' {}

export default IconWithTooltip;
export { SuccessIconWithTooltip, ErrorIconWithTooltip, InfoIconWithTooltip };
