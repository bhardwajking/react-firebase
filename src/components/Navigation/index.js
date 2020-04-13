import React from "react";
import { Link } from "react-router-dom";
import { List, ListItem } from "@material-ui/core";
import * as ROUTES from "../../constants/routes";

export default function index() {
  return (
    <div>
      <List>
        <ListItem>
          <Link to={ROUTES.SIGN_IN}>Sign In</Link>
        </ListItem>
        <ListItem>
          <Link to={ROUTES.LANDING}>Landing</Link>
        </ListItem>
        <ListItem>
          <Link to={ROUTES.HOME}>Home</Link>
        </ListItem>
        <ListItem>
          <Link to={ROUTES.ACCOUNT}>Account</Link>
        </ListItem>
        <ListItem>
          <Link to={ROUTES.ADMIN}>Admin</Link>
        </ListItem>
      </List>
    </div>
  );
}
