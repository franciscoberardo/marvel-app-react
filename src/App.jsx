import MarvelMovieList from "./components/MarvelMovieList";
import Header from "./components/Header";

function App() {
  return (
    <div className="App bg-neutral-950 min-h-screen w-full">
      <Header />
      <MarvelMovieList />
    </div>
  );
}

export default App;