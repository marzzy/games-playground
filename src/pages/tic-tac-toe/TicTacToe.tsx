import PageTemplate from 'components/template';
import useTicTacToe from './manager';
import useStyles from './styles';

function TicTacToeGame() {
  const classes = useStyles();
  const {
    data: {
      buttonsState,
      isItfirstPlayerTurn,
      firstPlayerName,
      secoundPlayerName,
      winnerName,
    },
    action: {
      handlerPlayerPickAButton,
      resetTheGame,
    },
  } = useTicTacToe();

  return (
    <PageTemplate>
      <div className={classes.pageWrapper} data-test="pageWrapper">
        <div className={classes.wrapper} data-test="gameWrapper">
          {buttonsState.map((buttonData, index) => {
            const [name, status] = buttonData;

            return (
              <button
                type="button"
                key={`${name}`}
                data-button-name={name}
                data-button-order={index}
                data-test="gamesButton"
                onClick={handlerPlayerPickAButton}
                disabled={status !== 'N' || !!winnerName}
              >
                {status}
              </button>
            );
          })}
        </div>
        <div>
          <div data-test="player-info">
            current player :
            {' '}
            {isItfirstPlayerTurn
              ? firstPlayerName
              : secoundPlayerName}
          </div>
          {winnerName && (
            <>
              <h1>
                {winnerName}
                {' '}
                is the Winner
              </h1>
              <p>game is over</p>
              <button
                type="button"
                data-test="restartButton"
                onClick={resetTheGame}
              >
                start over
              </button>
            </>
          )}
        </div>
      </div>
    </PageTemplate>
  );
}

export default TicTacToeGame;
