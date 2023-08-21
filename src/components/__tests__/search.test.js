import Body from '../Body'
import {screen,render} from '@testing-library/react'
import '@testing-library/jest-dom'
import mockdata from '../mocks/mockdata.json'
import { act } from 'react-dom/test-utils'


global.fetch=jest.fn(()=>{
    return Promise.resolve(
        {
            json:()=>{
                return Promise.resolve(mockdata)
            }
        }
    )
})
it("should load search on render the page",()=>{
    act(()=>{ render(<Body/>)})
    const [btn]=screen.getAllByRole("button",{name:"Toprated"})
    expect(btn).toBeInTheDocument()


    const ip=screen.getByTestId("search")
    expect(ip).toBeInTheDocument()
})


