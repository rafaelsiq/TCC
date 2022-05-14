import React from 'react';
import HomeHeader from '../../molecules/homeHeader/home-header';
import MenuHeader from '../../molecules/menuHeader/menuheader';

function MenuTemplate() {

    return (
        <>   
        {localStorage.getItem('userId') &&
            <div
                variant="outlined"
                style={{
                    paddingLeft: '5%',
                    paddingRight: '5%',
                    paddingTop: '10px'
                }}>
                <HomeHeader />
                <MenuHeader />
            </div>
        }</>
    );
}

export default MenuTemplate;
