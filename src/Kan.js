import React from 'react';
import './Style.css';

function Kan() {
  return (
    <div className="App">
      <h1>Kan Htet Myat San</h1>
      <table>
          <tr>
            <th>Date</th>
            <th>Task</th>
            <th>Obstacles Faced</th>
          </tr>
        <tbody>
          <tr>
            <td>14/7/2024 - 27/7/2024</td>
            <td>Research about competitions
              Research about GANs
              Contributed to project proposal
              Meeting with supervisor
            </td>
            <td>No technical knowledge about GANs
              Desigining the flow of the website and use cases
              Deciding the roles of each member at an very early stage of development.
            </td>
          </tr>
          <tr>
            <td>22/7/2024 - 27/7/2024</td>
            <td>Edit propject proposal
              Desigining wireframe and website prototype
              Research about website programming for backend
            </td>
            <td>Only have a little experience with website programming
              Didn't know anything about scrum
              Conflicting technical tools and deciding on which tool to use
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Kan;
