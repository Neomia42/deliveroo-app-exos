import logoTeal from "../assets/img/logo-teal.svg";

const Header = (props) => {
  const { name, img, description } = props;
  return (
    <header>
      <div className="header-content">
        <div className="header-content--center">
          <img className="header-logo" src={logoTeal} alt="logo deliveroo" />
        </div>
      </div>
      <div className="resto-infos">
        <div className="resto-details">
          <h1 className="resto-name">{name}</h1>
          <p>{description}</p>
        </div>
        <div className="resto-img">
          <img src={img} alt="image-menu-restaurant" />
        </div>
      </div>
    </header>
  );
};

export default Header;
