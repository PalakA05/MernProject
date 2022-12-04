import React from "react";
import { useEffect } from "react";
import { useHistory } from 'react-router-dom';

const Logout = () => {

    const navigate = useHistory();

    const logout = async () => {
        try {
            const res = await fetch("/logout", {
                method: "GET",
                headers: {
                    Accept : "application/json",
                    "Content-Type": "application/json"
                },
                credentials : "include"
            });

            if(res.status === 401 || !res)
            {
                window.alert("Please Logout Later");
            }else{
                navigate("/login")
                window.location.reload()
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        logout();
    }, []);

    return (
        <div>
        </div>
    );
}

export default Logout;