import FriendListItem from "components/FriendListItem/FriendListItem";
import {Friends} from "./FriendList.styled";

const FriendList = ({
    friends,
}) => {
    return (
        <Friends>
            {friends.map(({avatar, name, isOnline, id}) =>
            <FriendListItem
                key={id}
                status={isOnline}
                avatar={avatar}
                name={name}
                />
             )}
        </Friends>
    )
}

export default FriendList;