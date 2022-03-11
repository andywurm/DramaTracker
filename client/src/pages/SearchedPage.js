import React, {useEffect, useState} from 'react';
import DisplayCards from '../components/DisplayCards.js';


function SearchedPage(props) {

    console.log(props.location.state);
    const data = props.location.state;
    console.log({data});

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



    return (
        
        <div className='container'>

            <div className='row'>
                <div className='col-md'>
                    <div className='PageTop searchP'>Showing Results for " {data.searched} "</div>
                </div>
            </div>

            <br />

            <div className='ActualContainer'>

                <DisplayCards list={contents.filter((content) => content.title.toLowerCase() === data.searched.toLowerCase())} />
                <DisplayCards list={contents.filter((content) => content.actors.filter((actor) => actor.name.toLowerCase() === data.searched.toLowerCase()).length)} />

                <br />

            </div>

            <div class="footer-copyright text-center py-5">© 2022 Copyright:
                Drama Tracker
            </div>

        </div>
    );
}

export default SearchedPage;