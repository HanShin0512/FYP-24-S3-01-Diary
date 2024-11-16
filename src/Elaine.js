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
          <tr>
            <td>22/9/2024 - 28/9/2024</td>
            <td> 
              <ul>
                <li>Searched for other facial recognition methods for greater accuracy</li>
                <li>Looked through the sample images in the github</li>
                <li>Tried facial animation with my own face to see how bad it is</li>
              </ul>
            </td>
            <td> 
              <ul>
                <li>Facial recognition is very poor; "four eyes" problem</li>
                <li>Understanding how model is trained is difficult; would also take a long time to train</li>
              </ul>  
            </td>
          </tr>
          <tr>
            <td>29/9/2024 - 5/10/2024</td>
            <td> 
              <ul>
                <li>Looked for stock videos for the different emotions</li>
                <li>Edited and uploaded some to our shared drive to meet the requirements to train the model with</li>
              </ul>
            </td>
            <td> 
              <ul>
                <li>Difficult to find good stock videos that are free, have no watermark, and face forward</li>
              </ul>  
            </td>
          </tr>
          <tr>
            <td>6/10/2024 - 12/10/2024</td>
            <td> 
              <ul>
                <li>Looked for more stock videos for the different emotions; happy was done</li>
                <li>Edited and uploaded some to our shared drive to meet the requirements to train the model with</li>
              </ul>
            </td>
            <td> 
              <ul>
                <li>Difficult to find good stock videos that are free, have no watermark, and face forward</li>
                <li>Angry stock videos have too many hand movements that sometimes cover the face</li>
                <li>Sad stock videos usually are not forward-facing</li>
              </ul>  
            </td>
          </tr>
          <tr>
            <td>13/10/2024 - 19/10/2024</td>
            <td> 
              <ul>
                <li>Looked for more stock videos for the different emotions; angry and sad were done</li>
                <li>Edited and uploaded videos to our shared drive to meet the requirements to train the model with</li>
              </ul>
            </td>
            <td> 
              <ul>
                <li>Difficult to find good stock videos that are free, have no watermark, and face forward</li>
                <li>Need to find expression videos that are distinct from each other so they're not mistaken for one another</li>
                <li>Surprised and fear videos mostly had a hand covering the mouth; not ideal to use as source videos</li>
                <li>Disgusted expression videos are the most difficult to find; don't turn up a lot on search engines</li>
              </ul>  
            </td>
          </tr>
          <tr>
            <td>20/10/2024 - 26/10/2024</td>
            <td> 
              <ul>
                <li>Looked for more stock videos for the different emotions; primarily looked for surprised, fear, and disgust</li>
                <li>Edited and uploaded videos to our shared drive to meet the requirements to train the model with</li>
              </ul>
            </td>
            <td> 
              <ul>
                <li>Difficult to find good stock videos that are free, have no watermark, and face forward</li>
                <li>Need to find expression videos that are distinct from each other so they're not mistaken for one another</li>
                <li>Surprised and fear videos mostly had a hand covering the mouth; not ideal to use as source videos</li>
                <li>Disgusted expression videos are the most difficult to find; don't turn up a lot on search engines</li>
              </ul>  
            </td>
          </tr>
          <tr>
            <td>27/10/2024 - 2/11/2024</td>
            <td> 
              <ul>
                <li>Looked for more stock videos for the different emotions; primarily looked for surprised, fear, and disgust</li>
                <li>Uploaded original unedited and untrimmmed videos; previous ones were too cropped</li>
              </ul>
            </td>
            <td> 
              <ul>
                <li>Difficult to find good stock videos that are free, have no watermark, and face forward</li>
                <li>Need to find expression videos that are distinct from each other so they're not mistaken for one another</li>
                <li>Surprised and fear videos mostly had a hand covering the mouth; not ideal to use as source videos</li>
                <li>Disgusted expression videos are the most difficult to find; don't turn up a lot on search engines</li>
                <li>Now needed to find videos showing shoulders; had to discard videos that are too zoomed in</li>
              </ul>  
            </td>
          </tr>
          <tr>
            <td>3/11/2024 - 9/11/2024</td>
            <td> 
              <ul>
                <li>Looked for more stock videos for the different emotions; primarily looked for surprised, fear, and disgust</li>
                <li>Trimmed down some videos</li>
              </ul>
            </td>
            <td> 
              <ul>
                <li>Difficult to find good stock videos that are free, have no watermark, and face forward</li>
                <li>Need to find expression videos that are distinct from each other so they're not mistaken for one another; fear, surprise, and disgust are quite close</li>
                <li>Surprised and fear videos mostly had a hand covering the mouth; not ideal to use as source videos</li>
                <li>Disgusted expression videos are the most difficult to find; don't turn up a lot on search engines</li>
                <li>Finding videos that aren't zoomed in was difficult</li>
              </ul>  
            </td>
          </tr>
          <tr>
            <td>10/11/2024 - 16/11/2024</td>
            <td> 
              <ul>
                <li>Did final documents for submission</li>
                <li>Worked on final reflective diary for individual submission</li>
                <li>Tweaked final presentation slides from mid-point slides</li>
              </ul>
            </td>
            <td> 
              <ul>
                <li>Had a few issues with certain test cases not working as intended; had to get them checked and altered to work</li>
              </ul>  
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Elaine;
