import { useState } from 'react';
import useStyle from './styles';

function Loading(props : {setIsLoaded: Function}) {
  const { setIsLoaded } = props;
  const [isTheStartTextShow, setIsTheStartTextShow] = useState(false);
  const classes = useStyle();

  function finishLoading() {
    setIsLoaded(true);
  }

  function startTextAnimation() {
    setIsTheStartTextShow(true);
  }

  return (
    <>
      <div
        className={classes.imgCover}
        onAnimationEnd={startTextAnimation}
      >
        {isTheStartTextShow && (
          <h1 className={classes.textWrapper} onAnimationEnd={finishLoading}>
            Welcome to the chamber of Games
          </h1>
        )}
      </div>
    </>
  );
}

export default Loading;
