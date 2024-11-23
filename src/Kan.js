import React from 'react';
import './Style.css';

function Kan() {
  return (
    <div className="App">
      <h1>Kan Htet Myat San <a href='https://docs.google.com/document/d/19aM5u19YeD6TM4jZvgCxNk1aGuO0EfKk/edit?usp=sharing&ouid=112959193424389665200&rtpof=true&sd=true'>[Reflective Diary (File)]</a></h1>
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
          </tr>
          <tr>
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
          <tr>
            <td>18/8/2024 - 24/8/2024</td>
            <td>Managed to redirect users based on their role: user or admin
              Started Desigining database model based on their needs.
              What info to save like username, email, role.
            </td>
            <td>Need a lot of testing
              Security consideration as there is an admin role.
            </td>
          </tr>
          <tr>
            <td>25/8/2024 - 7/8/2024</td>
            <td>Implemented a database model in firebase firestore that stores user info
              Started learning about cloud functions for admin functionalities
            </td>
            <td>Need cloud functions when admin needs to create or update normal users.
              Admin logged out completely after updating a normal user information.
              Admin logged out completely after creating a new user.
            </td>
          </tr>
          <tr>
            <td>8/9/2024 - 14/9/2024</td>
            <td>Discuss about the AI model
              Started doing cloud functions for backend
            </td>
            <td>Deploying backend in cloud have to fix some issues.
            </td>
          </tr>
          <tr>
            <td>15/9/2024 - 21/9/2024</td>
            <td>Implemented create new users for admin
              Implemented update new users for admin
            </td>
            <td>Need a lot of tests.
              Firebase version conflict. Cannot use v1 together with v2.
            </td>
          </tr>
          <tr>
            <td>22/9/2024 - 28/9/2024</td>
            <td>Have to revert back to older version in github to fix the firebase functions verison conflict.
              Fix all the cloud functions.
            </td>
            <td>Fixing google cloud image in goolge cloud console takes a considerate amount of time.
            </td>
          </tr>
          <tr>
            <td>29/9/2024 - 5/10/2024</td>
            <td>Finished all the admin functionalities.
              Have to create a new database design to store new information.
            </td>
            <td>Our payment model changed from one time payment to subscribption model.
            </td>
          </tr>
          <tr>
            <td>6/10/2024 - 12/10/2024</td>
            <td>Finished new database model that have subscription status and more info about subscribption.
              Finding a way to do scheduler function to refresh use limit for free users.
            </td>
            <td>Free user will have 5 usage of generating video every week but there was miscommunicaiton.
              It is just free user have 5 videos that can be saved in cloud storage.
            </td>
          </tr>
          <tr>
            <td>13/10/2024 - 19/10/2024</td>
            <td>Added scheduler function to check if the user is still subscribed.
              Started implementing cloud storage for users.
            </td>
            <td>Fixing bugs
              Come up with a way that only logged in user can view their own videos for privacy.
            </td>
          </tr>
          <tr>
            <td>20/10/2024 - 26/10/2024</td>
            <td>Changed the delete normal users from admin to also delete all their infos and storage related to them
              for privacy.
              Wrote some new APIs for normal users to get their subscription status and updating their info.
            </td>
            <td>More bugs fixing in delete user where it got a bug when admin deletes users but the user doesn't have any videos
              in their storage.
            </td>
          </tr>
          <tr>
            <td>27/10/2024 - 2/10/2024</td>
            <td>Fixing more bugs and cleaning up code.
              Now i am familiar with firebase so it takes less time to fix things.
              Help with final documentation and test cases.
            </td>
            <td>N/A
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Kan;
