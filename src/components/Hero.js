import React from 'react';
import AppCapture from '../images/app_capture.png';

function Hero() {
    return (
        <>
        <div class="jumbotron jumbotron-fluid d-flex bg-white p-1">
         
            <div class="container m-5 w-100 shadow p-5 mb-5 bg-white rounded">
              <h1 class="display-4">Empowering Schools</h1>
                  <p class="lead">with simple, yet detailed management modules.</p>
                  <a class="btn btn-primary btn-lg" href="#getting started" role="button">Get Started for free</a>
            </div>
                <div class="container m-5 p-2 w-100">
              <img src={AppCapture} class="img-fluid rounded" alt="App front pages" width="100%" height="90%"></img>
                </div>
        </div>
      
            <div class="bg-white p-5 pt-1 shadow rounded">
                <div class="m-3">
                    <h5> Best online school management software</h5>
                <h6>(with on-the-go CBT)</h6>
            </div>
                

                
            <button type="button" class="btn btn-outline-dark .btn-lg p-3 m-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
                        <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
                        </svg> Create School</button>
            <button type="button" class="btn btn-outline-dark .btn-lg p-3 m-2">Access Demo
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="25" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>
                </button>
                </div>
            </>
    );
}

export default Hero;
