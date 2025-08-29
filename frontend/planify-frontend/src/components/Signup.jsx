import "../styles/Signup.css";
 import { Link } from "react-router-dom"; 
 export default function Signup() {
     return ( <div className="signup-container"> 
     <div className="signup-box">
         {/* Left Panel */}
         <div className="signup-left">
             <img src="/assets/signupIMG.png" alt="background" className="signup-img" /> 
             <div className="signup-overlay"> 
                <div className="signup-header"> 
                    <h1 className="logo">Planify</h1>
                      </div>
                       <p className="signup-tagline"> Ideas grow when you begin — sign up now.</p> 
                        </div> 
                        </div> 
                        {/* Right Panel */} 
                        <div className="signup-right">
                             <h2 className="signup-title">Create an account</h2> 
                             <p className="signup-subtext">
                                Already have an account? <Link to="/login">Login here</Link>
                                 </p> 
                                 <div className="signup-row"> 
                                    <input type="text" placeholder="First name" className="signup-input half"/>
                                     <input type="text" placeholder="Last name" className="signup-input half"/> 
                                     </div> 
                                     <input type="email" placeholder="Email address" className="signup-input"/> 
                                     <input type="password" placeholder="Password" className="signup-input"/> 
                                     <div className="signup-terms"> <input type="checkbox" id="terms" /> 
                                     <label htmlFor="terms">I agree to the Terms & Conditions</label> 
                                     </div> <button className="signup-btn">Create account</button> 
                                     <div className="signup-row"> <button className="signup-btn small">Google</button>
                                      <button className="signup-btn small">Apple</button> 
                                      </div> 
                                      </div> 
                                      </div>
                                       </div> 
                                       );
                                     }