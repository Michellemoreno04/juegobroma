import goAway from '../videos/goAway.mp4'
import '../final/final.css'




export const Final = () => {
  return (
    <div className='bg'>
        <h1>Me tocaaaaaaa!!!</h1>
        <div className='vd-content'>
            <video src={goAway} className='video' autoPlay controls loop ></video>
        </div>
    </div>
  )
}
