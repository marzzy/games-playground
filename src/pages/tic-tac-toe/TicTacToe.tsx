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
      handleClick,
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
                onClick={handleClick}
                disabled={status !== 'N'}
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
            <h1>
              {winnerName}
              {' '}
              is the Winner
            </h1>
          )}
        </div>
      </div>
    </PageTemplate>
  );
}

export default TicTacToeGame;
