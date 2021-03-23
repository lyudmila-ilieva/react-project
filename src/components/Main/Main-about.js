import style from './Main.module.css';

function Main() {
return (
    <div className={style.mainContainer}>
        <img src="img-about-us.jpg" alt="About" />
        <h3>We were founded in 2021 in Barcelona, Spain</h3>
    </div>
  )
}

export default Main;