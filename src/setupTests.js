import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect'

// this adds snapshot-diff toMatchDiffSnapshot assertion
import 'snapshot-diff/extend-expect'

configure({ adapter: new Adapter() })

require('jest-fetch-mock').enableMocks()
