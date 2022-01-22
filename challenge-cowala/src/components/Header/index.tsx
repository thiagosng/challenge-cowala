import React from 'react';
import { Head, Logo } from './styles';

import LogoImage from '../../assets/LogoCS.png';



const Header = () => {
    return (
            <Head>
                <Logo src={LogoImage} alt="Logo" />
            </Head>
    );
}

export default Header;