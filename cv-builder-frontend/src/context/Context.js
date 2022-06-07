import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { localStorageHelper } from "../helpers/localStorageHelper";
import { v4 as uuidv4 } from 'uuid';

export const Context = createContext({});

export const Provider = (props) => {

    const [generateRecordId, setGenerateRecordId] = useState("");

    const [record, setRecord] = useState({
        id:"",
        fullName: "",
        profTitle: "",
        aboutMe: "",
        image: {},
        email: "",
        phone: "",
        location: "",
        social: "",
        additional: {
            country: "",
            address: "",
            driving: "",
            birthPlace: "",
            from: "",
            postal: "",
            nationality: "",
            birthDate: "",
        },
        workExperience: [{
            position: "",
            company: "",
            date: "",
            city: "",
            description: ""
        }],

        education: [{
            school: "",
            degree: "",
            eduDates: "",
            eduCity: "",
            eduDesc: "",
        }],

        skills: [
            { 
                skill: "",
                level: 3
    
            },
           ],

        achievements: [""],
        
        projects: [{
            projectTitle: "",
            projectDesc: "",
        }],

    });



    const [users, setUsers] = useState([]);
    
    const [currentUser, setCurrentUser] = useState(localStorageHelper.Exists("AUTH_TOKEN") ? localStorageHelper.GetItem("AUTH_TOKEN") : {});

    const [loggedIn,setLoggedIn] = useState(localStorageHelper.Exists("AUTH_TOKEN"));

   

    useEffect(() => {
        // // setLoggedIn(localStorageHelper.Exists("AUTH_TOKEN"));
        // // setCurrentUser(localStorageHelper.Exists("AUTH_TOKEN") ? localStorageHelper.GetItem("AUTH_TOKEN") : {})
        // if(loggedIn) {
        //     setCurrentUser(localStorageHelper.GetItem("AUTH_TOKEN"));
        // }
    //     const uniqueID = uuidv4().slice(0,8);
        
    //     setGenerateRecordId(uniqueID);

    //     const userRecords = [...currentUser.records];
        
    //         setRecord(prevState => ({...prevState, id: uniqueID}));
    //           userRecords.push(record);
    //         setCurrentUser(prevState => ({
    //             ...prevState,
    //             records: userRecords
    //         }))
            
        
    //    console.log(currentUser)
            // setRecord(prevState => ({...prevState, id: uniqueID}))
            // userRecords.push(record);
            // setCurrentUser(prevState => ({
            //     ...prevState,
            //     records: userRecords
            // }))
            // localStorageHelper.SaveItem("AUTH_TOKEN", currentUser)
            // console.log(record)

        

        
        
        
    
        
    },[])

    const globalState = {
        record,
        setRecord,
        users,
        setUsers,
        currentUser,
        setCurrentUser,
        loggedIn,
        setLoggedIn,
    };

    return (
        <Context.Provider value={globalState}>
            {props.children}
        </Context.Provider>
    )
}
