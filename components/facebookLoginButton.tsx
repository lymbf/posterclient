"use client"

import {cn} from "@/lib/utils";
import FacebookLogin, {SuccessResponse} from "@greatsumini/react-facebook-login";
import {useState} from "react";

export default function FacebookLoginButton({className}:{className?:string}){
    const [message, setMessage] = useState<{text:string, severity: 'error'|'success'}>()

    const handleSuccess = (res:SuccessResponse)=>{

    }
    return(
        <div>
            <FacebookLogin
                appId="1601418347189530"
                onSuccess={(res) => {
                    console.log('Login Success!', res);
                }}
                onFail={(error) => {
                    setMessage({text:'sth went wrong while login to faceboo', severity: 'error'})
                }}
                render={
                    ({onClick})=>(
                        <button
                            className = {cn('hover:cursor-pointer hover:opacity-80 p-2 pr-4 pl-4 rounded-md bg-foreground font-bold text-black',className)}
                            onClick={onClick}>
                            Login to facebook
                        </button>
                    )
                }
            />
        </div>
    )
}