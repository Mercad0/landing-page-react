import React from "react"

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

  export default Footer;