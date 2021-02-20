import React from 'react';

const Movies = ({movie}) => {
  return (
    <div>
      {/* <table style={{border: "1px solid black"}}>
        <tbody>
          <tr>
            <td style={{border: "1px solid black"}}>{movie.title}</td>
          </tr>
        </tbody>
      </table> */}

      <ul>
        <li>{movie.title}</li>
      </ul>
    </div>
  );
}

export default Movies;
