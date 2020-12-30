import React from 'react';
import './Widgets.css';
import InfoIcon from "@material-ui/icons/Info";
import FibreManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {

    let newsArticle = (heading, subTitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FibreManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subTitle}</p>
            </div>
        </div>              
    );

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>

            {newsArticle('I am Back', 'Top News - 9999 readers')}
            {newsArticle('I am Back', 'Top News - 9999 readers')}
            {newsArticle('I am Back', 'Top News - 9999 readers')}
            {newsArticle('I am Back', 'Top News - 9999 readers')}
            {newsArticle('I am Back', 'Top News - 9999 readers')}
            {newsArticle('I am Back', 'Top News - 9999 readers')}
        </div>
    )
}

export default Widgets;
