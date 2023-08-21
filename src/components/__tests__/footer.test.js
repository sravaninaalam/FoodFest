import Footer from '../Footer'
import {render,screen} from '@testing-library/react'
import '@testing-library/jest-dom'
it("should load footer component on render",()=>{
    render(<Footer/>)
    const [footer]=screen.getAllByRole("heading")
    expect(footer).toBeInTheDocument()
})