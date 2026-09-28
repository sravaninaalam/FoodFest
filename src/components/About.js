import React, { useState } from 'react'
import Userclass from './Userclass'

function Section({ title, description, visible, setShow, hide }) {
  return (
    <div className="mx-2 my-4 rounded border border-orange-200 bg-white p-3 md:mx-10">
      <h2 className="font-bold text-gray-800">{title}</h2>
      {visible ? (
        <div className="mt-2">
          <button
            type="button"
            className="mb-2 text-sm text-orange-600"
            onClick={hide}
          >
            HIDE
          </button>
          <div>{description}</div>
        </div>
      ) : (
        <button
          type="button"
          className="mt-1 text-sm text-orange-600"
          onClick={setShow}
        >
          SHOW
        </button>
      )}
    </div>
  )
}

function About() {
  const [show, setShow] = useState(null)

  return (
    <div className="min-h-screen bg-orange-50 py-6">
      <h1 className="mb-4 text-center text-2xl font-bold text-gray-800">About FoodFest</h1>
      <Section
        title="Developed By"
        visible={show === 'developed'}
        setShow={() => setShow('developed')}
        hide={() => setShow(null)}
        description={
          <Userclass
            name="sravani"
            location="Vizianagaram, Andhra Pradesh, India"
            mail="nalamsravani2016@gmail.com"
          />
        }
      />
      <Section
        title="Tech Stack"
        visible={show === 'details'}
        setShow={() => setShow('details')}
        hide={() => setShow(null)}
        description={
          <ul className="mx-4 my-2 list-disc text-gray-700">
            <li>
              <span className="font-bold">React:</span> UI components and hooks
            </li>
            <li>
              <span className="font-bold">Parcel:</span> Bundler / dev server
            </li>
            <li>
              <span className="font-bold">Tailwind CSS:</span> Styling
            </li>
            <li>
              <span className="font-bold">Redux Toolkit:</span> Cart & orders state
            </li>
            <li>
              <span className="font-bold">React Router:</span> Client-side routing
            </li>
          </ul>
        }
      />
      <Section
        title="Features"
        visible={show === 'feature'}
        setShow={() => setShow('feature')}
        hide={() => setShow(null)}
        description={
          <ul className="mx-4 my-2 list-disc text-gray-700">
            <li>Browse restaurants and menus</li>
            <li>Search and top-rated filter</li>
            <li>Add to cart with quantity controls</li>
            <li>Demo payment flow</li>
            <li>Orders history after payment</li>
            <li>Login / Signup with localStorage</li>
          </ul>
        }
      />
    </div>
  )
}

export default About
