import { useContext } from "react";
import {Link, Outlet} from 'react-router-dom'
import { signOutAuthUser } from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../context/user.context";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
      <>
          <div className="navigation">
              <Link className="logo-container" to="/">
                  <CrownLogo />
              </Link>
              <div className="nav-links-container">
                  <Link className="nav-link" to="/shop">
                      Shop
                  </Link>
                  {
                      currentUser ? (
                          <span className="nav-link" onClick={signOutAuthUser}>Sign Out</span>
                      ) : (
                          <Link className="nav-link" to="/auth">
                              Sign In
                          </Link>
                      )
                  }

              </div>
          </div>
          <Outlet />
      </>
  )
}

export default Navigation;