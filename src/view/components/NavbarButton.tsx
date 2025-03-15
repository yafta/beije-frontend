import React from "react";
import { useNavigate } from "react-router-dom";
import { NavbarMenuItem } from "types/NavbarTypes";

interface NavbarButtonProps extends NavbarMenuItem {
  updateAnchorEl?: Function;
  updateAnchorVisibility: Function;
}

export default function NavbarButton(props: NavbarButtonProps) {
  const { name, to, updateAnchorEl, content, updateAnchorVisibility } = props;
  const navigate = useNavigate();

  // Open menu on hover
  const handleMouseEnter = () => {
    if (typeof updateAnchorEl === "function" && Boolean(content)) {
      updateAnchorEl(content);
      updateAnchorVisibility(true);
    }
  };

  // Close menu on mouse leave
  const handleMouseLeave = () => {
    updateAnchorVisibility(false);
  };

  // Navigate to page(props.to) on click
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
