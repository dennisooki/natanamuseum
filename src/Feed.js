import "./Feed.css"
import placeholdr from './assets/img/natana12.jpeg'
import mascot from './assets/img/mascotuhd.png'

function Feed() {

    return (
        <div className="Feed">
            <div className="Headnote">
                <img src={mascot} />
                <span>Natana Museum</span>
            </div>
            <div className="Exhibition">
            <FeedImg image={placeholdr}/>
            </div>
        </div>
    )
}

function FeedImg(){
    const image=placeholdr
    return(
        <div>
            
        <img src={image} /> 
        </div>  
    )
}

export default Feed;