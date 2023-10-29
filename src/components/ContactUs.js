import React from "react";

export default function ContactUs() {
  return (
    <div>
      <div className="container my-2">
        <div className="key my-2">
          <h1 className="animate-charcter">Contact Us</h1>
        </div>
        <div>
          <form>
            <div className="form-group">
              <label className="dss" for="ex1">
                Email address
              </label>
              <input 
                name="ex1"
                type="email"
                className="form-control"
                id="ex1"
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
              <label className="dss" for="exx1">
                Elaborate Your Concern
              </label>
              <textarea
              name="exx1"
                className="form-control"
                id="exx1"
                rows="3"
              ></textarea>
            </div>
            <form>
              <button type="submit" className="btn btn-primary my-2">
                Submit
              </button>
            </form>
          </form>
        </div>
      </div>
      <footer className="container">
        <p className="float-end">
          <a href="#">Back to top</a>
        </p>
        <p className="dss">
          © 2020–2024 Rakesh sols, Inc. · <a href="#">Privacy</a> ·{" "}
          <a href="#">Terms</a>
        </p>
      </footer>
    </div>
  );
}
