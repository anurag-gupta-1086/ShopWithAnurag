const BASE_URL = process.env.REACT_APP_BASE_URL

// AUTH ENDPOINTS
export const authEndpoints = {
    SIGNUP_API: BASE_URL + "/auth/signup",
    SEND_OTP_API: BASE_URL + "/auth/sendotp",
    LOGIN_API: BASE_URL + "/auth/login",
    CHANGEPASSWORD_API: BASE_URL + "/auth/changepassword",
    DELETE_ACCOUNT_API: BASE_URL + "/auth/deleteaccount",
    FORGOT_PASSWORD_API: BASE_URL + "/auth/forgotpassword",
    RESET_PASSWORD_API: BASE_URL + "/auth/resetpassword",
}

// USER ENDPOINTS
export const userEndpoints = {
    UPDATE_USER_API: BASE_URL + "/user/update"
}

// CART ENDPOINTS
export const cartEndpoints = {
    ADD_TO_CART_API: BASE_URL + "/cart/add",
    GET_CART_API: BASE_URL + "/cart/get",
    REMOVE_FROM_CART_API: BASE_URL + "/cart/remove"
}