import React from "react";
import {  NavBarProps } from "./interface";
import { Logo } from "../Logo";
import { Toggle } from '../toggle';
import { Collapse } from "../Collapse";
import { Mobile } from "../mobile"
import { Link } from "../link";





// Define the props for the NavBar component
interface ChildrenProps {
  children: React.ReactNode
}

/**
 * `NavBar` component
 * 
 * A container for navigation elements. It is styled with a black background and full width.
 * 
 * @param {ChildrenType} children - The child elements to be rendered inside the `NavBar`.
 */
export const NavBar: React.FC<ChildrenProps> & NavBarProps = ({ children }) => {
  return <div className="bg-black w-full py-2">{children}</div>;
};


NavBar.Logo = Logo;
NavBar.Link = Link;
NavBar.Toggle = Toggle;
NavBar.Collapse = Collapse;
NavBar.Mobile = Mobile;

