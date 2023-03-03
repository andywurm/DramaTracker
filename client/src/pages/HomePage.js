import React, { useEffect, useState, useContext } from 'react';
import DisplayCards from '../components/DisplayCards.js';
import Dropdown from '../components/Dropdown.js';
import { UserContext } from '../hooks/UserContext';


function HomePage(props) {

  const { user } = useContext(UserContext);
  const [genre, setGenre] = useState();
  const [contents, setContents] = useState([]);
  const [nums, setNums] = useState();
  const [currentPage, setCurrentPage] = useState(0);


  useEffect(() => {

    const getData = async () => {
      const data = await fetch('http://localhost:5000/api/contents')

      const json = await data.json();
      const num = Math.ceil(json.length / 25);

      const array = [];

      for (let i = 0; i < num; i++) {
        array.push(json.slice(i * 25, 25 * (i + 1)));
      }

      setNums(num);
      setContents(array);
      console.log(json);

    }

    getData();

  }, []);

  function nextPage() {
    if (currentPage !== nums - 1) {
      setCurrentPage(currentPage + 1);
    }
  }

  function prevPage() {
    if (currentPage !== 0) {
      setCurrentPage(currentPage - 1);
    }
  }


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
          <Dropdown setGenre={setGenre} />
        </div>
      </div>


      <br />
      <div className='ActualContainer'>

        {
          contents.length > 0 &&
          <DisplayCards list={contents[currentPage].filter((e) => !genre || e.genre.includes(genre))} user={user} />
        }

        <br />

      </div>

      <br />
      <br />
      <div className='paginationPls'>
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <button className="page-link" aria-label="Previous" onClick={prevPage}>
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
              </button>
            </li>
            {contents.length > 0 && Array.from(Array(nums).keys()).map((e) => {
              return (
                <li className="page-item"><button onClick={() => setCurrentPage(e)} className="page-link">{e + 1}</button></li>
              )
            })}
            <li className="page-item">
              <button className="page-link" aria-label="Next" onClick={nextPage}>
                <span aria-hidden="true">&raquo;</span>
                <span className="sr-only">Next</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <div className="footer-copyright text-center py-5">© 2022 Copyright:
        Drama Tracker
      </div>


    </div>


  );
}

export default HomePage;