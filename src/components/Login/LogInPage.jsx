import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { firebase } from '@firebase/app';
import '@firebase/auth';
import './LogIn.css';
import pic from '../images/logos/logo-min.png';
import gPic from './google.png';
import firebaseConfig from './firebase.config';
import { Link, useHistory, useLocation } from 'react-router-dom';
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const LogInPage = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        let { from } = location.state || { from: { pathname: '/' } };
        firebase
            .auth()
            .signInWithPopup(provider)
            .then(function (result) {
                var user = result.user;
                console.log(user);
                const userDetails = {
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL,
                    isLogin: true,
                };
                setLoggedInUser(userDetails);
                history.replace(from);
                token();
            })
            .catch(function (error) {
                console.log(error.massage);
            });
    };
    return (
        <div id="login" className="d-flex justify-content-center ">
            <div className="image">
                <Link to="/home">
                    <img src={pic} alt="" width="202px" height="60px" />
                </Link>
            </div>

            {
                <div className="googleLogin row text-center ">
                    <div className="col-sm-12 gLogin">
                        <h2>Login With</h2>
                        <br />
                        <span className="d-flex justify-content-center ">
                            <div
                                onClick={handleGoogleSignIn}
                                className="style"
                                style={{ cursor: 'pointer' }}
                            >
                                <img
                                    src={gPic}
                                    alt=""
                                    height="30px"
                                    style={{
                                        float: 'left',
                                        borderRadius: '10px',
                                    }}
                                />
                                <p
                                    style={{
                                        display: 'inline',
                                        margin: '0 5px',
                                    }}
                                >
                                    Continue with Google
                                </p>
                            </div>
                        </span>

                        <br />
                        <p>
                            Don't have an account?&nbsp;
                            <span style={{ color: 'blue', cursor: 'pointer' }}>
                                Create an Account
                            </span>
                        </p>
                    </div>
                </div>
            }
        </div>
    );
};

const token = () => {
    firebase
        .auth()
        .currentUser.getIdToken(/* forceRefresh */ true)
        .then(function (idToken) {
            sessionStorage.setItem('token', idToken);
        })
        .catch(function (error) {
            console.log(error);
        });
};

export default LogInPage;
