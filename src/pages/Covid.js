import style from '../components/Main/Main.module.css';

function Covid() {
return (
    <div className={style.mainContainer}>
        <img src="covid-stay-well.jpg" alt="Covid-19" />
        <h3>Stay at home, take care.</h3> <br></br><br></br><br></br>
        <h4>As we go through this exceptional situation here is all the information you need so that we can provide you the best service possible.
        <br></br>The health of our teams is more important than ever, which is why we are counting on your solidarity during these difficult times.
        <br></br>*updated 24/03/21
        </h4>
    </div>
  )
}

export default Covid;