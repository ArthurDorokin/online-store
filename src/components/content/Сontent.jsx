import React from 'react';
import ContentItem from "./ContentItem";
import './content.css';
import {contentList} from '../constants.js';

const Content = () => (
    <div className="container">
        <div className="content">
            <div className="wrapper-product">
                {contentList.content.map((item) => <ContentItem key={item.id} {...item}/>)}
            </div>
        </div>
    </div>
);

export default Content;