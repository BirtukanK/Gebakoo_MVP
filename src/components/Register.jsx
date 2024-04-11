
import { useNavigate } from 'react-router-dom';


const Register = ({ formData, onFormChange, onFormSubmit }) => {

 

  let imgs = [
    'https://as1.ftcdn.net/v2/jpg/03/39/70/90/1000_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg',
  ];
  

  const navigate = useNavigate();
  const navigate_register = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await onFormSubmit(e);
        navigate('/login');
    } catch(error){
        console.error('Registration failed:', error);
        alert("Registration failed. Please try again with a different email.");
        navigate_register('/register');
    }
  };
  

  return (
      
      
      <div className='registration-form'>
        <div className="col-md-9 col-lg-6 col-xl-5">
                <img src={imgs[0]} className="img-fluid"/>
              </div>
          <h2>Registration Form</h2>
          <form onSubmit={handleSubmit} method='post'>
              <div>
                  <label htmlFor="firstname">First name:</label>
                  <input
                      type="text"
                      id="firstname"
                      name="firstName"
                      value={formData.firstName}
                      onChange={onFormChange}
                      required
                  />
              </div>
              <div>
                  <label htmlFor="lastname">Last name:</label>
                  <input
                      type="text"
                      id="lastname"
                      name="lastName"
                      value={formData.lastName}
                      onChange={onFormChange}
                      required
                  />
              </div>
              <div>
                  <label htmlFor="username">Username:</label>
                  <input
                      type="text"
                      id="username"
                      name="userName"
                      value={formData.userName}
                      onChange={onFormChange}
                      required
                  />
              </div>
              <div>
                  <label htmlFor="email">Email:</label>
                  <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={onFormChange}
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
                      onChange={onFormChange}
                      required
                  />
              </div>
              <button type="submit">Register</button>
          </form>
      </div>
  );
};

export default Register