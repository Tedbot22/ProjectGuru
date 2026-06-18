function Contact(){
  return(
    <>
      <div className="contact" id="contact">
           <div className="contact-title">
            <p>Contact us</p>
            <h1>Reach out to us</h1>
           </div>
           <div className="contact-form">
            <form action="submmit">
                <label htmlFor="name">
                 Name: <br /><input type="text" />
                </label> <br />
                <label htmlFor="email"><br />
                  Email: <br /><input type="email" /> <br />
                </label> <br />
                <label htmlFor="">
                  Phone : <br /><input type="text" /> <br />
                </label> <br />
                <label htmlFor="text">
                  Comement: <br /><textarea name="comment" id="comment">
                  </textarea>
                </label> <br />
                <button formAction={console.log("Form subited")}>Send</button>
            </form>
           </div>
      </div>
    </>
  )
}

export default Contact