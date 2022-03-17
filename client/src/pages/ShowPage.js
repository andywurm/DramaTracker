import React, {useEffect,useState} from 'react';
import DisplayCards from '../components/DisplayCards.js';
import Dropdown from '../components/Dropdown.js';

function ShowPage(props) {

  const [genre, setGenre] = useState();
  const [ contents, setContents] = useState([]);

  useEffect(() => {

    const getData = async() => {
      const data = await fetch('http://localhost:5000/api/contents/shows')

      const json = await data.json();
      setContents(json);
      console.log(json);

    } 

    getData();
    
  }, [] )

  return (

    <div className='container'>

      <div className='row'>
        <div className='col-md browse'>
          <div className='PageTop'>Browse Shows</div>
        </div>
        <div className='col-md '>
          <div className='PageTop'> </div>
        </div>
        <div className='col-md cat'>
        <Dropdown setGenre={setGenre} />
        </div>
      </div>

      {/* <div className='row'>
        <div className='col-md browse'>
          <div className='PageTitle'> Shows </div>
        </div>
        <div className='col-md '>
          <div className='PageTop'> </div>
        </div>
        <div className='col-md cat'>
        
        </div>
      </div> */}

      <br />

      <div className='ActualContainer'>

      <DisplayCards list={contents.filter((e) => !genre || e.genre.includes(genre))} />

        <br />

        <div className="footer-copyright text-center py-5">© 2022 Copyright:
          Drama Tracker
        </div>

      </div>

    </div>

  );
}

export default ShowPage;