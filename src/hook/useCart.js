import { useDispatch, useSelector } from 'react-redux'
import cartAction from '../actions'
export const useCart = () => {
    const dispatch = useDispatch();
    const listCartData = useSelector(state => state.cart.listCartData);
    const dispatchGetListCart = () => {
        dispatch(cartAction.CartRequest());
    }
    return {
        listCartData,
        dispatchGetListCart
    };
}