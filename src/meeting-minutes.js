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
                <td>write user story and user description</td>
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
            <tr>
                <td>24/8/2024</td>
                <td>9:00PM - 10:00PM</td>
                <td>Google Meet</td>
                <td>Review sprint 1 and discuss sprint 2</td>
                <td>Sprint 2 tasks</td>
                <td>All members</td>
                <td>None</td>
            </tr>
            <tr>
                <td>8/9/2024</td>
                <td>9:00PM - 10:00PM</td>
                <td>Google Meet</td>
                <td>Review sprint 2 and discuss documentation and prototype</td>
                <td>Documentations and finsih prototype</td>
                <td>All members</td>
                <td>None</td>
            </tr>
            <tr>
                <td>17/9/2024</td>
                <td>8:00PM - 9:00PM</td>
                <td>Google Meet</td>
                <td>More discussion on technical and user manual documentations</td>
                <td>Work on assigned parts of the document</td>
                <td>All members</td>
                <td>None</td>
            </tr>
            <tr>
                <td>19/9/2024</td>
                <td>10:30PM - 11:30PM</td>
                <td>Google Meet</td>
                <td>Review the finsihed tasks</td>
                <td>Update and perfect documentation</td>
                <td>All members</td>
                <td>None</td>
            </tr>
            <tr>
                <td>20/9/2024</td>
                <td>3:00PM - 11:30PM</td>
                <td>Discord</td>
                <td>Prepare and practice presentation</td>
                <td>Prepare for next sprint</td>
                <td>All members</td>
                <td>None</td>
            </tr>
            <tr>
                <td>21/9/2024</td>
                <td>9:00PM - 10:00PM</td>
                <td>Discord</td>
                <td>Create tasks for sprint 3 and assign them</td>
                <td>Complete the tasks assigned</td>
                <td>All members</td>
                <td>None</td>
            </tr>
          </table>
      </div>
    );
}

export default meetingMinutes;