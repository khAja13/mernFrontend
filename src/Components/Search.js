import { useState } from "react";

function Search() {
	const [id, setId] = useState("");
	const [values, setValues] = useState({
		id: "",
		name: "",
		email: "",
		phone: "",
	});

	async function go() {
		try {
				const result = await fetch(`/api/user/${id}`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
				mode: 'no-cors'
			});
			const res = await result.json();
			values.id = res._id;
			values.name = res.name;
			values.email = res.email;
			values.phone = res.phone;
			setId("");
		} catch (err) {
			return;
		}
	}

	return (
		<>
			<div
				className="container w-auto"
				style={{
					margin: "20px auto",
					height: "calc(100vh - 55vh)",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<div className="w-full max-w-xs">
					<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
						<h1 style={{ fontSize: "30px", textAlign: "center" }}>
							Search by ID
						</h1>
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="id"
						>
							ID
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  mb-4"
							name="id"
							type="text"
							placeholder="Enter the ID"
							value={id}
							onChange={(e) => setId(e.target.value)}
						/>
						<div className="flex items-center justify-between">
							<button
								className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
								type="button"
								onClick={() => go()}
							>
								Search
							</button>
						</div>
					</form>
				</div>
			</div>

			<div className="container read">
				<table>
					<tbody>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Email</th>
							<th>Phone</th>
						</tr>
						{
							<tr>
								<td>{values.id}</td>
								<td>{values.name}</td>
								<td>{values.email}</td>
								<td>{values.phone}</td>
							</tr>
						}
					</tbody>
				</table>
			</div>

			<div className="foot">
				Made with <span>❤</span> by Khaja shaik
			</div>
		</>
	);
}

export default Search;
