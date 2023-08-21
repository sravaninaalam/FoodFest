import {Formik,Form,ErrorMessage,Field} from 'formik'
import * as Yup from 'yup'
import { Link,useNavigate} from 'react-router-dom'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Signup = () => {
  const navigate=useNavigate()
  return (
   <>
   <ToastContainer theme='colored'/>
          <Formik 
                initialValues={{name:'',mail:'',password:''}}
                validationSchema={Yup.object({
                  name:Yup.string().required("required"),
                  mail:Yup.string().email("Invalid email").required("required"),
                  password:Yup.string()
                  .matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$","Must contain at least one number and one uppercase and lowercase letter and one Special character, minimum 8 and maximum 16")
                  .required("required").min(8,"Should not lessthan 8")
                })}
                onSubmit={(values)=>{
                  // fetch("http://localhost:3030/users",{
                    fetch("/.netlify/functions/server/users",{
                    method:"POST",
                    headers:{
                      "Content-Type":"application/json"
                   },
                   body:JSON.stringify(values)
                  })
                  toast.success("Successfully registered")
                  setTimeout(()=>{
                    navigate('/login')
                  },1200)
                  
                }}>
              <div className='bg-slate-200 w-96 mx-auto my-5 p-5 shadow-md rounded-lg'>
                <h2 className='font-serif text-lg font-semibold text-center'>Signup Form</h2>
                <Form>
                     <label>FullName:</label>
                     <Field type='text' name='name' className='w-72 border border-black rounded-md p-1 m-2'/>
                     <h2 className='text-red-400'><ErrorMessage name='name'/></h2>

                     <label>Email:</label>
                     <Field type='email' name='mail' className='w-72 border border-black rounded-md p-1 m-2'/>
                     <h2 className='text-red-400'><ErrorMessage name='mail'/></h2>

                     <label>password:</label>
                     <Field type='password' name='password' className='w-72 border border-black rounded-md p-1 m-2'/>
                     <h2 className='text-red-400'><ErrorMessage name='password'/></h2>

                     <button type='submit' className=' m-2 p-1 w-72 bg-blue-400 rounded-md'>Signup</button>
                </Form>
                <p>Already have an account ?<Link to='/login'><span className='text-lg font-medium'>Login</span></Link></p>
              </div>

          </Formik>
      
   </>
  )
}

export default Signup