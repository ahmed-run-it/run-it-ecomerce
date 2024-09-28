import React, { useCallback, useState } from 'react';
import { NavBarPresentational } from "../Presentational/navBar.presentational";

export const NavBarLoginContainer =() => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return (
    <NavBarPresentational isOpen={isOpen} onToggle={handleToggle} />
  );
};