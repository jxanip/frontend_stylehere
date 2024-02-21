import '../../assets/css/category.css';
import img1 from '../../assets/img/chdt.png';
import img2 from '../../assets/img/chhd.png';
import img3 from '../../assets/img/chjckt.png';
import img4 from '../../assets/img/chlvsjckt.png';

function Tampilancategoty (){
  return(
    <section className="category-container">
      <div className="category-content">
      <div className="category-caption">
        <h1>CATEGORY</h1>
        <p>anuan :D</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="category-btnimg-container">
          <div className="category-btnimg1">
          <img src={img1}/>
          <img src={img2}/>
          <img src={img3}/>
          </div>
          <div className="category-btnimg2">
            <img src={img4}/>
          </div>
        </div>
      </div>
  </section>
  )
}
export default Tampilancategoty;
