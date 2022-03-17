import React, { useEffect, useState } from 'react';
import DisplayCards from '../components/DisplayCards.js';

function ActorsPage(props) {

  console.log(props.location.state);
  const data = props.location.state;
  
  const [contents, setContents] = useState([]);

  useEffect(() => {

    const getData = async () => {
      const data = await fetch('http://localhost:5000/api/contents')

      const json = await data.json();
      setContents(json);
      console.log(json);

    }

    getData();

  }, []);

  const actorID = data.CastandContent.actorId;
  console.log(data.CastandContent);
  const [actor, setActor] = useState([]);

  useEffect(() => {
    const getData2 = async () => {
      const data2 = await fetch('http://localhost:5000/api/actors')
      const json = await data2.json();
      setActor(json);
      console.log(json);
    }
    getData2();
  }, [])


  const act = actor.filter((e) => e.id === actorID);
  const pic = act.map(e => {
    return e.headshot
  });


  return (
    <div className='container'>

      <div className='row'>

        <div className='col-3'>
          <br />
          <br />
          <br />
          <img className='actImg shadow' src={`../actorimg/${pic}`} alt='actor' />
          <br />
          <br />
          <p className='actorIn'><b>Name: </b> {act.map(e => { return <div className='sameLineN'> {e.name} </div> })} </p>
          <p className='actorIn'><b>Japanese: </b> {act.map(e => { return <div className='sameLineN'> {e.japanese} </div> })} </p>
          <p className='actorIn'><b>Date of Birth: </b> {act.map(e => { return <div className='sameLineN'> {e.DOB} </div> })}</p>
          <p className='actorIn'><b>Height: </b> {act.map(e => { return <div className='sameLineN'> {e.height} </div> })} </p>
        </div>

        <div className='col actorCards'>
          <div>
            <DisplayCards list={contents.filter((content) => content.actors.filter((actor) => actor.name === data.name).length)} />
          </div>
        </div>

      </div>



    </div>
  );
}

export default ActorsPage;