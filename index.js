function getMood() {
  const mood = ["Happy", "Sad", "Angry", "Quiet", "Mellow"];
  return mood[Math.floor(Math.random() * mood.length)];
}

class JSXDemo extends React.Component {
  render() {
    return (
      <div>
        <h1>My Mood is: {getMood()}</h1>
      </div>
    );
  }
}

ReactDOM.render(<JSXDemo />, document.getElementById("root"));
