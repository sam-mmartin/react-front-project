import React from 'react';
import TabButtonProps from '../models/tab-button-props';

const TabButton = (props: TabButtonProps) => {
    const classes = `nav-link ${props.active}`;

    return (
        <a className={classes} href={props.href} role="tab" data-toggle="tab">
            <i className="material-icons">{props.iconName}</i>
            {props.tabName}
        </a>
    );
};

export default TabButton;
