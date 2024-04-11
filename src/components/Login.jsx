// Login page wiht usestate hook
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login ({onLoginSubmit}) {


  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
});

  const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  await onLoginSubmit(formData);
  navigate('/store');
};

  let imgs = [
    'https://as1.ftcdn.net/v2/jpg/03/39/70/90/1000_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg',
  ];

  return (
    
      <div className='registration-form'>
        <div className="col-md-9 col-lg-6 col-xl-5">
                <img src={imgs[0]} className="img-fluid"/>
              </div>
          <h2>Login</h2>
          <form onSubmit={handleSubmit} method='post'>
              <div>
                  <label htmlFor="email">Email:</label>
                  <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                  />
              </div>
              <div>
                  <label htmlFor="password">Password:</label>
                  <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                  />
              </div>
              <button type="submit">Login</button>
              <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/register" className="link-danger">Register</a></p>

 
          </form>
      </div>
  );
}

export default Login
