import "../../assets/css/pemesanan.css";

function TampilanPemesanan() {
  return (
    <div>
      <h1 className="pemesanan-txt">Pemesanan</h1>
      <div className="pemesanan">
        <p className="nama">Nama</p>
        <input type="text" id="" />
      </div>
      <div className="pemesanan">
        <p className="alamat">Alamat</p>
        <input type="text" id="" />
      </div>
      <div className="pemesanan">
        <p className="nohp">Nomor HP</p>
        <input type="text" id="" />
      </div>

      <center>
        <button className="pesankan">Pesankan</button>
      </center>
    </div>
  );
}
export default TampilanPemesanan;
