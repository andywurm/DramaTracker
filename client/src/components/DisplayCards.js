import React from 'react';
import {useHistory} from 'react-router-dom';


function DisplayCards({ list }) {

  const history = useHistory();

  return (
    <div>
      <div className='row displayRows card-deck'>
        {list.map(obj => {
          return <div className='col-sm-3 displayContent' onClick={() => 
          {
            history.push('/content', { ...obj });
          }
          }>

        <div class="card shadow">
          <img className='imageCheck' src={`../img/${obj.photo}`} alt={obj.title}></img>
          <div class="card-body">
            <p class="card-text">{obj.title} </p>
          </div>
        </div>
      </div>
        })}
    </div>
    </div >
  );
}

export default DisplayCards;