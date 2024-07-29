import React from 'react';
import './Style.css';

function Thwin() {
  return (
    <div className="App">
      <h1>Thwin Han Shin</h1>
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
                <li>Create website for submitting diary</li>
                <li>Write project proposal</li>
                <li>Write use case description</li>
              </ul>
            </td>
            <td>Unfamiliar with what diagrams to put in the proposal</td>
          </tr>
          <tr>
            <td>21/7/2024 - 27/7/2024</td>
            <td>
              <ul>
                <li>Fix user stories</li>
                <li>Draw use case diagrams</li>
                <li>Assign tasks to teammates</li>
              </ul>
            </td>
            <td>Deciding on the users that will use our system</td>
          </tr>
          <tr>
            <td>28/7/2024 - 3/8/2024</td>
            <td>
              <ul>
                <li>Draw use case diagrams</li>
                <li>Design web page</li>
                <li>Code that web page</li>
              </ul>
            </td>
            <td> Website responsive error </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Thwin;
