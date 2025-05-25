"use client"

import {cn} from "@/lib/utils";
import FacebookLogin, {SuccessResponse} from "@greatsumini/react-facebook-login";
import {useState} from "react";
import CopyIcon from "@/components/ui/copyIcon";
import SuccessIcon from "@/components/ui/successIcon";

interface Room {
    roomID: string,
    name: string
}

export default function FacebookLoginButton({className}: { className?: string }) {
    const [message, setMessage] = useState<{ text: string, severity: 'error' | 'success' }>()
    const [token, setToken] = useState<string>()
    const [userId, setUserId] = useState<string>()
    const [firstCopy, setFirstCopy] = useState<boolean>(false)
    const [secondCopy, setSecondCopy] = useState<boolean>(false)

    const [rooms, setRooms] = useState<Room[]>();
    const handleSuccess = (res: SuccessResponse) => {

    }
    return (
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
            <div className={'relative flex justify-center items-center'}>
                <input disabled={true} type={'text'} value={token} placeholder={'poczekaj na token'}
                       className={cn('bg-muted rounded-md border-solid border-[1px] border-muted-foreground',
                           ' mt-[10px] p-2 pl-4 pr-4 h-10 m-0 w-[400px]',
                           'text-center')}
                />
                {token && !firstCopy &&  <CopyIcon
                    className={cn('w-[25px] h-[25px] fill-muted-foreground absolute top-[50%] translate-y-[-50%] right-[10px]',
                        'hover:fill-foreground hover:cursor-pointer transition-all duration-200')}
                    onClick={() => {
                        token && navigator.clipboard.writeText(token).then(r => {
                            setFirstCopy(true)
                        })
                    }}

                />}
                {firstCopy && <SuccessIcon className={'w-[25px] h-[25px] fill-green-500 absolute top-[50%] translate-y-[-50%] right-[10px]'}/>}
            </div>
            <label className={'mt-[40px] uppercase font-bold text-[14px] text-foreground'}>
                User_ID
            </label>
            <div className={'relative flex justify-center items-center'}>
                <input disabled={true} type={'text'} value={userId} placeholder={'poczekaj na user_ID'}
                       className={cn('bg-muted rounded-md border-solid border-[1px] border-muted-foreground',
                           ' mt-[10px] p-2 pl-4 pr-4 h-10 w-[400px] m-0',
                           'text-center')}
                />
                {userId && !secondCopy && <CopyIcon
                    className={cn('w-[25px] h-[25px] fill-muted-foreground absolute top-[50%] translate-y-[-50%] right-[10px]',
                        'hover:fill-foreground hover:cursor-pointer transition-all duration-200')}
                    onClick={() => {
                        userId && navigator.clipboard.writeText(userId).then(r => {
                            setSecondCopy(true)
                        })
                    }}
                />}
                {secondCopy && <SuccessIcon className={'w-[25px] h-[25px] fill-muted-foreground absolute top-[50%] translate-y-[-50%] right-[10px]'}/>}
            </div>

        </div>
    )
}