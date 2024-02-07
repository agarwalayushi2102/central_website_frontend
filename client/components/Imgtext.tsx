import React from 'react'
import './Imgtext.css'
const Imgtext = () => {
  return (
    <div>
      <div className="container">
        <img src="https://th.bing.com/th/id/R.c36e3c3611673d559b77b2e9f38bcf97?rik=B5kH1y1E138DYQ&riu=http%3a%2f%2fwww.wallpaperbetter.com%2fwallpaper%2f782%2f241%2f217%2fcalifornia-lake-lake-tahoe-1080P-wallpaper.jpg&ehk=pk6lLzMmtqvII5Ql7fQXatZXybgYwqQd4TI7QTkRUAM%3d&risl=&pid=ImgRaw&r=0" alt="Snow" style={{ width: '100%', height: '100vh' }} />
        <div className="bottom-left">Bottom Left</div>
        <div className="top-left">Top Left</div>
        <div className="top-right">Top Right</div>
        <div className="bottom-right">Bottom Right</div>
        <div className="centered-heading">Fiordland National Park</div>
        <div className="centered-paragraph">Fiordland National Park is in the southwest of New Zealand’s South Island. It’s known for the glacier-carved fiords of Doubtful and Milford sounds.</div>
    </div>
    </div>
  )
}
export default Imgtext;

