
import card1 from '../../assets/img/chhd.png';
import card2 from '../../assets/img/chdt.png';
import card3 from '../../assets/img/chjckt.png';
import card4 from '../../assets/img/chvst.png';
import card5 from '../../assets/img/chlvsjckt.png';
import card6 from '../../assets/img/chtshrt.png';
import '../../assets/css/category.css';

function cardctgy1 (){
  return(
    <>
    <div className="container-category">
    <div className="category-main">
    <h1>CATEGORY</h1>

      <div className="card-container">
        <h5>JAKET</h5>
         <div className="card-produk-1"> 
       <div className="c-r">
         <img src={card1}/>
        <h2>Carhartt Hoodie</h2>
         <p>one day</p>
         <button className="b-produk">Beli</button>
       </div>
           
         <div className="c-r">
           <img src={card2}/>
           <h2>Carhart Detroit</h2>
            <p>i'll stop falling in love</p>
            <button className="b-produk">Beli</button>
          </div>
         <div className="c-r">
           <img src={card3}/>
           <h2>Carhartt Jacket</h2>
            <p>with you</p>
            <button className="b-produk">Beli</button>
          </div>
           </div>
    
        <h5>Baju</h5>
         <div className="card-produk-2">
         <div className="c-r">
           <img src={card4}/>
           <h2>Carhartt Vest</h2>
            <p>some day</p>
            <button className="b-produk">Beli</button>
          </div>
         <div className="c-r">
           <img src={card5}/>
           <h2>Carhartt Levi's</h2>
            <p> someone will love me</p>
            <button className="b-produk">Beli</button>
          </div>
         <div className="c-r">
           <img src={card6}/>
           <h2>Carhartt T-Shirt</h2>
            <p>like i loved you</p>
            <button className="b-produk">Beli</button>
          </div>
           </div>
      </div>

      
    </div>
    </div>
    </>
  );
}

export default cardctgy1;