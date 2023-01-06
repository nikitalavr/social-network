import React from "react";
import { UserProfileType } from "../../../api/api";
import style from "./UserProfile.module.css";
import github from "./../../../assets/logos/github.png";
import instagram from "./../../../assets/logos/instagram.png";
import vk from "./../../../assets/logos/vk.svg";
import facebook from "./../../../assets/logos/facebook.png";
import twitter from "./../../../assets/logos/twitter.jpg";
import defaultAva from "./../../../assets/defaults/default_avatar.jpeg";
import { Contacts } from "./Contacts";
import { useAppDispatch, useAppSelector } from "../../../redux/redux-store";
import { setUserProfilePhotoTC } from "../../../redux/profile-reducer";

type ProfileInfoPropsType = {
  userProfile: UserProfileType;  
  savePhoto: (photo: File) => void
};

export default function ProfileInfo(props: ProfileInfoPropsType) {
  const logos: any = {
    github: [github, props.userProfile.contacts.github],
    facebook: [facebook, props.userProfile.contacts.facebook],
    vk: [vk, props.userProfile.contacts.vk],
    twitter: [twitter, props.userProfile.contacts.twitter],
    instagram: [instagram, props.userProfile.contacts.instagram],
  };
  const dispatch = useAppDispatch()
  const loggedInUser = useAppSelector(state => state.login.userId)
  const keys = Object.keys(logos);

  const contactsInstances = [];

  for (let i = 0; i < keys.length; i++) {
    let contact = {
      name: keys[i],
      logo: logos[keys[i]][0],
      url: logos[keys[i]][1],
      id: i,
    };
    contactsInstances.push(contact);
  }

  const contactsToRender = contactsInstances.map((c) => (
    <Contacts key={c.id} name={c.name} logo={c.logo} url={c.url} />
  ));

  const avatarPhotoSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files?.length){
      dispatch(setUserProfilePhotoTC(e.currentTarget.files[0]))
    }
  }
  return (
    <div>
      <div className={style.ava_description}>
        <div className={style.avatar}> 
          <img
            src={
              props.userProfile.photos.large
                ? props.userProfile.photos.large
                : defaultAva
            }
            alt="avatar"
          />
          {props.userProfile.userId === loggedInUser && <input type={"file"} onChange={avatarPhotoSelected}/>}
        </div>
        <div className={style.description}>
          <div>{props.userProfile.fullName}</div>
          <div>{props.userProfile.lookingForAJobDescription}</div>
          <div>{props.userProfile.contacts.github}</div>
          <div>Contacts: </div>
          <div>{contactsToRender}</div>
        </div>
      </div>
    </div>
  );
}
