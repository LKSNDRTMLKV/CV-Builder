import { responseHelper } from "../helpers/responseHelper";
import { validatorHelper } from "../helpers/validatorHelper"
import { UserServices } from "../services/UserServices";

const validateOnSignUpOrUpdate = (data) => {
    let inputJSONData = [
        {
            name: "fullName",
            value: data.fullName, 
            type: "required",
            message: "Please enter your full name",
        },
        {
            name: "username",
            value: data.username, 
            type: "required",
            message: "Please enter a username",
        },
        {
            name: "email",
            value: data.email, 
            type: "email",
            message: "Please enter your email address",
        },
        {
            name: "password",
            value: data.password, 
            type: "password",
            message: "Please enter a password",
        }
    ]
    return validatorHelper.validate(inputJSONData);
}

const validateOnSignIn = (data) => {
    let inputJSONData = [
        {
            name: "username",
            value: data.username, 
            type: "required",
            message: "Please provide a username",
        },
        {
            name: "password",
            value: data.password, 
            type: "password",
            message: "Please provide a valid password",
        }
    ]
    return validatorHelper.validate(inputJSONData);
}

const validateOnDelete = (data) => {
    let inputJSONData = [
        {
            name: "password",
            value: data.password, 
            type: "password",
            message: "Please provide a valid password",
        }
    ]
    return validatorHelper.validate(inputJSONData);
}


async function SignUpAsync (args) {
    let validationMessages = validateOnSignUpOrUpdate(args);
    if(validationMessages.length > 0) {
        let responses = {
            error: true,
            error_description: "Not all Fields are filled", 
            validationMessages: validationMessages
        }
        return responses;
    } 
    
        let response = await UserServices.SignUp(args);
        return response;
}

async function SignInAsync (args) {
    let validationMessages = validateOnSignIn(args);
    if(validationMessages.length > 0) {
        let responses = {
            error: true,
            error_description: "Not all Fields are filled", 
            validationMessages: validationMessages
        }
        return responses;
    } 
    
        let response = await UserServices.SignIn(args);
        return response;
}

async function GetAllUsersAsync () {
    let response = await UserServices.GetAllUsers();
    let responses = [response];
    return responseHelper.validateResponses(responses);
}

async function GetUserAsync (id) {
    let response = await UserServices.GetUser(id);
    return responseHelper.validateResponse(response);
}

async function UpdateUserAsync(args) {
    let validationMessages = validateOnSignUpOrUpdate(args);
    if(validationMessages.length > 0) {
        let responses = {
            error: true,
            error_description: "Not all Fields are filled", 
            validationMessages: validationMessages
        }
        return responses;
    } 
    let response = await UserServices.UpdateUser(args);
    return responseHelper.validateResponse(response);
}



async function DeleteUserAsync(id,args) {
    let validationMessages = validateOnDelete(args);
    if(validationMessages.length > 0){
        let responses = {
            error:true,
            error_description:"Passwords not match",
            validationMessages:validationMessages
        }
        return responses;
    }


    let response = await UserServices.DeleteUser(id,args);
    return responseHelper.validateResponse(response);
}

export const UserActions = {
    SignUpAsync,
    SignInAsync,
    GetAllUsersAsync,
    GetUserAsync,
    UpdateUserAsync,
    DeleteUserAsync,
    
}