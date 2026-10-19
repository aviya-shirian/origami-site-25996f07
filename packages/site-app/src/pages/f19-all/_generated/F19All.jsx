import { Structure } from '../structure.jsx'
import ServicesProvider from './services/ServicesProvider.js'
import './F19All.css'

export default function F19All(props) {
    return (
        <ServicesProvider {...props}>
            <Structure />
        </ServicesProvider>
    )
}
