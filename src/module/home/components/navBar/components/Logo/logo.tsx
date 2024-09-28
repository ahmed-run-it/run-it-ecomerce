import React from "react";
import { LogoProps } from "./logo.interface";

// Define the Logo sub-component for the NavBar
/**
 * `NavBar.Logo` component
 * 
 * Renders a logo or brand name. Aligned to the start of the navigation bar.
 * 
 * @param {LogoProps} children - The content to be displayed inside the logo section.
 */

export const Logo: React.FC<LogoProps> = React.memo(({ children }) => {
  return <div className="mr-0 md:mr-16 self-start justify-self-start">{children}</div>;
});
