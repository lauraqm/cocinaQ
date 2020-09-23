import React, { Children, useEffect, useState } from "react";
import { Tooltip } from "antd";
import "./toogleButton.scss";

const ToggleButton = (props) => {
  const {tooltip, extraClass} = props;
  const [toggleState, setToggleState] = useState(true);
  const [className, setClassName] = useState("inactive");

  ///Every time when toggleState change this hook will be executed
  useEffect (()=> {
    let newClass = "";
    let isActive = !toggleState;
    if (isActive) {
      newClass = "active";
    } else {
      newClass = "inactive";
    }
    setClassName (newClass);
    props.onChange(isActive);
  }, [toggleState]);

  let classToApply;
  if (extraClass) {
    classToApply = `toggle-button ${extraClass} ${className}`;
  } else {
    classToApply = `toggle-button ${className}`;
  }

  return (
    <Tooltip placement="bottomRight" title={tooltip}>
      <div className={classToApply} onClick={ ()=> {setToggleState(!toggleState)}}>
        {props.children}
      </div>
    </Tooltip>
  );
};

export default ToggleButton;
