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

type ProfileInfoPropsType = {
  userProfile: UserProfileType;
};


export default function ProfileInfo(props: ProfileInfoPropsType) {
  
  
  const logos:any = {
    "github": [github, props.userProfile.contacts.github],
    "facebook": [facebook, props.userProfile.contacts.facebook],
    "vk": [vk, props.userProfile.contacts.vk],
    "twitter": [twitter,props.userProfile.contacts.twitter],
    "instagram": [instagram, props.userProfile.contacts.instagram]
  }
  const keys = Object.keys(logos)
  
  const contactsInstances = []
  
  for (let i=0; i<keys.length; i++) {
    let contact = {
      name: keys[i],
      logo: logos[keys[i]][0],
      url:  logos[keys[i]][1],
      id: i
    }
    contactsInstances.push(contact)
  }
  
  const contactsToRender = contactsInstances.map(c => <Contacts key={c.id} name={c.name} logo={c.logo} url={c.url}/>)
  return (
    <div>
      <div className={style.ava_description}>
        <div className={style.avatar}>
          <img
            src={
              props.userProfile.photos.large !== null
                ? props.userProfile.photos.small
                : defaultAva
            }
            alt="avatar"
          />
        </div>
        <div className={style.description}>
          <div>{props.userProfile.fullName}</div>
          <div>{props.userProfile.lookingForAJobDescription}</div>
          <div>{props.userProfile.contacts.github}</div>
          <div>Contacts: </div>

          <div>
            {contactsToRender}
          </div>
        </div>
      </div>
    </div>
  );
}
