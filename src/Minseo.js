import React from 'react';
import './Style.css';

function Minseo() {
  return (
    <div className="App">
      <h1>Yun Minseo (Leader) <a href='https://drive.google.com/file/d/1jLBUJH6y6skZu2F1hxRZWM2oihxW1Cmh/view?usp=sharing'>[Reflective Diary (File)]</a></h1>
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
          <tr>
            <td>4/7/2024 - 3/8/2024</td>
            <td>
              <ul>
                <li>Update some use case diagrams</li>
                <li>Design overall website wireframes</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>N/A</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>4/8/2024 - 10/8/2024</td>
            <td>
              <ul>
                <li>Review finalized version of Project Requirement Documentation</li>
                <li>Draw Functional Hierarchy Diagram</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>N/A</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>11/8/2024 - 17/8/2024</td>
            <td>
              <ul>
                <li>Try reimplementing GANimation<sup><a href='https://github.com/albertpumarola/GANimation'>[Github]</a></sup></li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Facing dependency issues.</li>
                <li>Face landmarking doesn't work well (Assuming the reason as input dataset problem, trying to solve.)</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>18/8/2024 - 24/8/2024</td>
            <td>
              <ul>
                <li>Firebase initialization</li>
                <li>Search for Diffusion models related to face expression animating</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>N/A</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>25/8/2024 - 31/8/2024</td>
            <td>
              <ul>
                <li>Search some implementations with pretrained models</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>N/A</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>1/9/2024 - 7/9/2024</td>
            <td>
              <ul>
                <li>Try setting on some GAN models</li>
                <li>- <a href='https://github.com/donydchen/ganimation_replicate'>ganimation_replicate</a></li>
                <li>- <a href='https://github.com/genforce/interfacegan'>InterFaceGAN</a></li>
                <li>- <a href='https://github.com/MingtaoGuo/Face-Attribute-Editing-StyleGAN3'>Face-Attribute-Editing-StyleGAN3</a></li>
                <li>Try setting on some Diffusion model</li>
                <li>- <a href='https://github.com/yuangan/EAT_code'>Efficient Emotional Adaptation for Audio-Driven Talking-Head Generation</a></li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Facing dependency issues.</li>
                <li>Need to modify the dataset structure and inference method to match our goal.</li>
                <li>Can 'modify' the image, but hard to make 'animate'.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>8/9/2024 - 14/9/2024</td>
            <td>
              <ul>
                <li>Try setting on some non-GAN (CNN) model</li>
                <li>- <a href='https://github.com/zhanglonghao1992/One-Shot_Free-View_Neural_Talking_Head_Synthesis'>One-Shot Free-View Neural Talking Head Synthesis</a></li>
                <li>Try setting on some GAN models</li>
                <li>- <a href='https://github.com/xiaohanghu/2CET-GAN'>2CET-GAN</a></li>
                <li>- <a href='https://github.com/OpenTalker/StyleHEAT'>StyleHEAT: One-Shot High-Resolution Editable Talking Face Generation via Pretrained StyleGAN</a></li>
                <li>Modify inference function and dataset loader of StyleHEAT so we can use it for our project</li>
                <li>Set ML API tunnel with StyleHEAT inference runner using FastAPI</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Face some errors with dependencies, especially with CUDA driver.</li>
                <li>StyleHEAT's internal design of dataset loader have error when load data with API.</li>
                <li>Took lots of time to analyse the implementation codes and modify to solve the API async data error.</li>
                <li>Still have some face alignment issue. Need to work on it.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>15/9/2024 - 21/9/2024</td>
            <td>
              <ul>
                <li>Writing down the Preliminary Technical Document</li>
                <li>Writing down the Preliminary User Manual</li>
                <li>Preparing presentation</li>
                <li>Connect ML server using vercel proxy</li>
                <li>Add some error handlings on front-end</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>ML server only supports HTTP and our deployment is on HTTPS. Solve an issue by using proxy.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>22/9/2024 - 28/9/2024</td>
            <td>
              <ul>
                <li>Trying to solve face alignment issue.</li>
              </ul>
            </td>
            <td>
              <ul>
                <li></li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>29/9/2024 - 5/10/2024</td>
            <td>
              <ul>
                <li>Finding an labelled emotional video dataset which can be used for both training and transferring.</li>
                <li>- <a href='https://ibug.doc.ic.ac.uk/resources/aff-wild2/'>Aff-Wild2 dataset</a></li>
                <li>- <a href='https://www2.informatik.uni-hamburg.de/wtm/OMG-EmotionChallenge/'>OMG-Emotion Dataset</a></li>
                <li>Find target video can be used for "sad" emotion.</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Aff-Wild2 dataset needs to contact them. I've already get access approval, but need to pay 500GBP for perfunctory fee.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>6/10/2024 - 12/10/2024</td>
            <td>
              <ul>
                <li>Trying to train the 3DMM extractor, but not successful.</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>The dataset for train the StyleHEAT's 3DMM extractor is already deprecated, or the size is too large. (VoxCelebA)</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>13/10/2024 - 19/10/2024</td>
            <td>
              <ul>
                <li>Try implementing another Deep Learning approach: <a href='https://github.com/KwaiVGI/LivePortrait'>KwaiVGI/LivePortrait</a></li>
                <li>Find target video can be used for "surprised" emotion.</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>N/A</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>20/10/2024 - 26/10/2024</td>
            <td>
              <ul>
                <li>Setting an API for new model (KwaiVGI)</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>N/A</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>27/10/2024 - 2/11/2024</td>
            <td>
              <ul>
                <li>Setting the AI to inference the painting and animal faces too.</li>
                <li>Imply <a href='https://github.com/openai/CLIP'>OpenAI CLIP</a> for classify the input image is human face or animal face.</li>
                <li>Verifying the driving videos we have are working correctly or not.</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>N/A</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>3/11/2024 - 9/11/2024</td>
            <td>
              <ul>
                <li>Get access to Aff-Wild2 Dataset</li>
                <li>Analyse emotional labels in Aff-Wild2 dataset to know which video can be used</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Dataset contains lots of videos, so need to watch through it and edit it for matching our input. Use script for collate the labels.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>10/11/2024 - 16/11/2024</td>
            <td>
              <ul>
                <li>Editing the Aff-Wild2 dataset for target video purpose</li>
                <li>Extract some sample inferenced animation for the Final Report</li>
                <li>Write test cases</li>
                <li>Edit 1-min video trailer</li>
                <li>Write Final User Manual</li>
                <li>Write Final Technical Document</li>
                <li>Make Final Presentation Slides</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>Some videos look suitable, but the actual result doesn't.</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Minseo;
