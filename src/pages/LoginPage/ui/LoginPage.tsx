import s from './LoginPage.module.scss'
import Container from "../../../shared/ui-kit/Container"
import Title from "../../../shared/ui-kit/Title"
import ButtonWithChild from "../../../shared/ui-kit/ButtonWithChild"
import {useEffect, useState} from "react"
import {useLoginMutation} from "../model/api.ts"
import {toast} from "react-toastify"
import {useNavigate} from "react-router-dom"
import {useAppDispatch} from "../../../App/store/hooks.ts";
import {setUserData} from "../../Cart/model/cart.slice.ts";


export const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch()
  const [username, setUsername] = useState<string>('williamg')
  const [password, setPassword] = useState<string>('williamgpass')
  const [login, {isLoading, error, data}] = useLoginMutation()

  useEffect(() => {
    if (data) {
      localStorage.setItem('TOKEN', data.accessToken)
      dispatch(setUserData(data))
      toast.success('Login successful. Redirecting to the home page')
      navigate('/')
    }
    if (error) {
      toast.error('Incorrect login or password')
    }
  }, [error, data]);

  return (
    <>
      <main className={s.loginPage}>
        <Container containerClassName={s.loginContainer}>
          <Title tag={'h1'}>Sign in</Title>
          <div className={s.loginForm}>
            <input className={s.input} type="text" placeholder={'Login'} value={username}
                   onChange={(e) => setUsername(e.target.value)}/>
            <input className={s.input} type="password" placeholder={'Password'} value={password}
                   onChange={(e) => setPassword(e.target.value)}/>
            <ButtonWithChild disabled={isLoading} className={s.logInButton}
                             clickHandler={() => login({username, password})}>
            <span className={s.logInText}>
              {isLoading ? 'Loading...' : 'Sign in'}
            </span>
            </ButtonWithChild>
          </div>
        </Container>
      </main>
    </>
  )
}
