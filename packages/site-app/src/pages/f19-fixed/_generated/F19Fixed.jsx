import { Structure } from '../structure.jsx'
import ServicesProvider from './services/ServicesProvider.js'
import './F19Fixed.css'

export default function F19Fixed(props) {
    return (
        <ServicesProvider {...props}>
            <Structure />
        </ServicesProvider>
    )
}
