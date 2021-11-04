import { useState, useEffect } from "react";
import "./App.css";
import Player from "./Components/Player/Player";
import Playlist from "./Components/Playlist/Playlist";
import axios from "axios";
import Navbar from "./Components/Navbar/Navbar";
import { CarouselItem } from "./Components/Carousel/Carousel";
import Carousel from "./Components/Carousel/Carousel";

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedURL, setSelectedURL] = useState("");

  var config = {
    method: "get",
    url: "https://api-uat.greatmanagerinstitute.com/api/v2/test/getTrailerList",
  };

  axios.interceptors.request.use(
    (config) => {
      config.headers.Source = "myAPp";
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  function handleURLChange(url) {
    setSelectedURL(url);
  }

  useEffect(() => {
    axios(config)
      .then(function (response) {
        setMovies(response.data.data);
        setSelectedURL(response.data.data[0].trailer);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="movies-app">
        <div>
          <Player selectedURL={selectedURL} />
        </div>
            <div className="grid-container" id="playListTemp">
              <Carousel>
                {movies &&
                  movies.map((element, index) => {
                    return (
                      <CarouselItem key={index} width="50%">
                        <div >
                          <Playlist
                            name={element.name}
                            year={element.year}
                            poster={element.poster}
                            trailerLink={element.trailer}
                            handleURLChange={handleURLChange}
                          />
                        </div>
                      </CarouselItem>
                    );
                  })}
              </Carousel>
            </div>
      </div>
    </>
  );
}

export default App;
