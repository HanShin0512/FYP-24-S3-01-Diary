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
          <tr>
            <td>4/8/2024 - 10/8/2024</td>
            <td>
              <ul>
                <li>Did minor tweaks to competitor research to add more details</li>
                <li>Did extra research on GAN models and how to implement them</li>
              </ul>
            </td>
            <td>
                <li>Trying to manage time between FYP and my other assignment is difficult since the latter has a tighter deadline</li>
                <li>Understanding how the GAN models work is difficult since we have no experience with them, and instructions aren not beginner friendly</li>
            </td>
          </tr>
          <tr>
            <td>11/8/2024 - 17/8/2024</td>
            <td>
              <ul>
                <li>Continued to do research on various GAN models</li>
              </ul>
            </td>
            <td>
                <li>Not many GAN models are optimized for facial animation; unsure how to implement to site</li>
                <li>Don't have a lot of experience with GitHub, so understanding how to use it for the project is difficult; will continue to get used to it</li>
            </td>
          </tr>
          <tr>
            <td>18/8/2024 - 24/8/2024</td>
            <td>
              <ul>
                <li>Did some reading on GANimation</li>
                <li>Discussed how to proceed with Sprint 2</li>
              </ul>
            </td>
            <td>
                <li>Attempting to implement contents of an existing GAN is difficult without experience</li>
            </td>
          </tr>
          <tr>
            <td>25/8/2024 - 7/9/2024</td>
            <td>
              <ul>
                <li>Looked through different GAN models to see which one might work best</li>
                <li>Attempted to play around with some of the models</li>
              </ul>
            </td>
            <td>
                <li>Some extra difficulty due to using an Apple Silicon MacBook, since some programs are not compatible with Silicon-based Macs</li>
            </td>
          </tr>
          <tr>
            <td>8/9/2024 - 14/9/2024</td>
            <td>
              <ul>
                <li>Discussed how to do the documentation for Mid-point presentation</li>
                <li>Looked through Technical and User Manual examples to figure out format</li>
              </ul>
            </td>
            <td>
                <li>Format of Technical and User Manual examples was confusing; unsure how to start</li>
            </td>
          </tr>
          <tr>
            <td>15/9/2024 - 21/9/2024</td>
            <td>
              <ul>
                <li>Worked on Technical Manual and User Manual</li>
                <li>Worked on presentation slides for midpoint presentation</li>
              </ul>
            </td>
            <td>
                <li>Sequence diagrams were a bit confusing; unsure how exactly to do it since we did not do Object-Oriented Programming</li>
                <li>Content of presentation slides was difficult to consolidate; had to remember what our Unique Selling Point was</li>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Elaine;
