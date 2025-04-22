import { NavLink, NavLinkProps } from "react-router-dom";
import { styled } from "@mui/material";

const StyledNavLink = styled(NavLink)<NavLinkProps>(({ theme }) => ({
  textDecoration: "none",
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  color: theme.palette.primary.main,
  display: "inline-flex",
  width: "100%",

  "&.active": {
    background: theme.palette.primary.light,
    color: "white",
  },
}));

export const AppNavLink = ({ children, ...props }: NavLinkProps) => {
  return <StyledNavLink {...props}>{children}</StyledNavLink>;
};
