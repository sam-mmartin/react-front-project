import React from 'react';
import User from '../../models/user';

const Profile = ({user}: {user: User}) => {
    return (
        <div className="profile">
            <div className="avatar">
                <img src="/static/img/faces/perfil.jpg" alt="Perfil" className="img-raised rounded-circle img-fluid" />
            </div>
            <div className="name">
                <h3 className="title">{user.name}</h3>
                <h6>{user.work}</h6>
                {
                    user.socialMedias?.map((item) => {
                        const classes = `btn btn-just-icon btn-link btn-${item.name.toLowerCase()}`;
                        const iconClasses = `fa fa-${item.name.toLowerCase()}`;

                        return (
                            <a href={item.link} className={classes} key={item.id} target='_blank' rel="noopener noreferrer">
                                <i className={iconClasses}></i>
                            </a>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Profile;
