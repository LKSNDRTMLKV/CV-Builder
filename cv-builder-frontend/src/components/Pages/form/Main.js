import {  Button, Divider, Grid, InputAdornment, MenuItem, Select, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import useMediaQuery from '@mui/material/useMediaQuery';
import WorkExperience from './WorkExperience';
import Skills from './Skills';
import Achievements from './Achievements';
import { Context } from '../../../context/Context';
import AboutMe from './AboutMe';
import { purple } from '@mui/material/colors';
import AddExtraSections from './AddExtraSections';
import ControlExtraSections from './ControlExtraSections';
import Education from './Education';
import Projects from './Projects';
import { localStorageHelper } from '../../../helpers/localStorageHelper';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    container: {
        position: "relative"
    },
   
   

    border: {
        // borderColor: rgba(0, 0, 0, 0.23),
        // zIndex: 1,
        // position:"absolute",
        border: "2px solid rgba(0,0,0,0.25)",
        borderRadius: "0.8%",
        boxShadow: "4px 4px 4px 4px rgba(0,0,0,0.25)",
        backgroundColor:"white"
    }

}))

const Main = (props) => {

    

    const { record, setRecord,currentUser, setCurrentUser } = useContext(Context);

    const { id } = useParams();

    const [recordId, setRecordId] = useState();

    const classes = useStyles();

    const [thisUser,setThisUser] = useState({});

    const showTips = useMediaQuery('(min-width:900px)');

    const onMobile = useMediaQuery('(min-width:900px)');

    const [onEdit, setOnEdit] = useState(true);

    const [additionalInfo, setAdditionalInfo] = useState({
        country: "",
        address: "",
        driving: "",
        birthPlace: "",
        from: "",
        postal: "",
        nationality: "",
        birthDate: "",
    })

    const [workExperience, setWorkExperience] = useState([{
        position: "",
        company: "",
        date: "",
        city: "",
        description: "",
    }]);

    const [education, setEducation] = useState([{
        school: "",
        degree: "",
        eduDates: "",
        eduCity: "",
        eduDesc: "",
    }])



    const [skills, setSkills] = useState([
        {
            skill: "",
            level: 3

        },
    ]);

    const [achievements, setAchievements] = useState([""]);

    const [projects, setProjects] = useState([{
        projectTitle: "",
        projectDesc: ""
    }])

    const [extraSections, setExtraSections] = useState({
        courses: false,
        internships: false,
        references: false,
        custom: false,
        hobbies: false,
        languages: false,
    })

    const [sections, setSections] = useState({
        courses: [{
            course: "",
            institution: "",
            cDate: ""
        }],
        internships: [{
            iPosition: "",
            iCompany: "",
            iDate: "",
            iCity: "",
        }],
        references: [""],
        custom: [{}],
        hobbies: [""],
        languages: [{
            language: "",
            langLevel: 3,
        }]

    })

    useEffect(() => {
        setRecord(prevState => ({...prevState, id:id}) )
        // let recordsCopy = [...currentUser.records];
        // recordsCopy.push(record);
        // currentUser.records && currentUser.records.map((r,idx) => {
        //     if(r.id !== id) {
        //         setCurrentUser(prevState => ({
        //             ...prevState,
        //             records: recordsCopy
        //         }))
        //         localStorageHelper.SaveItem("AUTH_TOKEN", currentUser);
        //     }
        // })
      
        // console.log(record)
    },[])

   
    const handleRecord = () => {
        console.log(record)
        // setCurrentUser(prevState => ({
        //     ...prevState,
        //     records: prevRecords => ([...prevRecords, record])
        // }))

        // let recordsCopy = [...currentUser.records];
        // recordsCopy.push(record);
        
        // setCurrentUser(prevState => ({
        //     ...prevState,
        //     records: recordsCopy
        // }))
        // // // console.log(recordsCopy);
        // console.log(currentUser)
        // localStorageHelper.SaveItem("AUTH_TOKEN", currentUser);
        // // console.log(record)
        // console.log(record)
    }


    //WORK EXPERIENCE

    const removeWorkExperience = (idx) => {
        let wE = [...workExperience];
        wE.splice(idx, 1);
        setWorkExperience(wE);
        setRecord(prevState => ({
            ...prevState,
            workExperience: workExperience
        }))
    }

    const addworkExperience = () => {
        setWorkExperience(prevState => ([
            ...prevState,
            {
                position: "",
                company: "",
                date: "",
                city: "",
                description: ""
            }
        ]))
        setRecord(prevState => ({
            ...prevState,
            workExperience: workExperience
        }))
        console.log(record)
    }




    // SKILLS

    const addSkill = () => {
        setSkills(prevState => ([
            ...prevState,
            {
                skill: "",
                level: 3
            }
        ]))
    }

    const removeSkill = (idx) => {
        let sK = [...skills];
        sK.splice(idx, 1);
        setSkills(sK);
    }

    //Achievements

    const addAchhievement = () => {
        let aC = [...achievements];
        aC.push("")
        setAchievements(aC);
    }


    const removeAchievement = (idx) => {
        let aC = [...achievements];
        aC.splice(idx, 1);
        setAchievements(aC);
    }

    //Education

    const addEducation = () => {
        setEducation(prevState => ([...prevState,
        {
            school: "",
            degree: "",
            eduDates: "",
            eduCity: "",
            eduDesc: "",
        }
        ]))
        setRecord(prevState => ({
            ...prevState,
            education: education
        }))
    }

    //Fix bug

    const removeEducation = (idx) => {
        var eD = [...education];
        eD.splice(idx, 1);
        setEducation(eD);
        setRecord(prevState => ({
            ...prevState,
            education: education
        }))

    }

    //Projects

    const addProject = () => {
        setProjects(prevState => ([...prevState,
        {
            projectTitle: "",
            projectDesc: ""
        }]))
        setRecord(prevState => ({
            ...prevState,
            projects: projects
        }))
    }

    const removeProject = (idx) => {
        let pR = [...projects];
        pR.splice(idx, 1);
        setProjects(pR);
    }




    const handleChange = (e) => {
        const { id, name, value, marks } = e.target;

        if (["country", "address", "driving", "birthPlace", "from", "postal", "nationality", "birthDate",].includes(name)) {

            setAdditionalInfo(prevState => ({
                ...prevState,
                [name]: value
            }))

        }

        else if (["position", "company", "date", "city", "description"].includes(name)) {
            var wE = [...workExperience];
            wE[id][name] = value;
            setWorkExperience(wE);
        }

        else if (["school", "degree", "eduDates", "eduCity", "eduDesc"].includes(name)) {
            let eD = [...education];
            eD[id][name] = value;
            setEducation(eD);

        }



        else if (["skill", "level"].includes(name)) {
            let sK = [...skills];
            sK[id][name] = value;

            setSkills(sK);
        }
    
        else if (["achievement"].includes(name)) {
            console.log("achievement")
            let aC = [...achievements];
            aC[id] = value;
            setAchievements(aC)

        }

        else if (["projectTitle", "projectDesc"].includes(name)) {
            let pR = [...projects];
            pR[id][name] = value;
            setProjects(pR);
        }


        else if (["course", "institution", "cDate"].includes(name)) {
            let cO = [...sections.courses];
            cO[id][name] = value;
            setSections(prevState => ({
                ...prevState,
                courses: cO
            }))
        }
        else if (["iPosition", "iCompany", "iDate", "iCity"].includes(name)) {
            let iN = [...sections.internships];
            iN[id][name] = value;
            setSections(prevState => ({
                ...prevState,
                internships: iN
            }))
        }
        else if (["hobbies"].includes(name)) {
            let hO = [...sections.hobbies];
            hO[id] = value;
            setSections(prevState => ({
                ...prevState,
                hobbies: hO
            }))
        }
        else if (["language", "langLevel"].includes(name)) {
            let lA = [...sections.languages];
            lA[id][name] = value;
            setSections(prevState => ({
                ...prevState,
                languages: lA
            }))
        }

        else {
            setRecord(prevState => ({
                 ...prevState, 
                 [name]: value, 
                }));
        }
        setRecord(prevState => ({
            ...prevState,
            additional: additionalInfo,
            workExperience: workExperience,
            education: education,
            skills: skills,
            achievements: achievements,
            sections: sections
        }))

        // console.log(record)
    }



    const handleLevelChange = (idx, name) => (e, value) => {
        if(name == "level") {
            let sK = [...skills];
            sK[idx][name] = value;
            setSkills(sK);
        }
        if(name == "langLevel") {
            let lA = [...sections.languages];
            lA[idx][name] = value;
            setSections(prevState => ({...prevState,
            languages: lA
        }))
        }
       

        //     let lA =[...sections.languages];
        //     lA[idx][name] = value;
        //     setSections(prevState => ({...prevState,
        //         languages: lA
        //     }))

        // console.log("level")

    }
    // const handleLanguageLevelChange = (idx,name) => (e,value) => {
    //     let lA = [...sections.languages];
    //     lA[idx][name] = value;
    //     setSections(prevState => ({...prevState,
    //     languages: lA
    //     }))
    //     setRecord(prevState => ({...prevState,
    //     sections:sections
    //     }))
    // }
   



    return (
        // WHOLE CONTAINER
        <Grid container className={classes.background}>
            
            {/* INPUT CONTAINER */}
            <Grid item md={8} xs={12} className={classes.border} sx={onMobile ? { m: 3, p: 2 } : { m: 0, p: 1, border: 0, borderRadius:0 }}>
            <Grid item xs={12}>ID:{id}</Grid>
                {/* ABOUT ME */}

                <AboutMe
                    record={record}
                    additionalInfo={additionalInfo}
                    handleChange={handleChange}
                />




                <Divider sx={{ my: 2 }} />


                <Grid container direction="row" spacing={4}>
                    {/* 1/2 */}
                    <Grid item md={6} xs={12}  >

                        <Grid container direction="column">

                            {/* {handleWorkExperience()} */}
                            <WorkExperience
                                workExperience={workExperience}
                                record={record}
                                setRecord={setRecord}
                                handleChange={handleChange}
                                addWorkExperience={addworkExperience}
                                removeWorkExperience={(idx) => removeWorkExperience(idx)}

                                onMobile={onMobile}
                            />

                            <Education
                                education={education}
                                record={record}
                                handleChange={handleChange}
                                addEducation={addEducation}
                                removeEducation={(idx) => removeEducation(idx)}
                            />

                        </Grid>


                    </Grid>

                    {/* 2/2 */}

                    <Grid item md={6} xs={12} >
                        <Grid container direction="column">
                            <Skills
                                skills={skills}
                                handleChange={handleChange}
                                add={addSkill}
                                remove={(idx) => removeSkill(idx)}
                                handleLevelChange={handleLevelChange}
                                setSkills={setSkills}
                                onMobile={onMobile}
                            />

                            <Achievements
                                achievements={achievements}
                                add={addAchhievement}
                                remove={(idx) => removeAchievement(idx)}
                                onMobile={onMobile}
                                handleChange={handleChange}
                            />

                            <Projects
                                projects={projects}
                                addProject={addProject}
                                removeProject={(idx) => removeProject(idx)}
                                handleChange={handleChange}
                            />

                        </Grid>



                    </Grid>





                    {/* <Select 
                        label="Icon"
                        value={icon}
                        onChange={(e) => setIcon(e.target.value)}
                        >
                           
                        </Select> */}



                </Grid>

                <Button variant="contained" className={classes.purple} onClick={() => console.log(record)}>LOG</Button>



                <Divider sx={{ my: 2 }} />


                <ControlExtraSections
                    extraSections={extraSections}
                    setExtraSections={setExtraSections}
                    onMobile={onMobile}
                />

                <Divider sx={{my:2}} />

                <AddExtraSections
                    sections={sections}
                    extraSections={extraSections}
                    setExtraSections={setExtraSections}
                    handleChange={handleChange}
                    handleLevelChange={handleLevelChange}
                    onMobile={onMobile}
                    // handleLanguageLevelChange={handleLanguageLevelChange}
                />


            </Grid>

            {/* TIPS */}
            {showTips &&
                <>
                    <Grid item md={3} xs={12} className={classes.border} style={{ height: "75vh", width: "100%", position: "fixed", top: "15%", right: "0%" }} sx={{ mr: 3 }} >
                        
                    <Button variant='contained' style={{position:"absolute", bottom: 0, right:0}} onClick={handleRecord}>Take me to the cv</Button>


                    </Grid>
{/* 
                    <Grid item md={3} xs={12}>

                        
                    </Grid> */}
                </>

            }

        </Grid>

    );
};

export default Main;