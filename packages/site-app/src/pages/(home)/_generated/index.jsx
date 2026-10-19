import React from 'react'
import { createRoot } from 'react-dom/client'
import { PilerPage } from '@wix/builder-piler-components'
import '../../../site/consentPolicyManager.js'
import { initializeAuth } from '../../../site/wixAuth.js'
import Home from './Home.jsx'
;(async () => {
    await initializeAuth()
    createRoot(document.getElementById('root')).render(
        React.createElement(React.StrictMode, null, React.createElement(PilerPage, { Page: Home }))
    )
})()
