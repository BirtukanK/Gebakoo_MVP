import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import styles from './style';
import { useState } from 'react';
import { Footer, Navbar, Product, Hero, Register, About, Cart} from "./components";
import Login from "./components/Login";
import { CartProvider } from "react-use-cart";




function App () {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: ''
  });

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    console.log(formData);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData) // Assuming formData is declared somewhere in your component
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);
      alert("Registration successful");

      // Optionally, you can redirect the user or show a success message here
    } catch (error) {
      console.error('Error:', error);
      alert("Email already Exists");
    }

  };

  const handleLoginSubmit = async () => {
    // e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);
      alert("Login successful");

      // Optionally, you can redirect the user or show a success message here
    } catch (error) {
      console.error('Error:', error);

    }
  };


  return (
    <CartProvider>
    <Router>
      <div className="bg-[#ecfdf5] w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />  
          </div>
        </div>
        {/* <div className={`bg-[#ecfdf5] ${styles.paddingX} ${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>
                <Hero/>
              </div>
            </div> */}
        <Routes>
          <Route path="/" element={<div className={`bg-[#ecfdf5] ${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Hero />
              <About />
              <Footer />
            </div>
          </div>} /><Route path="/contact" element={<div className={`bg-[#ecfdf5] ${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Footer />
            </div>
          </div>} />
          <Route path="/register" element={<div className={`bg-[#ecfdf5] ${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Register formData={formData} onFormChange={handleFormChange} onFormSubmit={handleFormSubmit} />
            </div>
          </div>} />

          <Route path="/login" element={<div className={`bg-[#ecfdf5] ${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Login onLoginSubmit={handleLoginSubmit} />
              <Footer />
            </div>
          </div>} />
          <Route path="/home" element={<div className={`bg-[#ecfdf5] ${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Hero />
              <About />
              <Footer />
            </div>
          </div>} />

          <Route path="/store" element={<div className={`bg-[#ecfdf5] ${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Product />
              <Cart />
              <Footer />
            </div>
          </div>} />

        </Routes>
      </div>
    </Router>
    </CartProvider>
  );
}



export default App;

