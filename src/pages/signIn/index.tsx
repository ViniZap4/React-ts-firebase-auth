import { useState } from "react";
import "./styles.scss"

import {GoogleLogo, GithubLogo} from 'phosphor-react'

import {GoogleAuthProvider, signInWithPopup, User, GithubAuthProvider} from 'firebase/auth';
import { auth } from "../../Services/firebase";

export function SignIn(){
  const [user, setUser] = useState<User>({} as User);
  

  function handleGoogleSignIn(){
    const provider = new GoogleAuthProvider();
    
    signInWithPopup(auth, provider)
    .then((result)=>{
      setUser(result.user)
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  function handleGitHubSignIn(){
    const provider = new GithubAuthProvider();
    
    signInWithPopup(auth, provider)
    .then((result)=>{
      setUser(result.user)
    })
    .catch((error)=>{
      console.log(error);
    })

  }

  return (
    <div className="container">
      <div className="user">
        {user.photoURL && <img src={user.photoURL} alt="Foto do usuario"/>}
        <strong>{user.displayName}</strong>
        <small>{user.email}</small>
      </div>

      <h1>Acesse sua conta</h1>

      <span>
        Utilizando autenticação social por exemplo, autenticação com o Google você <br />
        facilita a vida do usuário permitindo utilizar sua aplicação sem fazer cadastro.
      </span>

      <button type="button" className="button" onClick={handleGoogleSignIn}>
        <GoogleLogo />
        Entrar com o Google.
      </button>
      <button type="button" className="button" onClick={handleGitHubSignIn}>
        <GithubLogo />
        Entrar com o GitHub
      </button>
      
    </div>
  );
}