import './App.css'
import Grid from "./components/Grid.jsx";

const cardData = [
    // Array of card data objects
    {
        imageUrl: "src/assets/revo.png",
        title: "Revo",
        link: "http://revosoccer.com/index.html",
        address: "10395 NW 41st St #101, Doral, FL 33178",
    },
    {
        imageUrl: "src/assets/laCanchita.png",
        title: "La Canchita",
        link: "http://www.lacanchita.com/",
        address: "6303 NW 99th Ave, Doral, FL 33178",
    },
    {
        imageUrl: "src/assets/medleySoccer.png",
        title: "Medley Soccer 5v5",
        link: "http://www.medleysoccer.com/",
        address: "6991 NW 74th St, Medley, FL 33166",
    },
    {
        imageUrl: "src/assets/soccerCity.png",
        title: "Soccer City",
        link: "http://soccercitymiami.com/cgi-sys/defaultwebpage.cgi",
        address: "2400 NW 110th Ave, Miami, FL 33172",
    },
    {
        imageUrl: "src/assets/gool.png",
        title: "Gool Indoor Soccer Doral",
        link: "http://goolindoorsoccer.com/",
        address: "10485 NW 28th St, Doral, FL 33172",
    },
    {
        imageUrl: "src/assets/brazaSoccer.png",
        title: "Braza Soccer Culture",
        address: "8501 NW 54th St, Doral, FL 33166",
    },
    {
        imageUrl: "src/assets/championsFl.png",
        title: "Champions Florida",
        link: "https://championsfl.com/",
        address: "1360 NW 88th Ave, Miami, FL 33172",
    },
    {
        imageUrl: "src/assets/legacy.png",
        title: "Doral Legacy Park",
        link: "https://www.cityofdoral.com/all-departments/parks-and-recreation/facilities-and-rentals/doral-legacy-park/",
        address: "11400 NW 82nd St, Doral, FL 33178",
    },
    {
        imageUrl: "src/assets/meadows.png",
        title: "Doral Meadows Park",
        link: "https://www.cityofdoral.com/all-departments/parks-and-recreation/parks-bond/bond-projects-overview/doral-meadow-park/",
        address: "11555 NW 58th St, Doral, FL 33178",
    },
    {
        imageUrl: "src/assets/morgan.png",
        title: "Doral Morgan Levy park",
        link: "https://www.cityofdoral.com/all-departments/parks-and-recreation/facilities-and-rentals/morgan-levy-park/",
        address: "5300 NW 102nd Avenue",
    }
    // Add more card data objects as needed
];

function App() {

    return (
        <div className="App">
            <img src="src/assets/goal.png" alt=""/>
            <h1>Top 10 places to play soccer in Doral</h1>
            <h4 className={'author'}>By: Franklin Neves Filho</h4>
            <Grid cardData={cardData}/>
        </div>
    );
}

export default App
