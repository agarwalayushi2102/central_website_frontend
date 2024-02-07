import * as api from "../../api";

export const setContentVersionAdmin = () => async (dispatch) => {

    try{
        let contentVersion = (await api.getContentVersionAdmin()).data.contentVersion

        if(!contentVersion){dispatch({type:"ADMIN_LOGOUT"})}
        else{
            dispatch({type:"SET_CONTENT_VERSION",payload:contentVersion})
        }
    }
    catch (error) {
        console.log(error)
        dispatch({type:"ADMIN_LOGOUT"})
    }
}