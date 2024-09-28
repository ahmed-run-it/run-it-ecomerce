import React from "react";
import { CollapseProps } from "./collapse.interface";
import classNames from 'classnames';




// Define the Collapse sub-component for the NavBar
/**
 * `NavBar.Collapse` component
 * 
 * Renders a collapsible section that shows or hides based on the `open` state.
 * 
 * @param {CollapseProps} open - A boolean that determines if the collapsible content should be visible.
 * @param {CollapseProps} children - The content to be rendered inside the collapsible section.
 */

export const Collapse: React.FC<CollapseProps> =React.memo(({ className="" ,isOpen, children }) => {
  const combinedClassName = classNames(`sm:w-full flex-col sm:flex-row flex items-center justify-center ${!isOpen && 'hidden'} sm:flex`, className); 
  return (
    <div className={combinedClassName}>
      {children}
    </div>
  );
});
