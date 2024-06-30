import logo from './logo.svg';
import './App.css';
import ProfileCard from './ProfileCard';

const USER = {
  title: "Sarah Dole",
  description: "Front End Engineer @ Microsoft",
  selfIntro: "I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer.",
  contactMeUrl: "https://www.google.com",
  contacts: [
    {
      type: 'github',
      url: "https://www.github.com",
    },
    {
      type: 'linkedin',
      url: "https://www.linkedin.com",
    },
    {
      type: 'instgram',
      url: "https://www.instagram.com/",
    },
    {
      type: 'x',
      url: "https://www.x.com",
    },
  ]
}

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <ProfileCard user={USER} />
    </div>
  );
}

export default App;
