import React from "react";
import { useNavigate } from "react-router-dom";

type NavbarButtonProps = {
  name: String;
  to?: String;
  updateAnchorVisibility?: Function;
};

export default function NavbarButton(props: NavbarButtonProps) {
  const { name, to, updateAnchorVisibility } = props;
  const navigate = useNavigate();

  // Open menu on hover
  const handleMouseEnter = () => {
    if (typeof updateAnchorVisibility === "function") updateAnchorVisibility(true);
  };

  // Close menu on mouse leave
  const handleMouseLeave = () => {
    if (typeof updateAnchorVisibility === "function") updateAnchorVisibility(false);
  };

  const handleNavigate = () => {
    if (to && typeof to === "string") navigate(to);
  };

  return (
    <div
      onClick={handleNavigate}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="Navbar-button">
      {name}
    </div>
  );
}
