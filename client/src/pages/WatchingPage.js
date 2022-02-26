import React from 'react';

function WatchingPage(props) {
  return (
    <div>
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link ListTabs" href='/mylist' >Completed</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active ListTabs" href='/watching' aria-current="page">Watching</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ListTabs" href="/plan">Plan to Watch</a>
        </li>
      </ul>

      <br />
      <br />

      <p>Watching</p>


      <br />

      <div class="footer-copyright text-center py-5">© 2022 Copyright:
        Drama Tracker
      </div>

    </div>
  );
}

export default WatchingPage;