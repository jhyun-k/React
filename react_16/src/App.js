import './App.css';
import {useState,useEffect} from 'react'



function App() {
  const [videos,setVideos] = useState([])
  const getMostPopularVideos = async()=>{
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&regionCode=kr&key=AIzaSyCUVEvzmfL7VLqdE9HGQ82PGiZUJCm2itY`;
    const res = await fetch(url);
    const data = await res.json();
    console.log('인기동영상목록',data);
    setVideos(data.items)
  }

  useEffect(() => {
    getMostPopularVideos();
  },[])

  const [weather,setWeather] = useState([])
  const getCurrentWeatherData = async() =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=37.5433565&lon=126.951512&appid=a252d2fc2d764aa2d648fdb0461991b5&units=metric
    `;
    const response = await fetch(url);
    const data = await response.json();
    console.log('날씨데이터',data)
    setWeather(data)
  }


  useEffect(()=>{
    getCurrentWeatherData();
  },[])

  return (
    <div className="App">
      <h1>{weather.name}</h1>
      <h1>{weather.main.temp}도</h1>
     {
      videos.map(item=><div key={item.id}>{item.snippet.title}</div>)
     }
    </div>
  );
}

export default App;
