import React, { Children } from "react";
import { Tooltip } from 'antd';
import "./toogleButton.scss";

class ToggleButton extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      active : false,
      className: "inactive"
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    let newClass = "";
    let isActive = !this.state.active;
    if (isActive) {
      newClass = "active"
    }
    else  {
      newClass = "inactive"
    }
    this.setState({ active: isActive, className: newClass });
    this.props.onChange(isActive);
  }



  render() {
    const { icon, extraClass } = this.props;
    let classToApply;

    if (extraClass) {
      classToApply= `toggle-button ${extraClass} ${this.state.className}`
    }
    else  {
      classToApply= `toggle-button ${this.state.className}`
    }

    return (
      <Tooltip placement="bottomRight" title={this.props.tooltip}>
        <div className = {classToApply} onClick={this.onClick}>
        {this.props.children}
      </div>
      </Tooltip>

      
    );
  }
}

export default ToggleButton;
