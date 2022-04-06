import React, { useContext, useState } from "react";
import { UserContext } from '../hooks/UserContext';
import userPic from '../images/blankProfile.jpg';

function ProfilePage(props) {

    const { user, setUser } = useContext(UserContext);
    const [fName, setFName] = useState(user.firstName);
    const [lName, setLName] = useState(user.lastName);
    const [email, setEmail] = useState(user.email);
    const [uName, setUName] = useState(user.username);
    const [password, setPassword] = useState(user.password);
    const [editMode, setEditMode] = useState("No");


    function EditClicked() {
        setEditMode("Yes");
    }

    async function saveUpdatedInfo() {

        const response = await fetch('/api/users/update', {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              firstName: fName,
              lastName: lName,
              email: email,
              username: uName,
              password: password
            })
          });

          if (response.status === 200) {
              const person = await response.json();
                console.log(person)
                setUser(person.value);
          } else {
            alert("Save was unsuccessful. Please try again.");
          }
          
        setEditMode("No");
    }

    return (
        <div>

            <div className="container shadow displayUserBack">

                <div className="row">

                    <div className="col nameSpace">
                        <img className="defaultUserPic" src={userPic} alt="Profile pic"/>
                        <div className="UsersName">{user.username}</div>
                    </div>

                    <div className="col-7 infoSpace">
                        <br />
                        <br />
                        <div className="keepInfo">

                            {
                                editMode === "No"
                                    ?
                                    <div>
                                        <label className="labels">First Name: &nbsp; <input className="inputs" value={user.firstName} readOnly /></label>
                                        <label className="labels">Last Name: &nbsp; <input className="inputs" value={user.lastName} readOnly />  </label>
                                        <label className="labels">Email: &nbsp; &nbsp; &nbsp; <input className="inputs" value={user.email} readOnly /></label>
                                        <label className="labels">Username: &nbsp; <input className="inputs" value={user.username} readOnly />  </label>
                                        <label className="labels">Password: &nbsp; <input className="inputs" value={user.password} type="password" readOnly />  </label>

                                        <button className="editInfo" onClick={EditClicked}> &nbsp; Edit  &nbsp;</button>
                                        <br />
                                        <br />
                                    </div>
                                    :
                                    <div>
                                        <label className="labels">First Name: &nbsp;
                                            <input className="inputs" value={fName} type="text" onChange={(e) => setFName(e.target.value)} /></label>
                                        <label className="labels">Last Name: &nbsp;
                                            <input className="inputs" value={lName} type="text" onChange={(e) => setLName(e.target.value)} />  </label>
                                        <label className="labels">Email: &nbsp; &nbsp; &nbsp;
                                            <input className="inputs" value={email}  readOnly /></label>
                                        <label className="labels">Username: &nbsp;
                                            <input className="inputs" value={uName} readOnly />  </label>
                                        <label className="labels">Password: &nbsp;
                                            <input className="inputs" value={password} type="text" onChange={(e) => setPassword(e.target.value)} />  </label>

                                        <button className="editInfo" onClick={saveUpdatedInfo}> &nbsp; Save  &nbsp;</button>
                                        <br />
                                        <br />
                                    </div>
                            }

                        </div>


                    </div>

                </div>



            </div>
            <div>
                <div className="footer-copyright text-center py-5">© 2022 Copyright:
                    Drama Tracker
                </div>
            </div>

        </div>
    )




}

export default ProfilePage;