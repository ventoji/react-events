import React from "react";

export class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  componentDidMount() {
    if (this.state.open) {
      document.body.style.overflow = "hidden";
    }
  }

  componentWillUnmount() {
    document.body.style.overflow = "unset";
  }

  render() {
    const { style } = this.state;
    return (
      <React.Fragment>
        {this.props.showAt ? (
          this.props.show ? (
            <div
              style={style}
              className={`${this.props.sectionName} ${
                modalTypeStyle ? modalTypeStyle : styles.modalWhite
              } ${modalTypeSize ? modalTypeSize : styles.modalSmall} ${
                !this.props.showAt ? styles.modalWhiteFixed : ""
              }`}
            >
              {this.props.arrowShape ? (
                <div
                  className={
                    arrowTypeStyle
                      ? arrowTypeStyle
                      : styles.triangleToprightWhite
                  }
                />
              ) : null}
              {this.props.children}
            </div>
          ) : null
        ) : this.props.show ? (
          <div className={`${this.props.className} ${styles.modal}`}>
            <div
              style={style}
              className={`${this.props.sectionName} ${
                modalTypeStyle ? modalTypeStyle : styles.modalWhite
              } ${modalTypeSize ? modalTypeSize : styles.modalSmall} ${
                !this.props.showAt ? styles.modalWhiteFixed : ""
              }`}
            >
              {this.props.arrowShape ? (
                <div
                  className={
                    arrowTypeStyle
                      ? arrowTypeStyle
                      : styles.triangleToprightWhite
                  }
                />
              ) : null}
              {this.props.children}
            </div>
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}
