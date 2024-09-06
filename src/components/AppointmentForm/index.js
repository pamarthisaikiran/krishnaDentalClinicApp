import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "./index.css"

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number:'',
    appointmentDate: '',
    appointmentTime: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault(); 

    emailjs.send('service_m12hao8', 'template_23nckya', formData, '9fbEVKopibwg_xike')
      .then((result) => {
        alert('Appointment booked successfully!');
      }, (error) => {
        alert('Failed to send appointment data. Please try again.');
      });
      setFormData({ name: '',
        email: '',
        number:'',
        appointmentDate: '',
        appointmentTime: '',
        message: '', })
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="ap-con">
    <form className='form' onSubmit={handleSubmit}>
      <h1>Book an Appointment</h1>
      <div className='name-con'>
        <label>Name</label>
        <div>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
      </div>
      <div  className='name-con'>
        <label>Number</label> 
        <div>
        <input type="text" name="number" value={formData.number} onChange={handleChange} required />
        </div>
      </div>
      <div  className='name-con'>
        <label>Email</label>
        <div><input type="email" name="email" value={formData.email} onChange={handleChange} required /></div>
        
      </div>
      <div  className='name-con'>
        <label>Date</label>
        <div><input type="date" name="appointmentDate" value={formData.appointmentDate} onChange={handleChange} required /></div>
        
      </div>
      <div  className='name-con'> 
        <label>Time</label>
        <div>
        <input type="time" name="appointmentTime" value={formData.appointmentTime} onChange={handleChange} required />
        </div>
      </div>
      <div  className='name-con'>
        <label>Message</label>
        <div>
        <textarea name="message" value={formData.message} onChange={handleChange} />
        </div>
      </div>
      <button className='button' type="submit">Book Appointment</button>
    </form>
    </div>
  );
};

export default AppointmentForm;
