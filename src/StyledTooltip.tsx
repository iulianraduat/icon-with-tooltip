import * as React from "react";
import { IconWithTooltipProps } from "./IconWithTooltip";
import { StyledComponentProps, Tooltip } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const stylesTooltip = {
  tooltip: {
    color: "#222222",
    backgroundColor: "#dddddd",
    margin: "2px 5px",
  },
};

const StyledTooltip: React.FC<StyledTooltipProps> = ({
  classes,
  Icon,
  placement,
  text,
}) => (
  <Tooltip title={text || ""} placement={placement} classes={classes}>
    <Icon />
  </Tooltip>
);

export type TooltipPlacement =
  | "bottom-end"
  | "bottom-start"
  | "bottom"
  | "left-end"
  | "left-start"
  | "left"
  | "right-end"
  | "right-start"
  | "right"
  | "top-end"
  | "top-start"
  | "top";

interface StyledTooltipProps extends IconWithTooltipProps {
  classes: Record<"tooltip", string>;
}

export default withStyles(stylesTooltip)(StyledTooltip);
