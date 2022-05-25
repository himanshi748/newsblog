import React, { useState } from 'react'
import '../Tabmenu/tab.css';
import Menu from './Menu';

function Gallery() {

const [items, setItems] = useState(Menu);
const filterItem = (categItem) => {
  const updatedItems = Menu.filter((curElem) => {
     return curElem.category=== categItem;
  }) ; 
  setItems(updatedItems);
}

  return (
    <div>
        <h1  className='mt-5 text-center'><span>The</span>Siren</h1>
<br/>
        <div className='menu-tabs container'>
            <div className='menu-tab d-flex justify-content-around'>
                <button className='btn btn-light btn-lg' onClick={() => setItems(Menu)}>Home</button>
                <button className='btn btn-light btn-lg' onClick={() => filterItem("Bollywood")}>Bollywood</button>
                <button className='btn btn-light btn-lg' onClick={() => filterItem("Technology")}>Technology</button>
                <button className='btn btn-light btn-lg' onClick={() => filterItem("Travel")}>Travel</button>
                <button className='btn btn-light btn-lg' onClick={() => filterItem("Fitness")}>Fitness</button>

            </div>
            <hr/>
        </div>

{/* main item  */}
<div className = "menu-item container-fluid mt-5 " >
  <div className='row '>
    <div className='col-11 mx-auto'>
      <div className='row my-5'>

           {
             items.map((elem) => {
               const { image, name, category, description, check } = elem ;

               return(
                <div className='item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5  d-flex justify-content-around'>
                <div className='row Item-inside  bg-success p-2 text-dark bg-opacity-10  d-flex justify-content-around mx-2 my-2 figure-img img-fluid rounded' >
                  {/* image */}
                   <div className='col-12 col-md-12 col-lg-4 img-div'>
                          <img src={image} alt={name} className='img-fluid'></img>
                   </div>
      
                   {/* description */}
                   <div className='col-12 col-md-12 col-lg-8'>
                     <div className='main-title pt-4 pb-3'>
                       <h3>{category}</h3>
                       <h1>{name}</h1>
      
                     </div>
                     <div className='menu-price-book'>
                       <div className='price-book-divide d-flex justify-content-around'>
                       </div>
                       <p>{description}</p>
                       
                           <button className='btn btn-primary'>{check}</button>
                         
                         <br/><br/><br/>
                     </div>
                   </div>
                </div>
              </div>
               )

             })
           }

       
      </div>
    </div>
  </div>
</div>

<h2>Latest Post</h2>
<br/>

<div className="card border-primary mb-3" >
  <div className="card-header">Sainik Express</div>
  <div className="card-body text-primary">
    <h5 className="card-title">Jaipur-Delhi Sarai Rohilla-Jaipur Sainik Express: Boost to Rail connectivity in Shekhawati region (Sikar & Jhunjhunu districts).</h5>
    <br/>
    <p className="card-text">Jaipur-Delhi Sarai Rohilla-Jaipur Sainik Express: Ashwini Vaishnaw, Union Minister of Railways, Communications, Electronics and Information Technology, Government of India on Thursday flagged off the Train No. 14021/14022 Jaipur-Delhi Sarai Rohilla-Jaipur Sainik Express via video conferencing from Rail Bhavan.
    -Sainik Express is now extended to Delhi Junction with increased frequency from tri-weekly to daily. 

- It will boost the rail connectivity of Shekhawati region of Rajasthan (Sikar and Jhunjhunu districts). </p>
<br/>
    
    <button type="button" className="btn btn-primary">know more</button>
     
  </div>
</div>

<br/><br/>

<div className="card border-secondary mb-3" >
  <div className="card-header">Senior citizens can get tax exemption with Senior Citizen Saving Scheme : Know important details here</div>
  <div className="card-body text-secondary">
    <h5 className="card-title">Senior Citizen Savings Scheme: Savings and investment are considered the safest through post offices, so people invest through it. Many of its policies are synonymous with benefits, one of which is excellent for the elderly. There is a similar scheme in the post office which is only for senior citizens -  Senior Citizen Saving Scheme (Senior Citizens Savings Scheme Account) of the Post Office (Post Office SCSS). This scheme is best in terms of safety and return. Now, let us see the benefits of this scheme.
</h5>
<br/>
    <p className="card-text">If you want to get a return of up to Rs 14 lakh by investing in SCSS, you will have to invest Rs 10 lakh. In this case, the interest rate (Interest Rate) will be 7.4 per cent (compounding) per annum. 5 years later, the total amount for investors on maturity will be Rs. 14,28,964. Here you will gain Rs 4,28,964 as interest. Source: Reuters
    You should be at minimum 60 years of age to open an account in the Senior Citizens Savings Scheme (SCSS). In addition, those who have taken VRS can also open an account in the scheme. It also offers better returns and can also avail income tax exemptions. Source: Reuters

 </p>
 <br/>
    
    <button type="button" className="btn btn-secondary">know more</button>
    
  </div>
</div>

<br/><br/>

<div className="card border-success mb-3">
  <div className="card-header">India News</div>
  <div className="card-body text-success">
    <h5 className="card-title">Kapil Sibal Tells NDTV Quitting Congress Not A Sudden Decision: Top Quotes</h5>
    
    <br/>
    <p className="card-text">Congress leader and former union minister Kapil Sibal today resigned from the party. He filed his nomination from the Rajya Sabha as a Samajwadi Party-backed independent candidate from Uttar Pradesh.</p>
    <br/>
    
    <button type="button" className="btn btn-success">know more</button>
    
  </div>
</div>

<br/><br/>

<div className="card border-danger mb-3" >
  <div className="card-header">Yasin Malik</div>
  <div className="card-body text-danger">
    <h5 className="card-title">Kashmiri Separatist Yasin Malik's Punishments And Fines - Details In 10 Points</h5>
    <br/>
    <p className="card-text">Kashmiri separatist leader Yasin Malik has been given life sentence in a terror funding case. He was also sentenced to varying jail terms and fined over ₹ 10 lakh in other cases. The sentences will run concurrently.</p>
    <br/>
    
    <button type="button" className="btn btn-danger">Know more</button>
     
  </div>
</div>
<br/><br/>


    </div>
  )
}

export default Gallery;