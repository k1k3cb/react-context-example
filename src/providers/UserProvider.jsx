import { useState } from 'react';
import { UserActiveContext } from '../contexts/UserActiveContext';

const UserProvider = ({ children }) => {
	const [userActive, setUserActive] = useState('');
	return (
		<UserActiveContext.Provider value={{ userActive, setUserActive }}>
			{children}
		</UserActiveContext.Provider>
	);
};

export default UserProvider;
