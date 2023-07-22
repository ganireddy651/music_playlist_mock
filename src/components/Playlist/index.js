import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const Playlist = props => {
  const {eachTrack, deleteTrack} = props
  const {imageUrl, name, genre, duration, id} = eachTrack

  const onDelete = () => {
    deleteTrack(id)
  }

  return (
    <li>
      <div className="playlist-container">
        <div className="vide-details-container">
          <img className="thumbnail" src={imageUrl} alt="track" />
          <div className="track-details-container">
            <h1 className="track-name">{name}</h1>
            <p className="genre">{genre}</p>
          </div>
        </div>
        <div className="duration-container">
          <p className="duration">{duration}</p>
          <button onClick={onDelete} className="delete-button" type="button">
            <AiOutlineDelete className="delete-icon" />
          </button>
        </div>
      </div>
    </li>
  )
}

export default Playlist
