class JSXDemo extends React.Component {
  render() {
    return (
      <div>
        <h1>My Image!</h1>
        <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </div>
    );
  }
}

ReactDOM.render(<JSXDemo />, document.getElementById("root"));
