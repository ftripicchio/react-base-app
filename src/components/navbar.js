import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../routes/index";
import {createUseStyles} from 'react-jss';

const styles = createUseStyles({
  ul: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    width: 100
  },
  link: {
    display:'block',
    color: 'white',
    textDecoration: 'none',
    textTransform: 'capitalize',
    backgroundColor: 'gray',
    padding: '10px 10px',
    '&:hover': {
      backgroundColor: 'darkblue'
    }
  },
  linkChildren: {
    display:'block',
    color: 'white',
    textDecoration: 'none',
    textTransform: 'capitalize',
    backgroundColor: 'gray',
    padding: '10px 20px',
    '&:hover': {
      backgroundColor: 'darkblue'
    }
  }
})

const Navbar = () => {
  const classes = styles();
  return (
    <nav>
      <ul className={classes.ul}>
        {routes.map(route => (
          <li className={classes.li}>
            <Link className={classes.link} to={route.path}>{route.id}</Link>
            {route.children && route.children.map(c => (
              <Link className={classes.linkChildren} to={c.path}>{c.id}</Link>
            ))}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;