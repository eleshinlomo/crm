
import React from 'react'

const login = () => {
  return (
    <div>login</div>
  )
}

export default login


// import { useEffect, useState } from 'react';

// import { GoogleLogin } from 'react-google-login';
// import { gapi } from 'gapi-script'
// import { getAccessToken } from '@/components/auth';



// const Login = () => {

//     const [initialAccessToken, setInitialAccessToken] = useState(null)
    
//     const clientId = "564029075525-okibkfj0rch1cql74vh9pnnhcu96sphv.apps.googleusercontent.com"
    
//     const getInitialTokenFromGoogle = async (response: any) => {
     
//       const access_token = await response.tokenId;
//       if (access_token !== null) {
//         setInitialAccessToken(access_token)
//         console.log(`This is initial token ${initialAccessToken}`)
//       }
      
      
//       };

//       useEffect(() => {
//         const fetchAccessToken = async () => {
//           if (initialAccessToken) {
//             try {
//               const tokenResponse = await getAccessToken(initialAccessToken);
      
//               if (tokenResponse.access_token && tokenResponse.refresh_token) {
//                 console.log('Access Token:', tokenResponse.access_token);
//                 console.log('Refresh Token:', tokenResponse.refresh_token);
      
//                 // You can handle these tokens as needed, e.g., store them in a secure manner.
//               } else {
//                 console.error('Invalid token response:', tokenResponse);
//               }
//             } catch (error) {
//               console.error('Error fetching access token:', error);
//             }
//           }
//         };
      
//         fetchAccessToken();
//       }, [initialAccessToken]);
      

//   return (
//     <div>
//       <GoogleLogin
//         clientId = {clientId}
//         buttonText="Login with Google"
//         onSuccess={getInitialTokenFromGoogle}
//         onFailure={getInitialTokenFromGoogle}
//         cookiePolicy={"single_host_origin"}
//         isSignedIn={true}
//       />
//     </div>
//   )
// }

// export default Login