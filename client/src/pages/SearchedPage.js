import React, {useEffect, useState} from 'react';
import DisplayCards from '../components/DisplayCards.js';


function SearchedPage(props) {

    console.log(props.location.state);
    const data = props.location.state;
    console.log({data});

    const [contents, setContents] = useState([]);

  useEffect(() => {

    const getData = async () => {
      const data = await fetch('https://drama-tracker-andy.herokuapp.com/api/contents')

      const json = await data.json();
      setContents(json);
      console.log(json);

    }

    getData();

  }, []);
  
    console.log(contents.map(contents => contents.actors));

    var reversed = data.searched.split(" ");
    reversed.reverse();
    reversed = reversed.join("").toLowerCase();
    console.log(reversed);
   
    function handleSearch(queries){
        const lower = queries.toLowerCase();
       return contents.filter((content) => content.title.toLowerCase().includes(lower) || content.actors.map((e) => e.name).join(" ").toLowerCase().includes(lower));
    }

    return (
        
        <div className='container'>

            <div className='row'>
                <div className='col-md'>
                    <div className='PageTop searchP'>Showing Results for " {data.searched} "</div>
                </div>
            </div>

            <br />

            <div className='ActualContainer'>

                <DisplayCards list={handleSearch(data.searched)} />
                
                <br />

            </div>

            <div class="footer-copyright text-center py-5">© 2022 Copyright:
                Drama Tracker
            </div>

        </div>
    );
}

export default SearchedPage;