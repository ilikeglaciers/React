import './App.css';

function App() {
  const title='Welcome to the new blog!';
  const likes=50;
  const link="http://www.google.com";

  return (
    <div className="App">
      <div className="content">

        <h1>App Component</h1>
        <h1>{title}</h1>
        <p>Liked: {likes}</p>
        <p>{ 10 }</p>
        <p>{ "This is a sample string." }</p>
        <p>{ [1,2,3,4,5] }</p>
        <h1 style={{color:'magenta'}}> {(Math.random()*1000).toFixed(3)}</h1>
        <a href={link}>Google Site</a>
        {/* Curly Braces help display the dynamic value of the variable.*/}
        {/* We can't output booleans or objects in this code. */}

      </div>
    </div>
  );
}

export default App;