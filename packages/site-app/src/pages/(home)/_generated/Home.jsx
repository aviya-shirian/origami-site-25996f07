import { Structure } from '../structure.jsx'
import ServicesProvider from './services/ServicesProvider.js'
import './Home.css'

export default function Home(props) {
    return (
        <ServicesProvider {...props}>
            <Structure />
        </ServicesProvider>
    )
}
