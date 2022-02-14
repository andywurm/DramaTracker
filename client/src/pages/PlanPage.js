import React from 'react';

function PlanPage(props) {
  return (
    <div>
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link ListTabs" href="/mylist">Completed</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ListTabs" href="watching">Watching</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active ListTabs" aria-current="page">Plan to Watch</a>
        </li>
      </ul>

      <br/>
      <br/>

      <p>Plan to Watch</p>

      <br/>

        <div class="footer-copyright text-center py-5">© 2022 Copyright:
        Drama Tracker
        </div>
      
    </div>
  );
}

export default PlanPage;