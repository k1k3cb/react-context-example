import { useContext } from 'react';
import { StyledHeader } from './styles';
import { UserActiveContext } from '../../contexts/UserActiveContext';

const Header = () => {
	const { userActive, setUserActive }= useContext(UserActiveContext)
	return (
		<StyledHeader>
			<h1>Users Control</h1>
			{!userActive && <p>No user active</p>}
			{userActive && (
				<>
					<p>User Active: {userActive}</p>
					<button onClick={() => setUserActive('')}>Logout User</button>
				</>
			)}
		</StyledHeader>
	);
};

export default Header;
