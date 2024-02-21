import Homeimg from '../../assets/img/logoSH.png';
import card1 from '../../assets/img/chhd.png';
import card2 from '../../assets/img/chdt.png';
import card3 from '../../assets/img/chjckt.png';
import card4 from '../../assets/img/chvst.png';
import card5 from '../../assets/img/chlvsjckt.png';
import card6 from '../../assets/img/chtshrt.png';
import '../../assets/css/home.css';

function  Tampilanhome () {
  return(
    <section class="home" id="home">
     <main>

       <div className="welcome">
       {/* <img src={STHHOME}/> */}
        <div class="w-text">
        <h1>Selamat <span>datang</span> di <span class="t-dikit">STYLE HERE</span></h1>
       <p class="wkwk">website pembelian produk fashion no.1 paling bawah di indonesia :v</p>
          <div className="button-p">
          <a className="buttonhv" href="#produk">lihat produk</a>
          </div>
      </div>
     </div>

       <div className="about" id="about">
        <h1>Tentang Kami</h1>
         <img src={Homeimg}/>
         <div className="a-text">
         <h4>Apa itu STYLE HERE ?</h4>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
         </div>
       </div>

       <div className="p-rekomendasi" id="produk">
         <h1> Beberapa Produk Rekomendasi</h1>
         <div className="card-container">
           <div className="card-produk-1">
         <div className="c-r">
           <img src={card1}/>
          <h2>Carhartt Hoodie</h2>
           <p>one day</p>
           <a className="b-produk" href="https://dfc61b63-7092-4d83-806c-2c11ec037bf8-00-33t9kka9tw9s3.riker.replit.dev/Pemesanan">
             BELI
           </a>
         </div>
           <div className="c-r">
             <img src={card2}/>
             <h2>Carhart Detroit</h2>
              <p>i'll stop falling in love</p>
              <a className="b-produk" href="https://dfc61b63-7092-4d83-806c-2c11ec037bf8-00-33t9kka9tw9s3.riker.replit.dev/Pemesanan">
             BELI
           </a>
            </div>
           <div className="c-r">
             <img src={card3}/>
             <h2>Carhartt Jacket</h2>
              <p>with you</p>
              <a className="b-produk" href="https://dfc61b63-7092-4d83-806c-2c11ec037bf8-00-33t9kka9tw9s3.riker.replit.dev/Pemesanan">
             BELI
           </a>
            </div>
             </div>
           <div className="card-produk-2">
           <div className="c-r">
             <img src={card4}/>
             <h2>Carhartt Vest</h2>
              <p>some day</p>
              <a className="b-produk" href="https://dfc61b63-7092-4d83-806c-2c11ec037bf8-00-33t9kka9tw9s3.riker.replit.dev/Pemesanan">
             BELI
           </a>
            </div>
           <div className="c-r">
             <img src={card5}/>
             <h2>Carhartt Levi's</h2>
              <p> someone will love me</p>
              <a className="b-produk" href="https://dfc61b63-7092-4d83-806c-2c11ec037bf8-00-33t9kka9tw9s3.riker.replit.dev/Pemesanan">
             BELI
           </a>
            </div>
           <div className="c-r">
             <img src={card6}/>
             <h2>Carhartt T-Shirt</h2>
              <p>like i loved you</p>
              <a className="b-produk" href="https://dfc61b63-7092-4d83-806c-2c11ec037bf8-00-33t9kka9tw9s3.riker.replit.dev/Pemesanan">
             BELI
           </a>
            </div>
             </div>
             <a className="button-single" href="https://dfc61b63-7092-4d83-806c-2c11ec037bf8-00-33t9kka9tw9s3.riker.replit.dev/Category">
               LIHAT LAINNYA
             </a>
         </div>
       </div>
     </main>
    </section>
  );
}
export default Tampilanhome;