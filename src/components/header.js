import React from "react";
import CustomForm from "./customForm";
import { Link } from "gatsby";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNav: false,
      isSticky: false,
      showHeader: true
    };
  }

  componentDidMount() {
    this.prev = window.scrollY;
    window.addEventListener("scroll", e => this.handleNavigation(e));
    window.addEventListener("scroll", this.onScroll.bind(this));
  }

  handleNavigation = e => {
    const window = e.currentTarget;

    if (this.prev > window.scrollY) {
      this.setState({
        showHeader: true
      });
    } else if (this.prev < window.scrollY && window.pageYOffset > 180) {
      this.setState({
        showHeader: false
      });
    }
    this.prev = window.scrollY;
  };

  onScroll = () => {
    let offset = 150;

    if (!this.state.isSticky && window.pageYOffset >= offset) {
      this.setState({
        isSticky: true
      });
    } else if (this.state.isSticky && window.pageYOffset < offset) {
      this.setState({
        isSticky: false
      });
    }
  };

  toggleNav = () => {
    this.setState({
      mobileNav: !this.state.mobileNav
    });
  };

  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
        </ul>
        <CustomForm />
      </div>
    );
  }
}
