import { restHelper } from "../helpers/restHelper";


const SignUp = async (payload) => {
    let response = await restHelper.Post('/app/signup', payload);
    return response;
}

const SignIn = async (payload) => {
    let response =  await restHelper.Post('/app/signin', payload);
    return response;
}

const GetAllUsers = async () => {
    let response = await restHelper.Get('/app/users');
    return response;
}

const GetUser = async (id) => {
    let response = await restHelper.Get(`/app/user/${id}`);
    return response;
}

const UpdateUser = async (payload) => {
    let response = await restHelper.Patch('/app/user', payload);
    return response;
}

const DeleteUser = async (id,payload) => {
    let response = await restHelper.Delete(`/app/user/${id}`, payload);
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
    GetUser,
    UpdateUser,
    DeleteUser,
    SetRecord
}