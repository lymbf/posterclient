import {cn} from "@/lib/utils";
import CopyIcon from "@/components/ui/copyIcon";
import {useEffect, useState} from "react";
import SuccessIcon from "@/components/ui/successIcon";

export default function PageListElement({className, name, pageId}:{className?:string, name:string, pageId:string}){
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            if (copied) setCopied(false)
        }, 500)
    }, [copied])

    return(
        <div
            className={cn('relative flex flex-row justify-center items-center w-[400px] h-[40px] border-muted border-solid border-[1px]',
                'p-2 px-4 font-normal text-[12px] text-foreground rounded-md', className)}>
            <span className={'font-bold mr-[5px]'}>Name: </span>{` ${name}     `} <span className={'font-bold ml-[30px] mr-[5px]'}>pageID:</span>{` ${pageId}     `}
            {!copied && <CopyIcon
                className={cn('w-[14px] h-[14px] fill-muted-foreground absolute top-[50%] translate-y-[-50%] right-[10px]',
                    'hover:fill-foreground hover:cursor-pointer transition-all duration-200')}
                onClick={() => {
                    navigator.clipboard.writeText(pageId).then(r => {
                        setCopied(true)
                    })
                }}

            />}
            {copied && <SuccessIcon
                className={'w-[15px] h-[15px] fill-green-500 absolute top-[50%] translate-y-[-50%] right-[10px]'}/>}
        </div>
    )
}