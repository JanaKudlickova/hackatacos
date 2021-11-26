import { useHistory } from "react-router-dom";

const Artist=()=>{
    let history = useHistory();

    return(
    <section>
        <img  className="artist" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGzT8Au7mJqddinJ2qSkgkyNmGSt50fw6zfQ&usqp=CAU" alt="The Tatepos"/>
        <p> The Tatepos is a Swiss rock band . Francis, the lead singer, started the band in his garage in 1999.This song is part of his second EP called "Katzen".</p>
        <button 
        className="add-to-favorites-btn" 
        onClick={() => {
            history.push("/favorites");
        }}>❤️</button>
    </section>
    )
}

export default Artist;