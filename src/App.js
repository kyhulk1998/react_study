import './App.css';
import { YoutubeData } from './YoutubeData';
function App() {
    return (
        <div className="youtube-list">
        {YoutubeData.map((item, index) => (
            <YoutubeItem key={item.id} image={item.image} avatar={item.avatar} title={item.title} author={item.author}></YoutubeItem>    
        ))}
        </div>
    );
}

function YoutubeItem(props) {
    return ( 
        <div className="youtube-item">
            <div className="youtube-image">
                <img src={props.image} alt="" />
            </div>
            <div className="youtube-footer">
                <img src={props.avatar} alt="" className="youtube-avatar" />
                <div className="youtube-info">
                    <h2 className="youtube-title">{props.title || "This is title"}</h2>
                    <p className="youtube-author">{props.author || "This is author"}</p>
                </div>
            </div>
        </div>

    );
}

export default App;