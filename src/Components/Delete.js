import { useState } from 'react'
import Saver from './Saver';

function Delete() {
    const [id, setId] = useState("");
    
    const go = async () => {
        await Saver(id, 2)
        setId("")
    }

    return(
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
						Delete by ID	
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
								onChange={(e)=>setId(e.target.value)}
							/>
                            <div className="flex items-center justify-between">
							<button
								className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
								type="button"
								onClick={() => go()}
							>
								Delete
							</button>
						</div>
                </form>
                </div>
            </div>
			<div className="foot">Made with <span>❤</span> by Khaja shaik</div>
        </>
    )
}

export default Delete;