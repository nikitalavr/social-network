import React from "react";
import { UserProfileType } from "../../../api/api";
import style from "./Profile.module.css";
import github from "./../../../assets/logos/github.png";
import instagram from "./../../../assets/logos/instagram.png";
import vk from "./../../../assets/logos/vk.svg";
import facebook from "./../../../assets/logos/facebook.png";
import twitter from "./../../../assets/logos/twitter.jpg";



type ProfileInfoPropsType = {
  userProfile: UserProfileType;
};

export default function ProfileInfo(props: ProfileInfoPropsType) {
  return (
    <div>
      <div className={style.ava_description}>
        <div className={style.avatar}>
          <img src={props.userProfile.photos.large} alt="avatar" />
        </div>
        <div className={style.description}>
          <div>{props.userProfile.fullName}</div>
          <div>{props.userProfile.lookingForAJobDescription}</div>
          <div>{props.userProfile.contacts.github}</div>
          <div>
            <a href={"https://" + props.userProfile.contacts.github} className={style.logoImg}>
              <img src={github} alt="github" className={style.logoImg} />
            </a>
            <a href={"https://" + props.userProfile.contacts.instagram}>
              <img src={instagram} alt="instagram" className={style.logoImg} />
            </a>
            <a href={"https://" + props.userProfile.contacts.vk}>
              <img src={vk} alt="github" className={style.logoImg} />
            </a>
            <a href={"https://" + props.userProfile.contacts.facebook}>
              <img src={facebook} alt="github" className={style.logoImg} />
            </a>
            <a href={"https://" + props.userProfile.contacts.twitter}>
              <img src={twitter} alt="github" className={style.logoImg} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
