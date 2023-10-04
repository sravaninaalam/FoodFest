import {Formik,Form,ErrorMessage,Field, setIn} from 'formik'
import * as Yup from 'yup'
import {Link,useNavigate} from 'react-router-dom'
import userContext from '../utils/userContext'
import { useContext } from 'react'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const Login = () => {
  const {setName}=useContext(userContext)
  const navigate=useNavigate()
  return (
   <>
   <ToastContainer theme='colored' position="top-right" limit={1}/>
          <Formik 
                initialValues={{name:'',password:''}}
                validationSchema={Yup.object({
                  name:Yup.string().required("required"),
                  password:Yup.string()
                  .matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$","Must contain at least one number and one uppercase and lowercase letter and one Special character, minimum 8 and maximum 16")
                  .required("required").min(8,"Should not lessthan 8")
                })}
                onSubmit={async(values,onSubmitProps)=>{
                 const res=await fetch("https://foodapp-json.onrender.com/users/")
            
                 const json=await res.json()
                 Object.values(json).
             
                 forEach(i=>{
                  if(i.name.toLowerCase()===values.name.toLowerCase() && i.password===values.password)
                  {
                     
                      setTimeout(() => {
                        setName(values.name)
                        onSubmitProps.resetForm()
                        navigate("/home")
                       
                       }, 200);
                  }
                  else{
                    toast.error("invalid credentials")
                  }
                    
                }
                  )
                }
                }>
              <div className='bg-slate-200 w-2/3 md:w-96 mx-10 md:mx-auto my-5 p-5 shadow-xl rounded-xl'>
             
                <h2 className='font-serif text-lg font-semibold text-center'>Login Form</h2>
                <Form>
                     <label>Username:</label>
                     <Field type='text' name='name' className='w-56 md:w-72 border border-black rounded-md p-1 m-2'/>
                     <h2 className='text-red-500'><ErrorMessage name='name'/></h2>

                     <label>password:</label>
                     <Field type='password' name='password' className='w-56 md:w-72 border border-black rounded-md p-1 m-2'/>
                     <h2 className='text-red-500'><ErrorMessage name='password'/></h2>

                     <button type='submit' className=' m-2 p-1 w-56 md:w-72 bg-blue-400 rounded-md'>Login</button>
                </Form>
                <p>Don't have an account ?<Link to='/signup'><span className='text-lg font-medium'>Signup</span></Link></p>
              </div>

          </Formik>
     
   </>
  )
}

export default Login
