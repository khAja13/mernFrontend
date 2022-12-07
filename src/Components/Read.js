import { useEffect, useRef, useState } from "react";

function Read() {
	const [state, setState] = useState(0);
	const values = useRef([]);

	async function go() {	
		try {
			const result = await fetch("/api/user", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			});
			console.log(result);
			const res = await result.json();
			console.log(res)
			let i = 0;
			res.map((val) => {
				values.current[i] = {
					id: val._id,
					name: val.name,
					email: val.email,
					phone: val.phone,
				};
				i++;
			});
			setState(1);
		} catch (err) {
			console.log(err);
			return;
		}
	}

	useEffect(() => {
		go();
	}, []);


	return (
		<>
		<div className="outer">
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
                            state === 1 ? values.current.map((item) => {
                                return <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                </tr>
                            }) : null
                        }
					</tbody>
				</table>
			</div>
		</div>
		<div className="foot">Made with ❤ by Khaja shaik</div>
		</>
	);
}

export default Read;
