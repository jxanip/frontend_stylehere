import contact from '../../assets/img/contact.png';
import '../../assets/css/contact.css';

function Contact() {
  return(
    <div className="contact-container">
      <div className="judul">
       <img src={contact}/>  
        <h1>Contact <span>Below</span></h1>
        <div className="e">
         <h4>KELOMPOK 2</h4>
        <div className="contact">
          <h5>email: <a>stylehere@gmail.com</a></h5>
          <h5>contact: <a>08xx-xxxx-xxx</a></h5>
        </div>
        <h5 className="style">BE CONFIDENT WITH YOUR STYLE</h5>
          </div>
      </div>
    </div>
  )
}
export default Contact;