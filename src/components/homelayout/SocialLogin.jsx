import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { use, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../provider/AuthProvider";



const SocialLogin = () => {

  

const auth = getAuth()
// github singIn
const handleGithubLogin =()=>{
const GithubProvider = new GithubAuthProvider();
signInWithPopup(auth, GithubProvider)
.then(result =>{
  console.log(result,auth);

})
.then(error =>{
  console.log(error);
})
}
// google singIn 
const handleLogin =()=>{
  const GoogleProvider = new GoogleAuthProvider();

  signInWithPopup(auth, GoogleProvider)
  .then(result => {
    console.log(result)
    
  })
  .catch(e =>{
    console.log(e);
    
  })
}
const { user, logOut } = use(AuthContext);


  return (
    <div>
      <h2 className="font-bold mb-5">Login With</h2>
      <div className="space-y-3">
        {
          user ? (''): (<>
          <button onClick={handleLogin} className="btn btn-secondary btn-outline w-full">
        <FcGoogle size={24} /> 
        Login with Google
        </button>
        <button onClick={handleGithubLogin} className="btn btn-outline btn-primary w-full">
          <FaGithub size={24} /> Login with Github
        </button>
          </>)
        }
      </div>
    </div>
  );
};

export default SocialLogin;
