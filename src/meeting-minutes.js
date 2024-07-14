import React from "react";
import './Style.css';

function meetingMinutes() {
    return(
        <div className='meeting-minutes'>
        <h1>Meeting Minutes</h1>
        <table>
            <tr>
              <th> Date</th>
              <th> Time </th>
              <th> Venue </th>
              <th> Discussion </th>
              <th> Tasks to be done (for Next Meeting) </th>
              <th> Attendees </th>
              <th> Absentees </th>
            </tr>
            <tr>
                <td>14/7/2024</td>
                <td>8:00PM - 9:00PM</td>
                <td>Google Meet</td>
                <td>Project proposal</td>
                <td>Write project proposal</td>
                <td>All members</td>
                <td>None</td>
            </tr>
            <tr>
                <td>Row 1, Cell 1</td>
                <td>Row 1, Cell 2</td>
                <td>Row 1, Cell 3</td>
                <td>Row 1, Cell 4</td>
                <td>Row 1, Cell 5</td>
                <td>Row 1, Cell 6</td>
                <td>Row 1, Cell 7</td>
            </tr>
            
          </table>
      </div>
    );
}

export default meetingMinutes;