import classNames from "classnames";
import React from "react";

interface ItemProps {
  children: React.ReactNode;
  className?: string;
}

const Item: React.FC<ItemProps> = React.memo(({ children , className }) => {
  const combinedClassName = classNames('w-full h-full duration-500', className);

  return (
    <div className={combinedClassName}>
      {children}
    </div>
  );
});

Item.displayName = "Item";

export { Item };