import "./App.css";
import Card from "./assets/components/card";
function App() {
  return (
    <>
      <h1>I'm trying react</h1>
      <div className="app">
        <Card
          title="Ismail Abdi"
          description="I'm a software engineer"
          image="https://scontent.fhga1-2.fna.fbcdn.net/v/t39.30808-1/387147666_3580754605579542_3979010316702331963_n.jpg?stp=c154.0.682.682a_dst-jpg_s200x200_tt6&_nc_cat=105&ccb=1-7&_nc_sid=e99d92&_nc_ohc=cZorQjf6Xq0Q7kNvgEhWxc-&_nc_zt=24&_nc_ht=scontent.fhga1-2.fna&_nc_gid=AwFHM1kecRFzw5zQt1xhMVb&oh=00_AYCp8wDKx72AuFCkfVJJ04kJCt9KsgsjQQMmayzWMxbCoQ&oe=67CE4AD3"
        />
      </div>
    </>
  );
}

export default App;
