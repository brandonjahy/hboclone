import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useStateContext } from '../../HBOProvider';
import { useRouter } from 'next/router';
import ls from 'local-storage';


const Login = () => {
  const globalState = useStateContext();
  const router = useRouter();
  const [loadingUsers, setLoadingUsers] = useState(false)
  let users = ls('users') !== null ? ls('users') : []

  useEffect(() => {
    if(users < 1) {
      setLoadingUsers(false)
    }
    console.log('load users', users)
  }, [])

  console.log('declared users', users)
  const selectUser = () => {
    ls('activeUID', id)
    router.push('/')
  }
  const showUsers = () => {
    if(loadingUsers) {
      return users.map((user) => {
        return(
          <div className="login-user__user-box">
            <img className="login-user__user-img" src="https://uifaces.co/our-content/donated/vIqzOHXj.jpg" />
            <div className="login-user__user-name">{globalState.test}</div>
          </div>
        )
      })
    }
  }

  return (
      <div className="login-user">
        <div className="login-user__top">
          <div className="login-user__logo"/>
          <span className="login-user__title">
            Who Is Watching?
          </span>
        </div>

        <div className="login-user__form">
          {showUsers()}
        </div>
        <div className="login-user__buttons">
          <button className="login-user__adult">Add Adult</button>
          <button className="login-user__kid">Add Kid</button>
        </div>
      </div>
  )
}

export default Login;
