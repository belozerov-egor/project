import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import {ProfileStatusHooks} from "./ProfileStatus/ProfileStatusHook";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.profileBlock}>
            <div>
            <img src={props.profile.photos.large}/>
                <ProfileStatusHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
            <div className={s.profileInfo}>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>
                <div>
                    <ul>
                        <li>
                            <a target="_blank">{props.profile.contacts.facebook}</a>
                        </li>
                        <li>
                            <a target="_blank">{props.profile.contacts.website}</a>
                        </li>
                        <li>
                            <a target="_blank">{props.profile.contacts.vk}</a>
                        </li>
                        <li>
                            <a target="_blank">{props.profile.contacts.twitter}</a>
                        </li>
                        <li>
                            <a target="_blank">{props.profile.contacts.instagram}</a>
                        </li>
                        <li>
                            <a target="_blank">{props.profile.contacts.youtube}</a>
                        </li>
                        <li>
                            <a target="_blank">{props.profile.contacts.github}</a>
                        </li>
                        <li>
                            <a  target="_blank">{props.profile.contacts.mainLink}</a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}


export default ProfileInfo;