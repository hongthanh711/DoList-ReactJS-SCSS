/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import ArrowDown from "../../svg/ArrowDownIcon";

export default function Accordion() {
  const [isOpen, setIsOpen] = useState();
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="item-parent" onClick={handleToggle}>
        <p>Item Parent</p>
        <div className="icon-arrow">
          <ArrowDown />
        </div>
      </div>
      {isOpen && (
        <ul className="list-item-children">
          {Array(6)
            .fill(0)
            .map(() => {
              return <li className="item-children">Item Children</li>;
            })}
        </ul>
      )}
    </div>
  );
}
