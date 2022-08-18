import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'

import Login from './pages/login'

function Layout() {
	return (
		<>
			<Outlet />
			<Routes>
				<Route path="login" element={<Login />} />
			</Routes>
		</>
	)
}

export default Layout
