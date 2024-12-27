import React, { useState } from 'react';

const Nav: React.FC = () => {
    const [active, setActive] = useState<string>('home');

    const handleNavClick = (navItem: string) => {
        setActive(navItem);
    };

    return (
        <nav>
            <ul>
                <li className={active === 'home' ? 'active' : ''} onClick={() => handleNavClick('home')}>Home</li>
                <li className={active === 'about' ? 'active' : ''} onClick={() => handleNavClick('about')}>About</li>
                <li className={active === 'contact' ? 'active' : ''} onClick={() => handleNavClick('contact')}>Contact</li>
            </ul>
        </nav>
    );
};

export default Nav;