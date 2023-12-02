import { useState } from "react";
import { register } from "../utils/network";
import { useNavigate } from 'react-router-dom';
import useInput from "../utils/useInput";

export default function RegisterPage(){
    const navigate = useNavigate();
    const [name, setName] = useInput("");
    const [email, setEmail] = useInput("");
    const [password, setPassword] = useInput("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        const response = await register({name, email, password});
        setLoading(false);
        if (response.error == false) {
            navigate('/');
        }
    }

    return(
        <>
            <h2>Register</h2>
            <br/>
            <form onSubmit={handleSubmit}>
                {loading ? 
                <p>Loading...</p>
                : 
                <>
                    <div>
                        <p>name</p>
                        <input type="text" className="input" value={name} onChange={setName} />
                    </div>
                    <br/>
                    <div>
                        <p>email</p>
                        <input type="text" className="input" value={email} onChange={setEmail} />
                    </div>
                    <br/>
                    <div>
                        <p>Password</p>
                        <input type="text" className="input" value={password} onChange={setPassword} />
                    </div>
                    <br/>
                    <button className="btn" style={{ backgroundColor: "#01e1ff" }}>Register</button>
                </>
                }
            </form>
        </>
    )
}