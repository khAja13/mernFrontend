import { useState } from "react";
import Saver from "./Saver";
import $ from 'jquery';

function Create(props) {
	const [values, setValues] = useState({
		name: "",
		email: "",
		phone: "",
	});
	const [error, setError] = useState(0);

	const go = async () => {
		const res = await Saver(values, props.val)
		setValues({
			name: "",
			email: "",
			phone: "",
		});
		if (res === 1) {
			setError(1);
			now();
		} else {
			setError(2);
			now2();
		}
	};

	const now = () => {
		setTimeout(function() {
			// $('#success').fadeOut('fast');
			$("#success").remove();
		}, 5000);
	}
	
	const now2 = () => {
		setTimeout(function() {
			// $('#error').fadeOut('fast');
			$("#error").remove();
		}, 5000);
	}

	const changer = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	return (
		<>
			<div
				className="container w-auto up"
				style={{
					margin: "auto",
					height: "calc(100vh - 20vh)",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<div className="w-full max-w-xs">
					<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
						<h1 style={{ fontSize: "30px", textAlign: "center" }}>
							{props.msg}
						</h1>
						{error === 0 ? (
							""
						) : error === 1 ? (
							<div id="success" style={{ textAlign: "center", backgroundColor: "green", height: "25px",}}> Success </div>
						) : <div id="error" style={{textAlign:"center" ,backgroundColor:"red", height:"25px"}} > Error </div>
						}
						<div className="mb-4 mt-4">
							<label
								className="block text-gray-700 text-sm font-bold mb-2"
								htmlFor="Name"
							>
								Name
							</label>
							<input
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  "
								name="name"
								type="text"
								placeholder="Enter your name"
								value={values.name}
								onChange={changer}
							/>
						</div>
						<div className="mb-6">
							<label
								className="block text-gray-700 text-sm font-bold mb-2"
								htmlFor="email"
							>
								Email
							</label>
							<input
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 "
								name="email"
								type="text"
								placeholder="Enter your email"
								value={values.email}
								onChange={changer}
							/>
						</div>
						<div className="mb-6">
							<label
								className="block text-gray-700 text-sm font-bold mb-2"
								htmlFor="phone"
							>
								Contact number
							</label>
							<input
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 "
								name="phone"
								type="number"
								placeholder="Enter your contact number"
								value={values.phone}
								onChange={changer}
							/>
						</div>
						<div className="flex items-center justify-between">
							<button
								className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
								type="button"
								onClick={() => go()}
							>
								Save
							</button>
						</div>
					</form>
					<p className="text-center text-gray-500 text-xs">
						&copy;2022 Acme Corp. All rights reserved.
					</p>
				</div>
			</div>
			<div className="foot">Made with <span>❤</span> by Khaja shaik</div>
		</>
	);
}

export default Create;
