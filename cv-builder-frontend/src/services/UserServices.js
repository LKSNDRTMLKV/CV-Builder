import { restHelper } from "../helpers/restHelper";


const SignUp = async (payload) => {
    let response = await restHelper.Post('/app/signup', payload);
    return response;
}

const SignIn = async (payload) => {
    let response =  await restHelper.Post('/app/signin', payload);
    return response;
}

const GetAllUsers = async (payload) => {
    let response = await restHelper.Get('/app/users', payload);
    return response;
}

const SetRecord = async (payload,id) => {
    let response = await restHelper.Patch(`/app/records:${id}`, payload)
    return response;
}

export const UserServices = {
    SignUp,
    SignIn,
    GetAllUsers,
    SetRecord
}