import React from 'react';
import ReactDOM from 'react-dom/client';
import './Style.css';
import Thwin from './Thwin';
import Minseo from './Minseo';
import Elaine from './Elaine';
import Xiong from './Xiong';
import Kan from './Kan';
import MeetingMinutes from './meeting-minutes';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>

      <div className='member-info'>
        <table>
          <tr>
            <th> Name </th>
            <th> UOW ID </th>
            <th> Email </th>
          </tr>
          <tr>
            <td> Yun Minseo (leader) </td>
            <td> 8225746 </td>
            <td> yun011@mymail.sim.edu.sg </td>
          </tr>
          <tr>
            <td> Thwin Han Shin </td>
            <td> 7881575 </td>
            <td> thwinhs001@mymail.sim.edu.sg </td>
          </tr>
          <tr>
            <td> Esther Elaine Haryono </td>
            <td> 7911774 </td>
            <td> eeharyon001@mymail.sim.edu.sg </td>
          </tr>
          <tr>
            <td> Xiong Binsong </td>
            <td> 8082674 </td>
            <td> bxiong002@mymail.sim.edu.sg </td>
          </tr>
          <tr>
            <td> Kan Htet Myat San </td>
            <td> 8107300 </td>
            <td> kanhms001@mymail.sim.edu.sg </td>
          </tr>
        </table>
      </div>

      <div className='diary'>
        <Minseo />
        <Thwin />
        <Elaine />
        <Xiong />
        <Kan />
      </div>

      <MeetingMinutes />
      
    </>
  </React.StrictMode>
);

reportWebVitals();
