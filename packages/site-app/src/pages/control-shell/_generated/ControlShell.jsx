import { Structure } from '../structure.jsx'
import ServicesProvider from './services/ServicesProvider.js'
import './ControlShell.css'

export default function ControlShell(props) {
    return (
        <ServicesProvider {...props}>
            <Structure />
        </ServicesProvider>
    )
}
