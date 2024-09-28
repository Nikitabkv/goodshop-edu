import s from './CheckTokenLoader.module.scss'
import {FC, ReactNode, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useGetUserInfoQuery} from "../../../pages/LoginPage/model/api.ts"
import {getCartByUser} from "../../../pages/Cart/model/cartAsyncThunk.ts"
import {useAppDispatch} from "../../../App/store/hooks.ts"
import {setUserData} from "../../../pages/Cart/model/cart.slice.ts"
import {toast} from "react-toastify";

export const CheckTokenLoader:FC<{children: ReactNode}> = ({children}) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [tokenIsChecked, setTokenIsChecked] = useState(false)
  const {data, error, isLoading} = useGetUserInfoQuery()

  useEffect(() => {
    if (!isLoading) {
      if (data) {
        dispatch(getCartByUser(data.id))
        dispatch(setUserData(data))
        setTokenIsChecked(true)
      }
      if (error) {
        toast.error('Auth Error. Redirecting to the login page');
        navigate('/login');
      }
    }
  }, [isLoading]);

  return (
    <>
      {tokenIsChecked ? children :
        <div className={s.loader}></div>
      }
    </>
  )
}
