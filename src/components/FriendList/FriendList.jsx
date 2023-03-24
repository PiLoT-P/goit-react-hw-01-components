import PropTypes from "prop-types";
import FriendItem from "components/FriendItem/FriendItem";
import css from "./FriendList.module.css";

const FriendList = ({ friends }) => {
    return (
        <ul className={css.list}>
            {friends.map(({avatar, name, isOnline, id}) => {
                return (
                    <FriendItem
                        key={id}
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}
                    />
                )
            })}
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
};

export default FriendList;