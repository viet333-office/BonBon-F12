import { UseDispatch, useDispatch, useSelector } from "react-redux";
import * as customerAction from "../actions";
export function useCustomer() {
    const dispatch = useDispatch();
    function dispatchCreateCustomer(payload) {
        return dispatch(customerAction.addCustomerRequest(payload));
    }
    return {
        dispatchCreateCustomer
    }
}