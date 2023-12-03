import React, { useContext, useState } from "react";
import { login, putAccessToken } from "../utils/network";
import useInput from "../utils/useInput";
import { useNavigate } from "react-router-dom";

export default function LoginPage(){
    const navigate = useNavigate();
    const [email, setEmail] = useInput("");
    const [password, setPassword] = useInput("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        const response = await login({email, password});
        setLoading(false);
        if (response.error == false) {
            alert(`Selamat Datang, ${email}`);
            const token = response.data.accessToken;
            putAccessToken(token);
            navigate('/app');
        }
    }

    return(
        <>
            <h2>Login</h2>
            <br/>
            <form onSubmit={handleSubmit}>
                {loading ? 
                <p>Loading...</p>
                : 
                <>
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
                    <button className="btn" style={{ backgroundColor: "#01e1ff" }}>Login</button>
                </>
                }
            </form>
        </>
    )
}