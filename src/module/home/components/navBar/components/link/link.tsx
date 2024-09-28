import React from "react";
import { LinkProps } from "./link.interface";



// Define the Link sub-component for the NavBar
/**
 * `NavBar.Link` component
 * 
 * Renders a navigation link with a specific `href`. Styled to be clickable with spacing and text color.
 * 
 * @param {LinkProps} href - The URL to navigate to.
 * @param {LinkProps} children - The content to be displayed inside the link.
 */

export const Link: React.FC<LinkProps> =React.memo(({ href, children }) => {
  return (
    <a className="text-white text-xs flex items-center justify-center mr-5 cursor-pointer py-6 md:py-0" href={href}>
      {children}
    </a>
  );
});
