import React from 'react';
import Header from '../../molecules/homeHeader/home-header'
import InitialContent from '../../organisms/InitialContent/initial-content';

function InitialTemplate() {
    return (<>
        <div
            style={{
                paddingLeft: '5%',
                paddingRight: '5%',
            }}>
            <Header />
        </div>
        <InitialContent />
    </>
    );
}

export default InitialTemplate;
