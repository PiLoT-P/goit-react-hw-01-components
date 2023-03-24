import PropTypes from "prop-types";
import css from "./FriendItem.module.css";

const FriendItem = ({avatar, name, isOnline}) => {
    return (
        <li className={css.item}>
            <span className={isOnline ? css.active : css.disabled}></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
    ); 
};

FriendItem.protoTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

export default FriendItem;