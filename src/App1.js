import React from "react";

let lastScrollY = 0;
let ticking = false;

class App1 extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    //window.addEventListener("scroll", this.handleScroll, true);
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll(event) {
    // const { scrollHeight, scrollTop, clientHeight } = event;
    // console.log("the scroll things", scrollHeight, scrollTop, clientHeight);
    console.log(event);
  }

  //nav = React.createRef();

  /*  handleScroll = () => {
    lastScrollY = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        this.nav.current.style.top = `${lastScrollY}px`;
        ticking = false;
      });

      ticking = true;
    }
  }; */

  render() {
    return (
      <div>
        <p> scroll</p>
      </div>
    );
  }
}

export default App1;
