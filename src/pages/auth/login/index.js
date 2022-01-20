// import React from 'react'
// import Button from '@mui/material/Button';
// import { setSession } from '../../../session_manager/cookie';
// import AppDispatcher from '../../../redux/dispatchers/appDispatcher';

// function Login() {

//   const loginAction = () => {
//     setSession("user-token", "4739479nm,bfdshf9832rgh32erbdslfhp93")
//     AppDispatcher.setUserLoggedIn({token: "4739479nm,bfdshf9832rgh32erbdslfhp93"})
//   }

//   return (
//     <div>
//       <h1>Login</h1>
//       <h1>{process.env.NEXT_PUBLIC_ENV}</h1>
//       <Button variant="contained" onClick={loginAction}>
//         Test Button
//       </Button>
//     </div>
//   )
// }

// export default Login

import React from 'react'
// import firebase from 'firebase'
import { auth,provider } from '../../../firebase'
import Button from '@mui/material/Button';




function Login() {
    function signInWithGoogle() {
        // const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
    return(
        <Button onClick={signInWithGoogle}>Sign In With Google</Button>
    )
}
export default Login;


