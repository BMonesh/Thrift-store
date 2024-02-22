import React from 'react'
import "../Styles/footer.css"

const Footer = () => {
  return (
    <div>
      <div className='looking-for-something'>
        <h1>Looking for something else?</h1>
        <div id='categ'>
            <p> Shirt </p>|<p> Mens </p>|<p> Womens </p>|<p> Kurthas </p>|<p> Shirts </p>|<p> T-Shirts </p>
        </div>
      </div>
      <div className='touch'>
        <div id='mail'>
            <img src="" alt="Email" />
            <p>Our response time is<br/>1 to 3 buisness days</p>
        </div>
        <div id="email">
            <h1>Let's keep in touch</h1>
            <p>Get recommendation, tips, updates, promotion and more.</p>
            <div id='e-address'>
                <input type="mail" name="" id="" />
                <button>Subscribe</button>
            </div>
        </div>
        <div className="footer">
            <div id='ad'>
                <img src="" alt="logo" />
                <h3>Best for shipping</h3>
            </div>
            <div id='right-divs'>
                <div id='Get-to-know-us'>
                    <h3>Get to know us</h3>
                    <p>About us</p>
                    <p>News & Blogs</p>
                    <p>Sell on Thrift</p>
                    <p>Contact Us</p>
                </div>
                <div className="customer-service">
                    <h3>Customer Service</h3>
                    <p>Help center</p>
                    <p>FAQ's</p>
                    <p>Feedback</p>
                    <p>Size Guide</p>
                    <p>Payment Method</p>
                </div>
                <div className='Order&Returns'>
                    <h3>Order & Returns</h3>
                    <p>Track your Order</p>
                    <p>Shipping & Delivery</p>
                    <p>Return & Exchange </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
