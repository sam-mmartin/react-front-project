import React from 'react';
import TabButton from '../tab-button';
import TabButtonProps from '../models/tab-button-props';

const TabNav = () => {
    const tabsProps: TabButtonProps[] = [
        {
            tabName: 'Competências',
            iconName: 'developer_mode',
            href: '#work',
            active: 'active',
        },
        {
            tabName: 'Portfólio',
            iconName: 'computer',
            href: '#portfolio',
        },
        {
            tabName: 'Curriculum',
            iconName: 'book',
            href: '#curriculum',
        },
    ];

    return (
        <div className="row">
            <div className="col-md-6 ml-auto mr-auto">
                <div className="profile-tabs">
                    <ul className="nav nav-pills nav-pills-icons justify-content-center" role="tablist">
                        {tabsProps.map((item) => {
                            return (
                                <li key={item.tabName} className="nav-item">
                                    <TabButton {...item} />
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TabNav;
