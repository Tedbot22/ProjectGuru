import { useEffect, useState } from "react"

function Testimonial(){

  const usersReview = [{id:1,name:"John Doe", rating: 4, review: "This is my reviewThis is my reviewThis is my reviewThis is my reviewThis is my reviewThis is my reviewThis is my reviewThis is my review", departmet: "Nursing", institution: "Delsu", year: "2025", logoColor:"#2dbc53"},
                    {id:2,name:"Ade Bisi", rating: 5, review: "This is my reviewThis is my reviewThis is my reviewThis is my reviewThis is my reviewThis is my reviewThis is my reviewThis is my review", departmet: "Pharmacy", institution: "Delsu", year: "2026", logoColor:"#972be9"},
                    {id:3,name:"Bola Chloe", rating: 5, review: "This is my reviewThis is my reviewThis is my reviewThis is my reviewThis is my reviewThis is my reviewThis is my reviewThis is my review", departmet: "Pharmacy", institution: "Delsu", year: "2026", logoColor:"#d14222"},
                    {id:4,name:"CLara Missi", rating: 3, review: "This is my reviewThis is my reviewThis is my reviewThis is my reviewThis is my reviewThis is my reviewThis is my reviewThis is my review", departmet: "Accounting", institution: "Unilag", year: "2025", logoColor:"#11238a"},
                    {id:5,name:"Pemu Joshua", rating: 4, review: "This is my reviewThis is my reviewThis is my reviewThis is my reviewThis is my reviewThis is my reviewThis is my reviewThis is my review", departmet: "Anatomy", institution: "Delsu", year: "2026", logoColor:"#2065cc"}]

    function handleRating(lenght){
      for(let i=0; i < length; i++){

      }
    }
    const [showAll, setShowAll] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

    useEffect(() =>{
      const handlearesize = () => {
        setIsMobile(window.innerWidth < 768)
      }
      window.addEventListener('resize', handlearesize)
      return () => window.removeEventListener('resize', handlearesize)
    },[])

    const visibleReviews = !isMobile || showAll ? usersReview : usersReview.slice(0,2)
  return(
    <>
    <div id="testimonial" className="testimonial">
        <div className="testi-title">
            <h1 className="reveal delay-1">Testimonials</h1>
            <p className="reveal delay-2">Reviews we got from our clients</p>
        </div>

        <div className="client-reviews">
          {visibleReviews.map((review)=> 
          <div key={review.id} className="review-card">
            
            <div className="review-rating">
              {[...Array(5)].map((_,i) => 
              <span key={i}> {i < review.rating ? "★" : "☆"}</span>
              )}
            </div>

               <i className="testi-review">{`" ${review.review}"`}</i>
            
            <div className="testi-name">

              <p className= "testi-logo" style={{background: review.logoColor}}>
                {` ${review.name.charAt(0)}  
                ${review.name.charAt(review.name.indexOf(" ")+1)}`}</p>
              
              <div style={{marginLeft: "15px", lineHeight: "0.23rem"}}>
                <p style={{color: "#1e1d1d", fontWeight: "550", fontSize:".88rem"}}>{review.name}</p>
                
                <p style={{fontSize:"0.76rem", color:"#807f7f", fontWeight: "300"}}>
                  {`${review.departmet}, ${review.institution} • ${review.year}`}</p>              
              </div>
            </div>
          </div> )}    
      </div> 
          <div className="show-div" style={{margin: "5px"}}>
            <span className="show-btn" onClick={() => setShowAll(!showAll)}>{showAll ? "Show Less" : "Show More"}</span>
          </div>

    </div>
    </>
  )
}

export default Testimonial