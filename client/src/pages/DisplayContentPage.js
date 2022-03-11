import React from 'react';
import {useHistory} from 'react-router-dom';


function DisplayContentPage(props) {

  console.log(props.location.state);
  const data = props.location.state;

  const history = useHistory();

  return (
    <div>

      <div className='container shadow moveDisplay'>

        <div className='row'>

          <div className='col-sm-5 pictureButtons'>
            <br />
            <br />
            <div className="moveImage">
              <img className="imageSizer shadow" src={`../img/${data.photo}`} alt='<' />
              <br />
              <select className="form-select" aria-label="Default select example" >
                <option selected value="">  &#9776; Add to List </option>
                <option value="Completed">Completed</option>
                <option value="Watching">Watching</option>
                <option value="PlanToWatch">Plan to Watch</option>
              </select>
            </div>
          </div>

          <div className='col-sm contentInfo'>
            <br />
            <div className='KeepText'>
              <p className='displayTitle'> {data.title}</p>
              <p className='displayText'><b>Type:</b> {data.media.charAt(0).toUpperCase() + data.media.slice(1)}</p>
              <p className='displayText'><b>Genre:</b> {data.genre.split(" ").join(", ")}</p>
              <p className='displayText'><b>Cast:</b> {data.actors.map((obj, i = 0) => {
                if (i === data.actors.length - 1) {
                  return <div className='displayActorNames' onClick={() => 
                    {
                      history.push('/actors', { ...obj });
                    }}>
                    <a className="actorLink" href='/actors'> {obj.name} </a>
                  </div>
                } else {
                  i++;
                  return <div className='displayActorNames' onClick={() => 
                    {
                      history.push('/actors', { ...obj });
                    }}>
                    <a className="actorLink" href='/actors'>{obj.name}</a>,&nbsp;
                  </div>
                }

              })}  </p>
              <br />
              <p className='displayText'><b>Description:</b></p>
              <p className='displayDescrip'> {data.description.split("\n").map(obj => {
                return <div>
                  {obj}<br />
                </div>
              })} </p>
            </div>

          </div>

        </div>

        <br />

      </div>

      <div>
        <div className="footer-copyright text-center py-5">© 2022 Copyright:
          Drama Tracker
        </div>
      </div>


    </div>
  );
}

export default DisplayContentPage;