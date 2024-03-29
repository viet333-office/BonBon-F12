import { useDispatch, useSelector } from "react-redux"
import { authAction } from "../actions"

export const useAuth = () => {
    const dispatch = useDispatch()
    const token = useSelector(state => state.token)

    function handleLogin(element) {
        dispatch(authAction.loginSuccess(element))
    }

    function handleLogOut() {
        dispatch(authAction.handleLogOut())
    }

    return { token, handleLogin, handleLogOut }
}