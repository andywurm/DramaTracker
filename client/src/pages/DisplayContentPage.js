import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../hooks/UserContext';

function DisplayContentPage(props) {

  const { user } = useContext(UserContext);

  console.log(props.location.state.show);
  const data = props.location.state.show;

  const history = useHistory();

  async function selectList(e) {
    const value = e.target.value;

    if (user && value !== "") {
      const response = await fetch('/api/users/add', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: user.id,
          contentId: data.id,
          listType: value
        })
      }

      )
      console.log(response);
    }

  }


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
              <select className="form-select" aria-label="Default select example" onChange={selectList} >
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
                  return <div className='displayActorNames' onClick={() => {
                    history.push('/actors', { ...obj });
                  }}>
                    <button className="actorLink actorButton"> {obj.name} </button>
                  </div>
                } else {
                  i++;
                  return <div className='displayActorNames' onClick={() => {
                    history.push('/actors', { ...obj });
                  }}>
                    <button className="actorLink actorButton">{obj.name}</button>,&nbsp;
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