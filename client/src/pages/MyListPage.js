import React from 'react';


function MyListPage(props) {
  return (
    <div>
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active ListTabs" href='/mylist' aria-current="page">Completed</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ListTabs" href='/watching'>Watching</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ListTabs" href="/plan">Plan to Watch</a>
        </li>
      </ul>

      <br />
      <br />

      <p>Completed</p>


      <br />

      <div class="footer-copyright text-center py-5">© 2022 Copyright:
        Drama Tracker
      </div>

    </div>
  );
}

export default MyListPage;