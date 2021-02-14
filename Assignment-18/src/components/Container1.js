import img from "../images/3426526.jpg";
function Container1() {
  return (
    <section class="container-1">
      <div class="container grid">
        <div class="container-1-text">
          <h1>Being Geeky</h1>
          <h2>Your own video and theortical study place.</h2>
          <p>
            Being Geeky is one of the best platform for the online learning.
            With the best study material.Dummy text is text that is used in the
            publishing industry or by web designers to occupy the space which
            will later be filled with 'real' content. This is required when, for
            example, the final text is not yet available. Dummy text is also
            known as 'fill text'. It is said that song composers of the past
            used dummy texts as lyrics when writing melodies in order to have a
            'ready-made' text to sing with the melody. Dummy texts have been in
            use by typesetters since the 16th century.
          </p>
          <a href="/test" class="btn btn-outline">
            Read More
          </a>
        </div>
        <div class="container-1-img">
          <img src={img} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Container1;
