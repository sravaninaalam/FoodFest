import { Component } from 'react'

export class Userclass extends Component {
  render() {
    const{name,location,mail}=this.props
    return (
      <div>
          <div className='mt-3'>
              <h2 className=' text-black font-medium mx-1 p-1'>Name-<span className='text-gray-600 ml-1'>{name}</span></h2>
              <h2 className='text-black font-medium mx-1 p-1'>Location-<span className='text-gray-600 ml-1'>{location}</span></h2>
              <h3 className='text-black font-medium mx-1 p-1'>Mail me at-<span className='text-gray-600 ml-1'>{mail}</span></h3>
          </div>
      </div>
    )
  }
}

export default Userclass
