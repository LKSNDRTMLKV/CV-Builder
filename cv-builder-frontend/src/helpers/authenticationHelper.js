import localStorageHelper from "./localStorageHelper";

const AUTH_TOKEN = "AUTH_TOKEN";

export function isSigned () {
    return localStorageHelper.Exists(AUTH_TOKEN) ? true : false;
}