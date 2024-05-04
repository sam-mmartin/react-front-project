import React from 'react';
import Profile from '../profile';
import ButtonFollow from '../button-follow';
import DescriptionCenter from '../description';
import TabNav from '../tabs/tab-nav';
import TabContent from '../tabs/tab-content';
import TabContentProps from '../tabs/models/tab-content-props';

const Section = () => {
    const tabContentProps: TabContentProps = {
        languagesList: [
            {
                id: '1',
                title: 'C',
                label: 'Agosto 2014',
                imageSrc: '/static/img/developer/c-language.jpg',
            },
        ],
    };
    return (
        <div className="main main-raised">
            <div className="profile-content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 ml-auto mr-auto">
                            <Profile />
                            <ButtonFollow />
                        </div>
                    </div>

                    <DescriptionCenter />
                    <TabNav />
                    <TabContent {...tabContentProps} />
                </div>
            </div>
        </div>
    );
};

export default Section;
