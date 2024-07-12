import Logo from '../../assets/svg/Logo';
import './Header.css'

const Header = () => {
  return (
    <header>
      <div><Logo/></div>
      <nav>
        <div className='nav-tags'>
          <a href="#">Home</a>
          <a href="">About</a>
          <a href="">Team</a>
          <a href="">Process</a>
          <a href="">Pricing</a>
          <a href="">Blog</a>
        </div>
        <button className='contact-button'>Contact Us</button>
      </nav>
    </header>
  );
};

export default Header;
