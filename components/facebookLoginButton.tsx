"use client"

import {cn} from "@/lib/utils";
import FacebookLogin, {SuccessResponse} from "@greatsumini/react-facebook-login";
import {useEffect, useState} from "react";
import CopyIcon from "@/components/ui/copyIcon";
import SuccessIcon from "@/components/ui/successIcon";
import PageListElement from "@/components/ui/pageListElement";

interface Page {
    pageID: string,
    name: string
}

export default function FacebookLoginButton({className}: { className?: string }) {
    const [message, setMessage] = useState<{ text: string, severity: 'error' | 'success' }>()
    const [token, setToken] = useState<string>()
    const [userId, setUserId] = useState<string>()
    const [firstCopy, setFirstCopy] = useState<boolean>(false)
    const [secondCopy, setSecondCopy] = useState<boolean>(false)
    const [pages, setPages] = useState<Page[]>([])

    const handleSuccess = (res: SuccessResponse) => {

    }

    useEffect(() => {
        setTimeout(() => {
            if (firstCopy) setFirstCopy(false)
            if (secondCopy) setSecondCopy(false)
        }, 500)
    }, [firstCopy, secondCopy])

    useEffect(() => {
        if (userId && token) {
            fetch(`https://graph.facebook.com/v22.0/${userId}/accounts?access_token=${token}`)
                .then(res => res.json()).then(res => {
                    setPages(res.data.map((p:any)=>{return {name:p.name, pageID:p.id}}))
                console.log('accounts res: ', res)
            })
        }
    }, [userId, token]);


    return (
        <div className={'flex flex-col items-center'}>
            <FacebookLogin
                appId="1601418347189530"
                // @ts-ignore
                dialogParams={{response_type: 'code'}}
                loginOptions={{config_id: '1354443829002393'}}
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

            <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-14"/>

            <label className={' uppercase font-bold text-[12px] text-foreground mb-[10px]'}>
                Access_token
            </label>
            <div className={'relative flex justify-center items-center'}>
                <input disabled={true} type={'text'} value={token} placeholder={'poczekaj na token'}
                       className={cn('bg-muted rounded-md border-solid border-[1px] border-muted-foreground',
                           ' mt-[10px] p-2 pl-4 pr-4 h-8 m-0 w-[400px]',
                           'text-center text-[12px]', token && 'pr-12')}
                />
                {token && !firstCopy && <CopyIcon
                    className={cn('w-[15px] h-[15px] fill-muted-foreground absolute top-[50%] translate-y-[-50%] right-[10px]',
                        'hover:fill-foreground hover:cursor-pointer transition-all duration-200')}
                    onClick={() => {
                        token && navigator.clipboard.writeText(token).then(r => {
                            setFirstCopy(true)
                        })
                    }}

                />}
                {firstCopy && <SuccessIcon
                    className={'w-[15px] h-[15px] fill-green-500 absolute top-[50%] translate-y-[-50%] right-[10px]'}/>}
            </div>
            <label className={'mt-[40px] uppercase font-bold text-[14px] text-foreground mb-[10px]'}>
                User_ID
            </label>
            <div className={'relative flex justify-center items-center'}>
                <input disabled={true} type={'text'} value={userId} placeholder={'poczekaj na user_ID'}
                       className={cn('bg-muted rounded-md border-solid border-[1px] border-muted-foreground',
                           ' mt-[10px] p-2 pl-4 pr-4 h-8 w-[400px] m-0',
                           'text-center text-[12px]', token && 'pr-12')}
                />
                {userId && !secondCopy && <CopyIcon
                    className={cn('w-[15px] h-[15px] fill-muted-foreground absolute top-[50%] translate-y-[-50%] right-[10px]',
                        'hover:fill-foreground hover:cursor-pointer transition-all duration-200')}
                    onClick={() => {
                        userId && navigator.clipboard.writeText(userId).then(r => {
                            setSecondCopy(true)
                        })
                    }}
                />}
                {secondCopy && <SuccessIcon
                    className={'w-[15px] h-[15px] fill-green-500 absolute top-[50%] translate-y-[-50%] right-[10px]'}/>}
            </div>

            <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-14"/>

            {pages.length ? <div className={'flex flex-col'}>
                <div className={'font-bold text-[14px] mb-[10px]'}>
                    Wybierz 1 z pages i skopiuj ID
                </div>
                <div className={'flex flex-col'}>
                    {pages.map((p, i) => {
                        return <PageListElement name={p.name} pageId={p.pageID}/>
                    })}
                </div>
            </div> : ''}
        </div>
    )
}