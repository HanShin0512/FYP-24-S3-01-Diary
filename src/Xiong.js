import React from 'react';
import './Style.css';

function Xiong() {
  return (
    <div className="App">
      <h1>Xiong Binsong</h1>
      <table>
          <tr>
            <th>Date</th>
            <th>Task</th>
            <th>Obstacles Faced</th>
          </tr>
          <tbody>
          <tr>
            <td>14/7/2024 - 21/7/2024</td>
            <td>
              <ul>
                <li>project proposal documentation</li>
                <li>Create user stories and descriptions</li>
                <li>List out the basic feature for the website</li>
              </ul>
            </td>
            <td>Checking the correctness of user stories and descriptions</td>
          </tr>
          <tr>
            <td>22/7/2024 - 27/7/2024</td>
            <td>
              <ul>
                <li>Refined user stories</li>
                <li>Refine and standardize all user descriptions</li>
                <li>Created some use case diagrams</li>
              </ul>
            </td>
            <td>NA</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Xiong;
