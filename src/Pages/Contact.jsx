import "../Style/Contact.css"
import PizzaLeft from "../assets/fooda.jpeg" 

function Contact() {
  return (
    <>
       <div className="contact">
      <div className="leftSide" style={{backgroundImage: `url(${PizzaLeft})`}}>
        
      </div>

      <div className="rightSide">
        <h1>Contact Us</h1>

        <form>
          <label htmlFor="name">Full Name</label>

          <input name="name" placeholder="Enter Your Full Name"/>
          <label htmlFor="message">Message</label>
        

        <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
           <button type="submit"> Send Message</button>
           </form>

      </div>

     </div>
    </>
  )
}

export default Contact
