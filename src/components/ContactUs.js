import React from 'react';

export default function ContactUs() {
  return (
    <div>
      <div className="container my-4">
        <h2>Contact Us</h2>
        <form>
          <div className="form-group">
            <label for="exampleFormControlInput1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="rakeshreddy@gmail.com"
            />
          </div>
          {/* <div className="form-group">
            <label for="exampleFormControlSelect1">Select Your Query</label>
            <select className="form-control" id="exampleFormControlSelect1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div> */}
          <div className="form-group">
            <label for="exampleFormControlTextarea1">Elaborate Your Concern</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <form>
            <button type="submit" className="btn btn-primary my-2">
              Submit
            </button>
          </form>
        </form>
      </div>

      <footer className="container">
        <p className="float-end">
          <a href="#">Back to top</a>
        </p>
        <p>
          © 2020–2024 Rakesh sols, Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a>
        </p>
      </footer>
    </div>
  );
}

