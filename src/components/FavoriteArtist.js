//import { useHistory } from "react-router-dom";

const FavoriteArtist = () => {
    return (
    <section className="favorite-section">
        <img  className="artist" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGzT8Au7mJqddinJ2qSkgkyNmGSt50fw6zfQ&usqp=CAU" alt="The Tatepos"/>
        <div className="artist-info">
            <h2>The Tatepos</h2>
            <h3>Mein personal</h3>
            <img width="80px" height="80px" src="https://static.thenounproject.com/png/117815-200.png" alt="play button" />
        </div> 
    </section>
    )

    /*let history = useHistory();

    const detailsGameHandler = (id) => {
        history.push({
          pathname: `/favorites/${id}`,
        });
      };

    return (
        <>
            <h2>{props.name}</h2>
            <h3>{props.rating}</h3>
            <img src={props.background_image} alt={props.name} />
            <button onClick={() => detailsGameHandler(props.id)}>Game Details</button>

        </>
    )*/
}

export default FavoriteArtist;
