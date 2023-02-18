import React from "react";
import { Button as ButtonElement, makeStyles, Theme } from "@mui/material";
// import styles from "./Button.module.css"
import classNames from "classnames";

export interface ButtonProps {
  "data-testid"?: string;
  children: any;
  variant?: "text" | "outlined" | "contained";
  color?: "inherit" | "primary" | "secondary" | "default";
  onClick?: any;
  className?: any;
  disabled?: boolean;
  to?: any;
  type?: any;
  onKeyDown?: any;
  name?: any;
  value?: any;
}

export const Button = (props) => {
  // const btnClasses = classNames({
  //   [props.className]: true,
  //   [styles.Button]: !props.disabled,
  //   [styles.ButtonDisabled]: props.disabled,
  // });

  return (
    <ButtonElement
      variant={props.variant}
      color={props.color}
      onClick={props.onClick}
      data-testid={props["data-testid"]}
      // className={btnClasses}
      disabled={props.disabled}
      to={props.to}
      type={props.type}
      onKeyDown={props.onKeyDown}
      value={props.value}
      name={props.name}
      {...props}
    >
      {props.children}
    </ButtonElement>
  );
};
