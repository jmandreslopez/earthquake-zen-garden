import React, { useContext } from 'react';
import MemberProfile from '../components/member/MemberProfile';
import Headline from '../components/UI/Headline';
import DataContext from '../store/data-context';

const Profile = () => {
    const profile = useContext(DataContext)?.profile;

    return (
        <div className="container">
            <Headline title="Profile" />
            <MemberProfile
                avatar={profile.avatarImage}
                firstName={profile.firstName}
                lastName={profile.lastName}
                phone={profile.phone}
                email={profile.email}
                bio={profile.bio}
            />
        </div>
    );
};

export default Profile;
