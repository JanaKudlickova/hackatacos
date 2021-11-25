import { useState, useEffect } from "react";
import { RadioBrowserApi } from "radio-browser-api";
import AudioPlayer from "react-h5-audio-player";
import Artist from "./Artist";
import SupportArtist from "./SupportArtist";


const Radio = () => {
    const [stations, setStations] = useState();
    const [stationGenre, setStationGenre] = useState("all")


    useEffect(() => {
        setupApi(stationGenre).then((data) => {
            setStations(data);
        });
    }, [stationGenre]);

    const setupApi = async (stationGenre) => {
        const api = new RadioBrowserApi(fetch.bind(window), "My Radio App");

        const stations = await api.searchStations({
            language: "english",
            countryCode: 'US',
            tag: stationGenre,
            limit: 1,
        });

        return stations;
    };

    const genres = [
        "Country",
        "Rap",
        "Rock",
        "Pop",
    ];

    /*const setDefaultSource = (event) => {
        event.target.src = defaultImage;
    };*/

    return (
      <>
        <div className="radio">
            <div className="filters"></div>
                {genres.map(genre => {
                    return (
                    <button className={stationGenre === genre ? "selected" : "off"} 
                    onClick={() => setStationGenre(genre)}>{genre}</button>
                )})}  
        </div>
        <div className="stations">
            {stations && stations.map((station, index) => {
                return (
                    <div className="station" key={index}>
                        <div className="stationName">
                            <img className="logo" src={station.favicon} alt="station logo"  /*onError={setDefaultSource} *//>
                            <div className="name">{station.name}</div>
                        </div>
                            <AudioPlayer className="player" src={station.urlResolved}
                            showJumpControls={false}
                            layout="stacked"
                            customProgressBarSection={[]}
                            customControlsSection={["MAIN_CONTROLS", "VOLUME_CONTROLS"]}
                            autoPlayAfterSrcChange={false}
                            />
                    </div>
                )
            })}
                <h2>Now playing: Mein personal by The Tatepos</h2>
                <Artist />
                <SupportArtist/>
        </div>
      </>
    )
}

export default Radio;
