import React from 'react';
import Products from './Products';

const Home = () => {
  return (
    <> 
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..\Images\Unilever_Slider.jpg" class="d-block w-100 " alt="..." height="500px"/>
    </div>
    <div class="carousel-item">
      <img src="..\Images\Nestle_slider_FS.jpg" class="d-block w-100" alt="..."height="500px"/>
    </div>
    <div class="carousel-item">
      <img src="..\Images\SUPERMARKET_SX__712x384_copy_4.png" class="d-block w-100" alt="..." height="500px"/>
    </div>
    <div class="carousel-item">
      <img src="..\Images\CB_-1152x252-copy-8.png" class="d-block w-100" alt="..." height="500px"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  <Products />
</div>
    </>
  )
}

export default Home