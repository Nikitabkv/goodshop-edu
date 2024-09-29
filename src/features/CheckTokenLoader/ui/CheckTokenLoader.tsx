import s from './CheckTokenLoader.module.scss'
import {FC, ReactNode, useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {useGetUserInfoQuery} from "../../../pages/LoginPage/model/api.ts"
import {getCartByUser} from "../../../pages/Cart/model/cartAsyncThunk.ts"
import {useAppDispatch} from "../../../App/store/hooks.ts"
import {setUserData} from "../../../pages/Cart/model/cart.slice.ts"
import {toast} from "react-toastify";

function isErrorWithMessage(
  error: unknown,
): error is { data: { message: string }} {
  return (
    typeof error === 'object' &&
    error != null &&
    'data' in error &&
    typeof (error as any).data === 'object' &&
    'message' in (error as any).data &&
    typeof (error as any).data.message === 'string'
  )
}

export const CheckTokenLoader:FC<{children: ReactNode}> = ({children}) => {
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useAppDispatch()
  const [tokenIsChecked, setTokenIsChecked] = useState(false)
  const {data, error, isLoading} = useGetUserInfoQuery()

  useEffect(() => {
    if (!isLoading) {
      if (data) {
        dispatch(getCartByUser(data.id))
        dispatch(setUserData(data))
        setTokenIsChecked(true)
        if (location.pathname === '/login') {
          navigate('/')
        }
      }
      if (error) {
        if (isErrorWithMessage(error)) {
          toast.error(error.data.message)
        } else {
          toast.error('Auth error. Redirecting to the login page');
        }
        navigate('/login')
      }
    }
  }, [isLoading]);

  return (
    <>
      {tokenIsChecked || location.pathname === '/login' ? children :
        <div className={s.loader}></div>
      }
    </>
  )
}
