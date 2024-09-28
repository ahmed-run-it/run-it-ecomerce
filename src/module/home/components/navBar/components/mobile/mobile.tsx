import React from "react";
import { MobileProps } from "./mobile.interface";


// Define the Mobile sub-component for the NavBar
/**
 * `NavBar.Mobile` component
 * 
 * Renders a grid layout for mobile-specific content.
 * 
 * @param {MobileProps} children - The content to be rendered inside the mobile navigation section.
 */

export const Mobile: React.FC<MobileProps> =React.memo(({ children }) => {
  return <div className="grid grid-cols-2">{children}</div>;
});
