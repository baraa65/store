import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SVG from '../../../../assets/login-image.svg'

function Login() {
	const [form, setForm] = useState({ email: '', password: '' })
	const navigate = useNavigate()

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const {
			target: { name, value },
		} = e

		setForm({ ...form, [name]: value })
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (form.email && form.password)
			navigate('/core')
	}

	return (
		<>
			<div className="flex h-full">
				<div className="flex flex-1 items-center justify-center h-full">
					<div className="flex flex-col items-center">
						<div className="text-3xl font-bold pb-8">Login</div>

						<form onSubmit={handleSubmit} style={{ width: '300px' }}>
							<div className="pb-4 w-full">
								<input
									type="text"
									name="email"
									value={form.email}
									onChange={handleChange}
									className="w-full p-2 rounded-lg"
								/>
							</div>

							<div className="pb-4 w-full">
								<input
									type="text"
									name="password"
									value={form.password}
									onChange={handleChange}
									className="w-full p-2 rounded-lg"
								/>
							</div>

							<div className="w-full pt-4">
								<button
									type="submit"
									className="bg-teal-600 text-white w-full p-2 rounded-lg"
								>
									Login
								</button>
							</div>
						</form>
					</div>
				</div>
				<div className="flex flex-1 flex-col items-center justify-center h-full">
					<img src={SVG} alt="logo" width="400px" />
				</div>
			</div>
		</>
	)
}

export default Login
