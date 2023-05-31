
import './Header.css'
import logo from '../../../images/Logo.svg'

const Header = () => {
    return (
        <div className='header'>
           
            <img src={logo} alt="" />
        
            <div >
                
            <a href="">SHop</a>
            <a href="">Product</a>
            <a href="">About</a>
            </div>
        </div>
    );
};

export default Header;