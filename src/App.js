import './App.css';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({firstName: "" , lastName : "", email: "", country: "India", streetAddress : "", city: "", state: "", postalCode: "", comments: false , candidates: false, offers: false, pushNotification:"", });
  function changeHandler(event) {
    const {name,value,checked,type} = event.target;
    setFormData( (prev) => ({
      ...prev,[name] : type === "checkbox" ? checked : value
    }))
  }
  function submitHandler(event) {
    event.preventDefault();
    console.log(formData);
  }
  return (
    <div className='w-full md:max-w-[50%] mx-auto shadow p-8'>
      <form onSubmit={submitHandler} className='space-y-2'>
        <label htmlFor='firstName' className='text-sm font-medium leading-6 text-gray-900'>First Name</label>

        <input type = "text" name = "firstName" id = "firstName" placeholder='' value = {formData.firstName} onChange={changeHandler} className='mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400'></input>

        <label htmlFor='lastName' className='text-sm font-medium leading-6 text-gray-900'>Last Name</label>
        
        <input type = "text" name = "lastName" id = "lastName" placeholder='' value = {formData.lastName} onChange={changeHandler} className='mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400line'></input>
        

        <label htmlFor='email' className='text-sm font-medium leading-6 text-gray-900'>Email</label>
        
        <input type = "email" name = "email" id = "email" placeholder='' value = {formData.email} onChange={changeHandler} className='mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400'></input>
        

        <label htmlFor='country' className='text-sm font-medium leading-6 text-gray-900'>Country</label><br/>
        <select id='country' name='country' value={formData.country} onChange={changeHandler} className='mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400'>
          <option>India</option>
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>
        

        <label htmlFor='streetAddress' className='text-sm font-medium leading-6 text-gray-900'>Street Address</label>
        
        <input type = "text" name = "streetAddress" id = "streetAddress" placeholder='' value = {formData.streetAddress} onChange={changeHandler} className='mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400'></input>
        

        <label htmlFor='city' className='text-sm font-medium leading-6 text-gray-900'>City</label>
        
        <input type = "text" name = "city" id = "city" placeholder='' value = {formData.city} onChange={changeHandler} className='mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400'></input>
        

        <label htmlFor='state' className='text-sm font-medium leading-6 text-gray-900'>State / Province</label>
        
        <input type = "text" name = "state" id = "state" placeholder='' value = {formData.state} onChange={changeHandler} className='mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400'></input>
        

        <label htmlFor='postalCode' className='text-sm font-medium leading-6 text-gray-900'>ZIP / Postal Code</label> 
        
        <input type = "text" name = "postalCode" id = "postalCode" placeholder='' value = {formData.postalCode} onChange={changeHandler} className='mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400'></input>
        

        <div>
          <div className='text-sm font-semibold leading-6 text-gray-900'>By Email</div>

          <div className='mt-4 space-y-2'>
            <div className='flex'>
              <div className='flex h-6 items-center'>
                <input type='checkbox' id ='comments' name='comments' checked={formData.comments} onChange = {changeHandler} className='h-4 w-4 rounded'></input>
              </div>
              <div className='ml-3 text-sm leading-6'>
                <label htmlFor='comments' className='font-medium text-gray-900'>Comments</label>
                <p className='text-gray-500'>Get notified when someone posts a comment on a posting.</p>
              </div>
            </div>

            <div className='flex'>
              <div className='flex h-6 items-center'>
                <input type='checkbox' id ='candidates' name='candidates' checked={formData.candidates} onChange = {changeHandler} className='h-4 w-4 rounded'></input>
              </div>
              <div className='ml-3 text-sm leading-6'>
                <label htmlFor='candidates' className='font-medium text-gray-900'>Candidates</label>
                <p className='text-gray-500'>Get notified when a candidate applies for a job.</p>
              </div>
            </div>

            <div className='flex'>
              <div className='flex h-6 items-center'>
                <input type='checkbox' id ='offers' name='offers' checked={formData.offers} onChange = {changeHandler} className='h-4 w-4 rounded'></input>
              </div>
              <div className='ml-3 text-sm leading-6'>
                <label htmlFor='offers' className='font-medium text-gray-900'>Offers</label>
                <p className='text-gray-500'>Get notified when a candidate accepts or rejects an offer</p>
              </div>
            </div>

          </div>
        </div>

        <div>
          <div className='contents text-sm font-semibold leading-6 text-gray-900'>Push Notifications</div>
          <p className='text-sm text-gray-500'>These are delivered via SMS to your mobile phone.</p>

          <div className='mt-4 space-y-2'>
            <div className='flex items-center'>
              <input type='radio' id='pushEverything' name='pushNotification' value='Everything' onChange={changeHandler} className='h-4 w-4'></input>
              <label htmlFor='pushEverything' className='ml-3 text-sm font-medium leading-6 text-gray-900'>Everything</label>
            </div>
            <div className='flex items-center'>
              <input type='radio' id='pushEmail' name='pushNotification' value='Same as Email' onChange={changeHandler} className='h-4 w-4'></input>
              <label htmlFor='pushEmail' className='ml-3 text-sm font-medium leading-6 text-gray-900'>Same as Email</label>
            </div>
            <div className='flex items-center'>
              <input type='radio' id='pushNothing' name='pushNotification' value='No Push Notification' onChange={changeHandler} className='h-4 w-4'></input>
              <label htmlFor='pushNothing' className='ml-3 text-sm font-medium leading-6 text-gray-900'>No Push Notification</label>
            </div>
          </div>
        </div>

        <div className='my-3'>
          <button className='bg-blue-500 text-white font-bold rounded py-2 px-4'>Save</button>
        </div>
      </form>
    </div>
  );
}

export default App;
