import React, { useEffect, useState } from 'react';
import Profile from '../profile';
import ButtonFollow from '../button-follow';
import DescriptionCenter from '../description';
import TabNav from '../tabs/tab-nav';
import TabContent from '../tabs/tab-content';
import Languages from '../../models/languages';
import http from '../../config/http';
import User from '../../models/user';

const Section = () => {
    const [user, setUser] = useState<User>({} as User);
    const [languages, setLanguages] = useState<Languages[]>([]);

    useEffect(() => {
        http.get<User>('users/name/Sam M. Martin').then((res) => {
            setUser(res.data);
        });

        http.get<Languages[]>('languages').then((res) => {
            setLanguages(res.data);
        });
    }, []);

    return (
        <div className="main main-raised">
            <div className="profile-content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 ml-auto mr-auto">
                            <Profile user={user} />
                            <ButtonFollow />
                        </div>
                    </div>

                    <DescriptionCenter />
                    <TabNav />
                    <TabContent languages={languages} />
                </div>
            </div>
        </div>
    );
};

export default Section;
