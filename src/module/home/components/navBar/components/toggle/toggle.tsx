import React from "react";
import { ToggleProps } from "./toggel.interface";


// Define the Toggle sub-component for the NavBar
/**
 * `NavBar.Toggle` component
 * 
 * Renders a button to toggle the visibility of the collapsible menu on mobile devices.
 * 
 * @param {ToggleProps} onClick - The function to be executed when the button is clicked.
 * @param {ToggleProps} children - The content to be displayed inside the button.
 */


const ToggleComponent: React.FC<ToggleProps> = ({ onClick, children }) => {
  return (
    <button onClick={onClick} aria-label="close"  className="md:hidden cursor-pointer self-start justify-self-end">
      {children}
    </button>
  );
};
export const Toggle = React.memo(ToggleComponent)