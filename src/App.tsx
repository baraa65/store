import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import AuthLayout from './modules/auth/layout'

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/auth/*" element={<AuthLayout />} />
			</Routes>
		</Router>
	)
}

export default App
