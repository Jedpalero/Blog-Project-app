import React, { useEffect } from "react";

const About = ({ setActive }) => {
  useEffect(() => {
    setActive("about");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container padding">
      <div className="col-md-12">
        <div className="row mx-0">
          <main>
            <p>This is my CS50x Final Project</p>
          </main>
          <footer>
            <div className="footer">
              <p>
                Credits to @CodeWithVishal for the tutorial for this project
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default About;
