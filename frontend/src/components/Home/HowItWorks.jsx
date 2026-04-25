import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks animate-up">
        <div className="container">
          <h3>How Career Connect Works !</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <h4>Create Account</h4>
              <p>
                Sign up as a job seeker or employer to get started with your 
                career journey or to find the best talent.
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <h4>Find/Post a Job</h4>
              <p>
                Browse through thousands of openings or post new opportunities 
                to reach millions of applicants.
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <h4>Apply/Hire</h4>
              <p>
                Submit your applications with ease or review candidates and 
                hire the perfect fit for your team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
