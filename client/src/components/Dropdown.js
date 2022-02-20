import React from 'react';


function Dropdown({setGenre}){

    return (
        <div className='category'>
            <select onChange={(e) => setGenre(e.target.value)} class="form-select" aria-label="Default select example">
              <option selected value="">  &#9776; Genre </option>
              <option value="Romance">Romance</option>
              <option value="Comedy">Comedy</option>
              <option value="Crime">Crime</option>
              <option value="Mystery">Mystery</option>
              <option value="Life">Life</option>
              <option value="Office">Office</option>
              <option value="School">School</option>
              <option value="Psychological">Psyhcological</option>
              <option value="Family">Family</option>
            </select>
          </div>

    );

}

export default Dropdown;