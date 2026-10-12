import { Formik, Form, ErrorMessage, Field } from 'formik'
import * as Yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../utils/userContext';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const getUsers = () => {
  try {
    return JSON.parse(localStorage.getItem('foodfest_users')) || []
  } catch {
    return []
  }
}

const Login = () => {
  
const { login } = useAuth();
const navigate = useNavigate();
const location = useLocation();

const redirectTo = location.state?.from || '/home';

  return (
    <>
      <ToastContainer theme="colored" position="top-right" limit={1} />
      <Formik
        initialValues={{ name: '', password: '' }}
        validationSchema={Yup.object({
          name: Yup.string().required('Required'),
          password: Yup.string()
            .matches(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$/,
              'Must include upper, lower, number & special character (8-16)'
            )
            .required('Required'),
        })}
        onSubmit={(values, { resetForm }) => {
          const users = getUsers()
          const matched = users.find(
            (u) =>
              u.name.toLowerCase() === values.name.toLowerCase() &&
              u.password === values.password
          )

          if (matched) {
              login(matched);
              toast.success('Login successful');
              resetForm();
              navigate(redirectTo, { replace: true });
          } else {
            toast.error('Invalid credentials. Please signup first.')
          }
        }}
      >
        <div className="mx-auto my-8 w-11/12 max-w-md rounded-lg bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-center text-xl font-semibold">Login</h2>
          <Form>
            <label>Username</label>
            <Field
              type="text"
              name="name"
              className="mb-1 mt-1 w-full rounded border border-gray-300 p-2"
            />
            <p className="mb-3 text-sm text-red-500">
              <ErrorMessage name="name" />
            </p>

            <label>Password</label>
            <Field
              type="password"
              name="password"
              className="mb-1 mt-1 w-full rounded border border-gray-300 p-2"
            />
            <p className="mb-3 text-sm text-red-500">
              <ErrorMessage name="password" />
            </p>

            <button
              type="submit"
              className="mt-2 w-full rounded bg-orange-500 py-2 text-white hover:bg-orange-600"
            >
              Login
            </button>
          </Form>
          <p className="mt-4 text-center text-sm">
            Don&apos;t have an account?{' '}
            <Link to="/signup" className="font-semibold text-orange-600">
              Signup
            </Link>
          </p>
        </div>
      </Formik>
    </>
  )
}

export default Login
