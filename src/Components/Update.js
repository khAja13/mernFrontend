import { useState } from "react";
import Saver from "./Saver";
import $ from 'jquery';

function Update(props) {
        
	const [values, setValues] = useState({
        id : "",
		name: "",
		email: "",
		phone: "",
	});
	const [error, setError] = useState(0);

	const go = async () => {
		const res = await Saver(values, props.val)
		setValues({
            id : "",
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
				className="container w-auto update"
				style={{
					margin: "50px auto",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexDirection : "column"
				}}
			>
				<div className="w-full max-w-xs up">
					<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
						<h1 style={{ fontSize: "20px", textAlign: "center" }}>
							{props.msg}
						</h1>
                        {error === 0 ? (
                            ""
                        ) : error === 1 ? (
                            <div id="success" style={{ textAlign: "center", backgroundColor: "green", height: "25px",}}> Success </div>
                        ) : <div id="error" style={{textAlign:"center" ,backgroundColor:"red", height:"25px"}} > Error </div>
                        }
						{
							props.val === 1 ? <div className="mb-4 mt-4">
							<label
								className="block text-gray-700 text-sm font-bold mb-2"
								htmlFor="id"
							>
								ID
							</label>
							<input
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  "
								name="id"
								type="text"
								placeholder="Enter your name"
								value={values.id}
								onChange={changer}
							/>
						</div> : ''
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
								className="block text-gray-700 text-sm font-bold"
								htmlFor="phone"
							>
								Contact number
							</label>
							<input
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 "
								name="phone"
								type="number"
								placeholder="Enter your contact number"
								value={values.phone}
								onChange={changer}
							/>
						</div>
						<div className="flex items-center justify-between">
							<button
								className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded"
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
			<div className="updateFoot">Made with ❤ by Khaja shaik</div>
		</>
	);
}

export default Update;
