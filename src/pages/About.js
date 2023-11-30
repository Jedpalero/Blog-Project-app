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
            <h3 className="text-header">This is my CS50x Final Project</h3>
            <p className="text">
              It is a responsive blog app using JavaScript as the main language,
              and React for the framework. For the design I use bootstrap and
              sass, and fontawsoome for the icons. And for the app development
              backend I used Firebase, for the realtime database that store and
              sync data in real time across all of the users' devices.
            </p>
            <p className="text">
              In this blog I added several features like email authentication,
              search, like and comment. And I also make it responsive by making
              it possible for you to create a post, update and delete your blog.
              and lastly I included pagination in order for the user to view
              their post in discrete page.
            </p>
          </main>
          <footer>
            <div className="footer-bottom">
              <p>
                Credits to{" "}
                <a href="https://www.youtube.com/@codewithvishal2968">
                  @CodeWithVishal
                </a>{" "}
                for the tutorial and Inspiration for this project.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default About;
