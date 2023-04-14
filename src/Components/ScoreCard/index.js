import './index.css'

const ScoreCard = props => {
  const {score, onTogglePlayAgain} = props
  const onClickPlayAgain = () => {
    onTogglePlayAgain()
  }
  return (
    <div className="second-div">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        className="trophy-image"
        alt="trophy"
      />
      <p className="main-heading">YOUR SCORE</p>
      <p className="your-score">{score}</p>
      <button type="button" className="play-button" onClick={onClickPlayAgain}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          className="restart"
          alt="reset"
        />
        PLAY AGAIN
      </button>
    </div>
  )
}

export default ScoreCard
