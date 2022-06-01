import { useState } from 'react';
import PieChart from "../components/PieChart"
import { UserData } from '../Data'

function Chart() {
  //userDataが変数でsetUserDataメソッドを使ってuserDataの値を変更
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [{
      label: "Users Gained",
      data: UserData.map((data) => data.userGain),
      backgroundColor: [
      "rgba(75,192,192,1)",
      "#ecf0f1",
      "#50AF95",
      "#f3ba2f",
      "#2a71d0",
    ],
    borderColor: "black",
    borderWidth: 2,
    }]
  })

  return(
    <div className="App">
      <div style={{width: 700}}>
        <PieChart chartData={userData} />
      </div>
    </div>
  )
}

export default Chart;