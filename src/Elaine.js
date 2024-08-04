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
            <td>22/7/2024 - 27/7/2024</td>
            <td>
              <ul>
                <li>Refined user stories</li>
                <li>Wrote descriptions for newly added user stories</li>
                <li>Created some use case diagrams</li>
              </ul>
            </td>
            <td>None</td>
          </tr>
          <tr>
            <td>28/7/2024 - 3/8/2024</td>
            <td>
              <ul>
                <li>Updated some use case diagrams</li>
                <li>Expanded on competitor research in PRD</li>
              </ul>
            </td>
            <td>
                <li>Premium features were difficult to verify since they require payment</li>
                <li>Some free versions are unavailable for download at the time or offer very limited uses that make it difficult to verify features</li>
                <li>A lot of these products have very similar features, which makes it difficult to find non-arbitrary products</li>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Elaine;
