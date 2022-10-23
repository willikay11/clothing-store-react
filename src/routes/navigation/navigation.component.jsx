import {Link, Outlet} from 'react-router-dom'
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import './navigation.styles.scss';

const Navigation = () => {
  return (
      <>
          <div className="navigation">
              <Link className="logo-container" to="/">
                  <CrownLogo />
              </Link>
              <div className="nav-links-container">
                  <Link class="nav-link" to="/shop">
                      Shop
                  </Link>
                  <Link className="nav-link" to="/sign-in">
                      Sign In
                  </Link>
              </div>
          </div>
          <Outlet />
      </>
  )
}

export default Navigation;