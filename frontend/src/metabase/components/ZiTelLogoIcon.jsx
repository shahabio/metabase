import React, {Component} from "react";
import PropTypes from "prop-types";
import cx from "classnames";

export default class ZiTelLogoIcon extends Component {
  static defaultProps = {
    size: 32,
  };

  static propTypes = {
    size: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    dark: PropTypes.bool,
  };

  render() {
    const {dark, height, width, size} = this.props;
    return (

      <svg
        className={cx("Icon", {"text-brand": !dark}, {"text-white": dark})}
        viewBox="0 0 84.4 138.3"
        width={width || size}
        height={height || size}
        fill="currentcolor"
      >
        <g>
          <polygon className="st0" points="12.6,18.4 18.7,29 75,47.2 75,38.7 	"/>
          <polygon className="st0" points="23.1,36.5 29.2,47.2 54.1,54.9 54.1,46.4 	"/>
          <path id="XMLID_1_" className="st0" d="M1.1,91.5C0.8,92,0,91.7,0,91.1V89c0.1-5.5,3.6-10.3,8.7-12.2c0,0,64.6-23.8,69.3-25.6
		c2.7-1,4.3-2.5,5.2-3.8c0.3-0.5,1.1-0.3,1.1,0.4v1.5c-0.1,5.2-3.4,9.9-8.4,11.7C76,61,13.3,84,7.5,86.2C4.2,87.5,2.2,89.8,1.1,91.5
		"/>
          <path className="st0" d="M76.2,24.9L2,0l6.1,10.6l65.5,21.9c2.2,0.7,2.3,2.7,2.3,3.3s-0.1,2.5-2.3,3.3L9,62.1c-5.4,1.9-8.9,7-9,12.7v2
		c0,0.6,0.8,0.8,1.1,0.3c1-1.6,2.7-3.7,5.6-4.8c5.3-2,69.7-25.7,69.7-25.7c4.6-1.7,7.6-6,7.6-10.9C83.9,30.8,80.9,26.6,76.2,24.9z"
          />
          <polygon className="st0" points="54.6,91.1 30.1,83.8 30.1,92.3 60.4,101.2 	"/>
          <polygon className="st0" points="64.7,108.8 9.2,91.5 9.2,100 70.9,119.4 	"/>
          <path className="st0" d="M10.6,106.1c-2.2-0.7-2.3-2.7-2.3-3.3c0-0.6,0.1-2.5,2.3-3.3l64.7-23.1c5.4-1.9,8.9-7,9-12.7V62
		c0-0.6-0.8-0.9-1.2-0.3c-1,1.6-2.7,3.6-5.6,4.7C72.1,68.3,7.8,92,7.8,92c-4.6,1.7-7.6,6-7.6,10.9s3.1,9.2,7.7,10.8l73.8,24.6
		l-6.1-10.6L10.6,106.1z"/>
        </g>
      </svg>
    );
  }
}
