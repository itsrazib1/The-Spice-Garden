import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Tooltip } from 'react-tippy';
import { AuthContext } from '../../providers/AuthProviders';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log('log out successful');
      })
      .catch(error => {
        console.log(error);
      })
  }
  return (
    <>
      {/* add new one */}
      <div className='md:px-32'>
        <div className="navbar bg-green-100 rounded-3xl">
          <div className="navbar-start">
            <div className="dropdown">
              {/* toggle button in small screen */}
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <NavLink
                    to="/recipes"
                    className={({ isActive, isPending }) =>
                      isActive ? "font-bold decoration-stone-950" : ""
                    }
                  >
                    Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/blogs"
                    className={({ isActive, isPending }) =>
                      isActive ? "font-bold decoration-stone-950 " : ""
                    }
                  >
                    Blogs
                  </NavLink>
                </li>
              </ul>
            </div>
            <Link to='/' className="btn btn-ghost normal-case text-xl md:text-3xl hover:bg-green-500">
              The Spice Garden
            </Link>
          </div>
          {/* center buttons in large screen */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isActive ? "font-bold text-white bg-red-800 px-10 mx-5" : "mx-5 px-10"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/recipes"
                  className={({ isActive, isPending }) =>
                    isActive ? "font-bold text-white bg-red-800 px-10 mx-5" : "mx-5 px-10"
                  }
                >
                  Recipes
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blogs"
                  className={({ isActive, isPending }) =>
                    isActive ? "font-bold text-white bg-red-800 px-10 mx-5" : "mx-5 px-10"
                  }
                >
                  Blogs
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            {user ?
              /* profile picture start */
              <div className="dropdown dropdown-end">
                <Tooltip title="Hello, user!">
                  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                      <img src="https://i.ibb.co/51StNHm/Lobster-Risotto.jpg" />
                    </div>
                  </label>
                </Tooltip>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  <li>
                    <Link to='/user-profile'>
                      Profile
                    </Link>
                  </li>
                  <li>
                    <button onClick={handleLogOut}>Log out</button>
                  </li>
                </ul>
              </div>
              /* profile picture end */
              :
              <>
                <Link to='/access/login' className="btn btn-ghost px-5 py-0">
                  login
                </Link>
              </>
            }
          </div>
        </div>
      </div >
    </>
  );
};

export default Header;