import React from 'react';
import List from 'semantic-ui-react/dist/commonjs/collections/Menu';
import './index.scss';

const menuList = ["JoIn US", "LOGIN", "MY PAGE", "BOARD", "Q&A"];

const GNB = ({item}) => (
    <div className="GNB">
        <List className="GNB__Inner" tabular>
            {menuList.map((item, i) => <List.Item key={i}>{item}</List.Item>)}
        </List>
    </div>
)

export default GNB;
