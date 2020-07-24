import React from 'react';
import { BrowserRouter as Router,Link } from 'react-router-dom';

function SideBar () {
    return (
        <div class="col-md-4">

        <div class="card my-4">
          <h5 class="card-header">Search</h5>
          <div class="card-body">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Search for..." />
              <span class="input-group-append">
                <button class="btn btn-secondary" type="button">Go!</button>
              </span>
            </div>
          </div>
        </div>

        <div class="card my-4">
          <h5 class="card-header">Categories</h5>
          <div class="card-body">
            <div class="row">
                <Router>
              <div class="col-lg-6">
                <ul class="list-unstyled mb-0">
                  <li>
                    <Link to="/">Web Design</Link>
                  </li>
                  <li>
                    <Link to="/">HTML</Link>
                  </li>
                  <li>
                    <Link to="/">Freebies</Link>
                  </li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul class="list-unstyled mb-0">
                  <li>
                    <Link to="/">JavaScript</Link>
                  </li>
                  <li>
                    <Link to="/">CSS</Link>
                  </li>
                  <li>
                    <Link to="/">Tutorials</Link>
                  </li>
                </ul>
              </div>
              </Router>
            </div>
          </div>
        </div>

        <div class="card my-4">
          <h5 class="card-header">Side Widget</h5>
          <div class="card-body">
            You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!
          </div>
        </div>

      </div>
    );
}

export default SideBar;