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
            <td>Row 1, Cell 1</td>
            <td>Row 1, Cell 2</td>
            <td>Row 1, Cell 3</td>
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

export default Minseo;
