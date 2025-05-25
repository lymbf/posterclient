"use client"

import {cn} from "@/lib/utils";
import FacebookLogin, {SuccessResponse} from "@greatsumini/react-facebook-login";
import {useState} from "react";

interface Room{
    roomID: string,
    name: string
}

export default function FacebookLoginButton({className}:{className?:string}){
    const [message, setMessage] = useState<{text:string, severity: 'error'|'success'}>()
    const [token, setToken] = useState<string>()
    const [userId, setUserId] = useState<string>()
    const [rooms, setRooms] = useState<Room[]>();
    const handleSuccess = (res:SuccessResponse)=>{

    }
    return(
        <div className={'flex flex-col items-center'}>
            <FacebookLogin
                appId="1601418347189530"
                onSuccess={(res) => {
                    setToken(res.accessToken)
                    setUserId(res.userID)
                    console.log('Login Success!', res);
                }}
                onFail={(error) => {
                    setMessage({text: 'sth went wrong while login to faceboo', severity: 'error'})
                }}
                render={
                    ({onClick}) => (
                        <button
                            className={cn('hover:cursor-pointer hover:opacity-80 text-background w-[200px] p-2 pr-4 pl-4 rounded-md bg-foreground font-bold ', className)}
                            onClick={onClick}>
                            Login to facebook
                        </button>
                    )
                }
            />
            <label className={'mt-[40px] uppercase font-bold text-[14px] text-foreground'}>
                Access_token
            </label>
            <input disabled={true} type={'text'} value={token} placeholder={'poczekaj na token'}
                   className={cn('bg-muted rounded-md border-solid border-[1px] border-muted-foreground',
                       ' mt-[10px] p-2 pl-4 pr-4 h-10 w-[400px]',
                       'text-center')}
            />
            <label className={'mt-[40px] uppercase font-bold text-[14px] text-foreground'}>
                User_ID
            </label>
            <input disabled={true} type={'text'} value={token} placeholder={'poczekaj na user_ID'}
                   className={cn('bg-muted rounded-md border-solid border-[1px] border-muted-foreground',
                       ' mt-[10px] p-2 pl-4 pr-4 h-10 w-[400px]',
                       'text-center')}
            />
        </div>
    )
}