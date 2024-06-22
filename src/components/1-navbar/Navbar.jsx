import Cart from './Cart'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className=' container   d-flex align-items-center justify-content-between mt-3 '>
      <img src="/public/logo-white.svg" width={60} loading='lazy' alt="brand" />
      <div className="input-group w-50" data-bs-theme="dark">
       <input type="search" className="form-control text-capitalize shadow-none" placeholder="search for product" aria-label="Username" aria-describedby="basic-addon1"/>
       <span className="input-group-text border-opacity-50" id="basic-addon1"><i className="bi bi-search"></i></span>
        </div>
       <Cart/>
    </nav>
  )
}
