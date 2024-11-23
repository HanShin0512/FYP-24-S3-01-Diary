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
            <td> Yun Minseo (Leader) </td>
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

      <div className='project-materials'>
        <table>
          <tr>
            <th>Project Website</th>
            <th><a href='https://uowfyp-24-s3-01.vercel.app/'>https://uowfyp-24-s3-01.vercel.app/</a></th>
            <th>Assessment Submission (Google Drive)</th>
            <th><a href='https://drive.google.com/drive/folders/1t6pWyRWchQgsKFCYqTgI8EX8gRHSfE6X?usp=sharing'>Google Drive Folder Link</a></th>
          </tr>
          <tr>
            <td colSpan={2} style={{ textAlign: 'center' }}><b>Project Requirement Documentation</b></td>
            <td colSpan={2} style={{ textAlign: 'center' }}><b><a href='https://drive.google.com/file/d/1DX6JQsvDRBwHtdEwGn6_xDFMVcSEo0bN/view?usp=sharing'>Project Requirement Documentation (Google Drive)</a></b></td>
          </tr>
          <tr>
            <td>Preliminary Technical Documentation</td>
            <td><a href='https://drive.google.com/file/d/16vzuhs8pBBvmrgokPwudt1oHNnb-Mgwh/view?usp=sharing'>Preliminary Technical Documentation (Google Drive)</a></td>
            <td><b>Final Technical Documentation</b></td>
            <td><b><a href='https://drive.google.com/file/d/1rTletwwnEhlMyu5swrOCOv3Ak4S8sOI_/view?usp=sharing'>Final Technical Documentation (Google Drive)</a></b></td>
          </tr>
          <tr>
            <td>Preliminary User Manual</td>
            <td><a href='https://drive.google.com/file/d/1uKarzKk_vp77DLKtg9n3qoIT1dBrzLXw/view?usp=sharing'>Preliminary User Manual (Google Drive)</a></td>
            <td><b>Final User Manual</b></td>
            <td><b><a href='https://drive.google.com/file/d/1yFOj4SifXEnQVlmh5NlTwwz3maUS0dPs/view?usp=sharing'>Final User Manual (Google Drive)</a></b></td>
          </tr>
          <tr>
            <td>Mid-point Presentation Slide</td>
            <td><a href='https://docs.google.com/presentation/d/17fgU8WaHO1glKwjdNlsriRv4GssPiAlc/edit?usp=sharing&ouid=112959193424389665200&rtpof=true&sd=true'>Mid-point Presentation Slide (Google Drive)</a></td>
            <td><b>Final Presentation Slide</b></td>
            <td><b><a href='https://docs.google.com/presentation/d/1TQjDBMGti6HMMJ5KJ1f16s49VLNM0O9W/edit?usp=sharing&ouid=112959193424389665200&rtpof=true&sd=true'>Final Presentation Slide (Google Drive)</a></b></td>
          </tr>
          <tr>
            <td colSpan={4} style={{ textAlign: 'center' }}><b>Project Video</b></td>
          </tr>
          <tr>
            <td colSpan={4} style={{ textAlign: 'center' }}><iframe width="560" height="315" src="https://www.youtube.com/embed/TwbIJbMOFE8?si=gVSs34msg-k7zlRb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></td>
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
