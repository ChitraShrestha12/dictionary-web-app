import PlayIcon from "../assets/icon-play.svg?react";

function WordPronunciation({ fetchedData }) {
  const phoneticText =
    fetchedData[0]?.phonetics?.find((p) => p.text)?.text || "";

  function playAudioWord() {
    const audioSrc =
      fetchedData[0]?.phonetics?.find((p) => p.audio)?.audio || "";

    let wordAudio = new Audio(audioSrc);
    wordAudio.play();
  }
  return (
    <div className="word-pronunciation-container">
      <div className="text-container">
        <h1 className="word-text">{fetchedData[0]?.word}</h1>
        <span className="phonetic-text">{phoneticText}</span>
      </div>
      <button className="play-button" onClick={playAudioWord}>
        <PlayIcon className="play-icon" alt="Play icon" />
      </button>
    </div>
  );
}

export default WordPronunciation;
