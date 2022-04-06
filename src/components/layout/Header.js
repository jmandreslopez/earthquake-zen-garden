import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DataContext from '../../store/data-context';

const Header = () => {
    const data = useContext(DataContext);
    const site = data?.site;
    const profile = data?.profile;

    return (
        <header className="px-4 py-3 mb-4 border-bottom bg-light shadow-sm">
            <div className="d-flex flex-wrap align-items-center justify-content-between">
                <Link to='/' className="d-flex align-items-center text-dark text-decoration-none">
                    <img
                        className="h-10 w-auto"
                        src={site?.logoImage}
                        height="40"
                        alt="logo"
                    />
                </Link>
                <h2 className="d-none d-md-block fw-bold m-0">
                    <Link to='/' className='text-decoration-none text-gray'>{site?.title}</Link>
                </h2>
                <Link to='/profile'>
                  Welcome {profile?.firstName || 'User'}
                </Link>
            </div>
        </header>
    );
};

export default Header;
