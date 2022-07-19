import React, {useState} from 'react';
import {Link} from 'react-router-dom';
function Dropdown(props) {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const submenus = props.submenus;

    return (
        <ul
            onClick={handleClick}
            className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
        >
            {submenus.map((subNav, index) => (
                <div className={subNav.menuName}>
                    <li key={index} className='dropdown-links'>
                        <Link
                            className={subNav.cName}
                            to={subNav.path}
                            onClick={() => setClick(false)}
                        >
                            {subNav.title}
                        </Link>
                    </li>
                </div>
            ))}
        </ul>
    );
}

export default Dropdown;