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
            <td>28/7/2024 - 3/8/2024</td>
            <td>Researching about firebase</td>
            <td>I have never done backend or frontend before except basic html.
              So to do react and authentication I have to learn about those tools first.    
            </td>
          </tr>
          <tr>
            <td>4/8/2024 - 10/8/2024</td>
            <td>Research about REACT especially context and effect for backend
              Research about authentication and database in firebase
            </td>
            <td>Firebase database is similar to MongoDB and I have good knowledge about SQL but
                I need to know more about NoSQL.
                Some github issues occured and have to fix it.
            </td>
          </tr>
            <tr>
            <td>11/8/2024 - 17/8/2024</td>
            <td>Starting doing backend in a test project.
                Managed to implement login and logout.
            </td>
            <td>Need to redirect user based on their login status.
            </td>
            </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Kan;
