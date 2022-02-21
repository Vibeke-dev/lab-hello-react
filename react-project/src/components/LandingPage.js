// React Component <Gallery />

function Landing(props) {
  return (
    <div>
  <img src={props.hello.image} />
  

      <h2>{props.hello.name}</h2>
      <p>{props.hello.description}</p>
    </div>
  );
}

export default Landing;