import React, { useState, useEffect, useContext } from 'react';
import DisplayCards from '../components/DisplayCards.js';
import { UserContext } from '../hooks/UserContext';



function MyListPage(props) {

  const {user} = useContext(UserContext);
  const [contents, setContents] = useState([]);
  const [listType, setListType] = useState("Completed");

  useEffect(() => {


    const getData = async () => {

      const data = await fetch(`http://localhost:5000/api/users/list?username=${user.username}`)


      const json = await data.json();
      setContents(json.value);
      console.log(json);

    }

    if (user) {
      getData();
    }

  }, []);



  return (
    <div>
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <button class={`nav-link ListTabs ${listType === "Completed" ? 'active' : ''}`} onClick={e => setListType("Completed")}> Completed</button>
        </li>
        <li class="nav-item">
          <button class={`nav-link ListTabs ${listType === "Watching" ? 'active' : ''}`} onClick={e => setListType("Watching")}> Watching</button>
        </li>
        <li class="nav-item">
          <button class={`nav-link ListTabs ${listType === "PlanToWatch" ? 'active' : ''}`} onClick={e => setListType("PlanToWatch")}> Plan to Watch</button>
        </li>
      </ul>

      <br />
      <br />

      <div className='container'>
        <DisplayCards list={contents.filter((e) => e.users[0].User_Content.listType === listType)}/>
      </div>


      <br />

      <div class="footer-copyright text-center py-5">© 2022 Copyright:
        Drama Tracker
      </div>

    </div>
  );
}

export default MyListPage;