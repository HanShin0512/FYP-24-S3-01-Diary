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
                <td>17/7/2024</td>
                <td>3:00PM - 5:30PM</td>
                <td>SIM BLK B</td>
                <td>Write project proposal</td>
                <td>write User story and user description</td>
                <td>All members</td>
                <td>None</td>
            </tr>
            <tr>
                <td>23/7/2024</td>
                <td>12:00PM - 3:30PM</td>
                <td>SIM BLK B</td>
                <td>Project requirement documentation</td>
                <td>Draw use case diagrams</td>
                <td>All members</td>
                <td>None</td>
            </tr>
            
          </table>
      </div>
    );
}

export default meetingMinutes;