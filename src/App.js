import './App.css';
import Movie from './Movie';



let movieData = [
  {
    title: "The Fellowship of the Ring",
    hours: "2",
    minutes: "58"
  },
  {
    title: "The Two Towers",
    hours: "2",
    minutes: "59"
  },
  {
    title: "Return of the King",
    hours: "3",
    minutes: "21"
  }
]

const movies = movieData.map((components, idx) => {
  return <Movie title={components.title} hours={components.hours} minutes={components.hours} key={idx} />
});


function App() {
  return (
    <div className="App">
      {movies}
    </div>
  );
}

export default App;