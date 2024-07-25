import React from 'react';
import './Style.css';

function Minseo() {
  return (
    <div className="App">
      <h1>Yun Minseo (leader) </h1>
      <table>
        <tr>
          <th>Date</th>
          <th>Task</th>
          <th>Obstacles Faced</th>
        </tr>
        <tbody>
          <tr>
            <td>14/7/2024 - 20/7/2024</td>
            <td>
              <ul>
                <li>Research for existing models and datasets</li>
                <li>Write project proposal</li>
                <li>Write use case description</li>
              </ul>
            </td>
            <td>Some datasets need to contact with them for get access</td>
          </tr>
          <tr>
            <td>21/7/2024 - 27/7/2024</td>
            <td>
              <ul>
                <li>Attempt to run the existing official implementations</li>
                <li>Attempt to reproduce relevant research</li>
                <li>Draw use case diagrams</li>
                <li>Design website (related to subscription flow)</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Most of the existing GAN implementation for facial expression animations are quite old, so faced some dependency version issues.</li>
                <li>Some of the research papers are not clear enough to reproduce the results.</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Minseo;
