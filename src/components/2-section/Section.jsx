import './Section.css'

export default function Section() {
  return (
    <section>
     <div className=' accordio d-flex align-items-center justify-content-between  flex-wrap overflow-hidden mb-5'>
     <div className='px-5 text-lg-start text-sm-center'>
      <h5 className=' mb-5 fs-2'>The new stylish collection</h5>
      <h1 className=' mb-5'>NEW FALL SEASON 2024</h1>
      <button className='btn btn-light'>shop now <i className="bi bi-arrow-up-right"></i></button>
     </div>
      <img src="/public/image.png" loading='lazy' alt="brand-8" width={530}/>
     </div>
    </section>
  )
}
