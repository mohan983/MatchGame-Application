import './index.css'

const Thumbnail = props => {
  const {imgList, onToggleThumbnail} = props
  const {id, thumbnailUrl} = imgList
  const onClickThumbnail = () => {
    onToggleThumbnail(id)
  }
  return (
    <li>
      <button type="button" className="image-button" onClick={onClickThumbnail}>
        <img src={thumbnailUrl} className="thumbnail-image" alt="thumbnail" />
      </button>
    </li>
  )
}

export default Thumbnail
