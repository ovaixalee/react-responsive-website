import React, {useState} from 'react'

const Contact = () => {
  const [data, setdata] = useState({
    fullname:"",
    email:"",
    phone:"",
    msg: ""
  })

  const InputEvent = (e)=> {
    const{name, value} = e.target;

    setdata((preState) => {
      return{
        ...preState,
        [name]: value,
      }
    })
  }
 const formSubmit = (e)=>{
   e.preventDefault();
   alert(
    `
    My name is ${data.fullname}
    My email is ${data.email}
    My phone number is ${data.phone}
    I want to say ${data.msg}
     `
   )
 }
 return (
<>
    <div className="my-5">
      <h1 className="text-center">Kontakt Uns</h1>
    </div>
    <div className="container contact_div">
      <div className="row">
        <div className="col-md-6 col-10 mx-auto">
        <form onSubmit={formSubmit}> 
          <div class="form-group">
            <label for="exampleFormControlInput1">
              Full Name</label>
            <input 
            type="text" 
            class="form-control" id="exampleFormControlInput1"
            name="fullname"
            value={data.fullname}
            onChange={InputEvent} 
            placeholder="Enter your name" 
            required/>
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">
              Email address</label>
            <input 
            type="email" 
            class="form-control" id="exampleFormControlInput1"
            name="email"
            value={data.email}
            onChange={InputEvent} 
            placeholder="name@example.com" 
            required/>
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">
              Phone </label>
            <input 
            type="number" 
            class="form-control" id="exampleFormControlInput1"
            name="phone"
            value={data.phone}
            onChange={InputEvent} placeholder="Phone Number" 
            required/>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Your Message</label>
            <textarea 
            class="form-control" id="exampleFormControlTextarea1" 
            rows="3"
            name="msg"
            value={data.msg}
            onChange={InputEvent}
            required
            ></textarea>
          </div>
          <div className="col-12 mt-2">
          <button 
          class="btn btn-outline-primary" 
          type="submit">
          Submit form</button>
          </div>
      </form>
        </div>
      </div>
    </div>
</>)
}

export default Contact
