import React from 'react';
import Headline from '../UI/Headline';

const MemberProfile = (props) => {
    return (
        <div className="row">
            <div className="col-12 col-md-5 text-center text-md-end mb-4 mb-md-0">
                <img
                    src={props.avatar}
                    className="img-fluid"
                    alt="avatar"
                    width="225"
                />
            </div>
            <div className="col-12 col-md-7">
                <div className="row mb-1">
                    <div className="col-3 col-md-4">
                        <strong>First Name</strong>
                    </div>
                    <div className="col-9 col-md-8">
                        {props.firstName}
                    </div>
                </div>
                <div className="row mb-1">
                    <div className="col-3 col-md-4">
                        <strong>Last Name</strong>
                    </div>
                    <div className="col-9 col-md-8">
                        {props.lastName}
                    </div>
                </div>
                <div className="row mb-1">
                    <div className="col-3 col-md-4">
                        <strong>Phone</strong>
                    </div>
                    <div className="col-9 col-md-8">
                        {props.phone}
                    </div>
                </div>
                <div className="row mb-1">
                    <div className="col-3 col-md-4">
                        <strong>Email</strong>
                    </div>
                    <div className="col-9 col-md-8">
                        {props.email}
                    </div>
                </div>
                <div className="row">
                    <div className="col-3 col-md-4">
                        <strong>Bio</strong>
                    </div>
                    <div className="col-9 col-md-8">
                        {props.bio}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberProfile;
