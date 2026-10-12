import { Formik, Form, ErrorMessage, Field } from 'formik'
import * as Yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const getUsers = () => {
  try {
    return JSON.parse(localStorage.getItem('foodfest_users')) || []
  } catch {
    return []
  }
}

const Signup = () => {
  const navigate = useNavigate()

  return (
    <>
      <ToastContainer theme="colored" />
      <Formik
        initialValues={{ name: '', mail: '', password: '' }}
        validationSchema={Yup.object({
          name: Yup.string().required('Required'),
          mail: Yup.string().email('Invalid email').required('Required'),
          password: Yup.string()
            .matches(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$/,
              'Must include upper, lower, number & special character (8-16)'
            )
            .required('Required'),
        })}
        onSubmit={(values, { resetForm }) => {
          const users = getUsers()
          const exists = users.some(
            (u) => u.name.toLowerCase() === values.name.toLowerCase()
          )

          if (exists) {
            toast.error('Username already exists')
            return
          }

          users.push(values)
          localStorage.setItem('foodfest_users', JSON.stringify(users))
          toast.success('Successfully registered')
          resetForm()
          setTimeout(() => navigate('/login'), 800)
        }}
      >
        <div className="mx-auto my-8 w-11/12 max-w-md rounded-lg bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-center text-xl font-semibold">Signup</h2>
          <Form>
            <label>Full Name</label>
            <Field
              type="text"
              name="name"
              className="mb-1 mt-1 w-full rounded border border-gray-300 p-2"
            />
            <p className="mb-3 text-sm text-red-500">
              <ErrorMessage name="name" />
            </p>

            <label>Email</label>
            <Field
              type="email"
              name="mail"
              className="mb-1 mt-1 w-full rounded border border-gray-300 p-2"
            />
            <p className="mb-3 text-sm text-red-500">
              <ErrorMessage name="mail" />
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
              Signup
            </button>
          </Form>
          <p className="mt-4 text-center text-sm">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-orange-600">
              Login
            </Link>
          </p>
        </div>
      </Formik>
    </>
  )
}

export default Signup
