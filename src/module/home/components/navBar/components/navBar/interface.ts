import { LinkProps } from "../link/link.interface";
import { CollapseProps } from "../Collapse/collapse.interface";
import { LogoProps } from "../Logo/logo.interface";
import { MobileProps } from "../mobile/mobile.interface";
import { ToggleProps } from "../toggle/toggel.interface";


export interface  NavBarProps {
  Logo: React.FC<LogoProps>;
  Link: React.FC<LinkProps>;
  Toggle: React.FC<ToggleProps>;
  Collapse: React.FC<CollapseProps>;
  Mobile: React.FC<MobileProps>;
}