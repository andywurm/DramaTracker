import React from 'react';
import { data } from '../data/Database.js';

function MoviePage(props) {
  return (
    <div className='container'>

      <div className='row'>
        <div className='col-md browse'>
          <div className='PageTop'>Browse All</div>
        </div>
        <div className='col-md '>
          <div className='PageTop'> </div>
        </div>
        <div className='col-md cat'>
          <div className='category'>
            &#9776; Genre
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col-md browse'>
          <div className='PageTitle'> Movies </div>
        </div>
        <div className='col-md '>
          <div className='PageTop'> </div>
        </div>
        <div className='col-md cat'>
          <div className='category'> </div>
        </div>
      </div>

      <br />

      <div className='row displayRows'>

        {data.map(obj => {
          if (obj.type === 'movie') {
            return <div className='col-sm-3 displayContent'>
              <div class="card shadow">
                <img className='imageCheck' src={`../img/${obj.photo}`} alt={obj.title}></img>
                <div class="card-body">
                  <p class="card-text">{obj.title} </p>
                </div>
              </div>
            </div>
          }
        })}

        <br />

        <div class="footer-copyright text-center py-5">© 2022 Copyright:
          Drama Tracker
        </div>


      </div>


    </div>

  );
}

export default MoviePage;