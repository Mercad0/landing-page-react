import React from "react";
import Tangerine from "../../img/rbTangerine.jpg"
import Dragon from "../../img/rbDragonFruit.jpg"
import Tropical from "../../img/rbTropical.jpg"
import Blueberry from "../../img/rbBlueberry.jpg"


//create your first component
const Home = () => {
	return (
		<>
    <Navbar />
		<Jumbotron />
    <div className="d-flex flex-wrap m-5 justify-content-around">
    <Card img={(Tangerine)}/>
    <Card img={(Dragon)}/>
    <Card img={(Tropical)}/>
    <Card img={(Blueberry)}/>
		</div>
    <Footer />
		</>
	);
};

function Jumbotron () {
	return (
		<div className="jumbotron">
  <h1 className="display-3">"Limited Edition" Redbulls</h1>
  <p className="lead">drinks that might give you wings or not.. still working on a theory...</p>
  <hr className="my-4" />
  <p>There was once a time where Drinking Green Tea would give you wings, but now RedBulls have taken over.</p>
  <p className="lead">
    <a className="btn btn-primary btn-lg" href="https://www.egnyte.com/customers/red-bull-case-study#:~:text=Inspired%20by%20functional%20drinks%20from,category%20was%20born%20%E2%80%93%20energy%20drinks." role="button">History</a>
  </p>
</div>
	);
};

function Navbar () {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">404 Not Found</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.redbull.com/us-en/energydrink">Other Flavors</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
};

function Card ({img}) {
   return (
    <div className="card" style={{width: "18rem"}}>
  <img src={img} className="cardImage" alt="Tangerine" />
  <div className="card-body">
    <h5 className="card-title">Limited Redbulls</h5>
    <p className="card-text">Experience the Orange Edition, the Green Edition, the Yellow Edition, & Blue Edition Redbull. Prices vary, (stay away from Gas stations Near airport. they charge an arm and a leg..</p>
    <a href="https://www.redbull.com/us-en/energydrink" className="btn btn-primary">Learn More</a>
  </div>
</div>
   )
};

function Footer () {
  return (
    <div clasNames="container">
  <footer className="d-flex flex-wrap justify-content-between align-items-center p-3 mb-2 bg-dark text-white">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
      </a>
      <span className="mb-3 mb-md-0 text-muted">© 2022 Figured It Out R Us Inc</span>
    </div>
    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3"> <a href="https://www.redbull.com/us-en/energydrink">Redbull</a></li>
      <li class="ms-3"><a href="https://www.monsterenergy.com/">Monster</a></li>
      <li class="ms-3">< a href="https://4geeks.com/">4Geeks</a></li>

      </ul>
  </footer>
</div>
  )
}

export default Home;
