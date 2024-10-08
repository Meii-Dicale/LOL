import PersoCarousel from "../component/caroussel";

const HomePage = () => {


return <>
<div className="d-flex align-items-center flex-column "style={{ backgroundImage: 'url(./League-of-Legends-wallpaper-4.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '94vh',
    width: '100vw',
}}>


<p className="text-center text-white display-1 display-6">Venez découvrir l'univers de League Of Legend</p>
<PersoCarousel></PersoCarousel>
</div>
</>

}

export default HomePage;