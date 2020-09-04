import React from "react";
import Svg, { SvgProps } from "../Svg";

const CodeIcon: React.FC<SvgProps> = ({ ...props }) => (
  <Svg viewBox="0 0 24 24" {...props}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
  </Svg>
);

export default CodeIcon;
