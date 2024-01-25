function Project1() {
  return (
    <section className="project1">
      <div className="project1-container">
        <div className="">
          <div className="image">
            <video src="/recipe.mp4" autoPlay muted controls></video>
          </div>
          <div className="text">
            <h1>
              forkify<span>Web Application</span>
            </h1>
            <p>
              Welcome to our Recipe Explorer! 🧑‍🍳🔍 This project seamlessly
              connects you with a world of delicious possibilities. Fetching
              data from APIs, it empowers you to search and discover a diverse
              range of recipes. Elevate your culinary journey with the ease of a
              click.
            </p>
            {/* <p>
              It was created by me for users to search for recipe of their
              favourite foods,where data is fetched from an API
            </p> */}
            <p>
              <span>HTML</span>
              <span>SASS</span>
              <span>JS</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project1;
