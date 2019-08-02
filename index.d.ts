import * as React from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

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

declare class SuccessIconWithTooltip extends React.Component<IconWithTooltipProps> {}

declare class ErrorIconWithTooltip extends React.Component<IconWithTooltipProps> {}

declare class InfoIconWithTooltip extends React.Component<IconWithTooltipProps> {}

declare module 'icon-with-tooltip' {}

export default IconWithTooltip;
export {SuccessIconWithTooltip, ErrorIconWithTooltip, InfoIconWithTooltip};
