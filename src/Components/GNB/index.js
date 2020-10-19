import React from 'react';
import List from 'semantic-ui-react/dist/commonjs/collections/Menu';
import Sticky from 'semantic-ui-react/dist/commonjs/modules/Sticky';

import './index.scss';

const menuList = ["JoIn US", "LOGIN", "MY PAGE", "BOARD", "Q&A"];

const GNB = ({context}) => {

    return(
        <div className="GNB" > 
            <Sticky context={context}>
                <List className="GNB__Inner" tabular>
                    {menuList.map((item, i) => <List.Item key={i}>{item}</List.Item>)}
                </List>
            </Sticky>
        </div>
    )
}

export default GNB;
