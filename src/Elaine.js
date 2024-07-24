import React from 'react';
import './Style.css';

function Elaine() {
  return (
    <div className="App">
      <h1>Esther Elaine Haryono</h1>
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
                <li>Wrote some things to project proposal</li>
                <li>Wrote user stories and descriptions</li>
                <li>Did some research on possible GANs we can use</li>
              </ul>
            </td>
            <td>Figuring out the user stories and what each user needs</td>
          </tr>
          <tr>
            <td>Row 2, Cell 1</td>
            <td>Row 2, Cell 2</td>
            <td>Row 1, Cell 3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Elaine;
