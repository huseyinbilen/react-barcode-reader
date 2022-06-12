import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom'


const App = () => {

  const video = useRef(null);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: { width: 1280, height: 720}})
    .then(stream => {
      video.current.srcObject = stream;
    })
    .catch(error => {
      console.log(error);
    })
  }, []);

  return (
    <div className="container-fluid">
      <video ref={video} autoPlay muted></video>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
