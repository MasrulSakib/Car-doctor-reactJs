import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { JwtAuthToken } from '../../API/Api';

const SocialLogin = () => {
    const { googleLogin } = useContext(AuthContext)

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                console.log(user);
                JwtAuthToken(user);
            })
            .catch(error => console.error(error));
    }

    return (
        <div className='flex justify-center items-center my-3'>
            <button onClick={handleGoogleLogin} className='btn btn-warning'>Login Via Google</button>
        </div>
    );
};

export default SocialLogin;