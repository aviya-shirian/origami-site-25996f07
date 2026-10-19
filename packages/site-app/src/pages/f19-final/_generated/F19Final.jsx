import { Structure } from '../structure.jsx'
import ServicesProvider from './services/ServicesProvider.js'
import './F19Final.css'

export default function F19Final(props) {
    return (
        <ServicesProvider {...props}>
            <Structure />
        </ServicesProvider>
    )
}
