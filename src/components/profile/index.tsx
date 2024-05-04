import React from 'react';

const Profile = () => {
    return (
        <div className="profile">
            <div className="avatar">
                <img src="/static/img/faces/perfil.jpg" alt="Perfil" className="img-raised rounded-circle img-fluid" />
            </div>
            <div className="name">
                <h3 className="title">Sam M. Martin</h3>
                <h6>Developer</h6>
                <a href="#pablo" className="btn btn-just-icon btn-link btn-dribbble">
                    <i className="fa fa-dribbble"></i>
                </a>
                <a href="#pablo" className="btn btn-just-icon btn-link btn-twitter">
                    <i className="fa fa-twitter"></i>
                </a>
                <a href="#pablo" className="btn btn-just-icon btn-link btn-pinterest">
                    <i className="fa fa-pinterest"></i>
                </a>
            </div>
        </div>
    );
};

export default Profile;
