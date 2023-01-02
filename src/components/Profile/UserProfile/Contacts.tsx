
import style from "./UserProfile.module.css";


type ContactsPropsType = {
    url: string
    logo: string
    name: string
};

export const Contacts = (props: ContactsPropsType) => {
    return (
        <div>
        <a
          href={"https://" + props.url}
          className={style.logoImg}
        >
          <img src={props.logo} alt={props.name} className={style.logoImg} />
        </a>
        <a href={"https://" + props.url}>{props.name}</a>
      </div>
    );
    
}