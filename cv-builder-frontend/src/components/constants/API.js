export const API = {
    
    url: process.env.REACT_APP_API_URL,

    paths: {
        home: "/",
        sign_in: "/app/signin",
        sign_up: "/app/signup",
        dashboard: "/app/dashboard",
        teplates: "/app/templates",
        create_cv_id: "app/create-cv/:id" ,
        create_cv:"app/create-cv/",
        account: "/app/account",
        not_found: "*"
    },

    admin: {
        dashboard: "/admin/dashboard"
    },

    
    
}