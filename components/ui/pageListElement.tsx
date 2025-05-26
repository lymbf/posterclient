import {cn} from "@/lib/utils";

export default function PageListElement({className, name, pageId}:{className?:string, name:string, pageId:string}){
    return(
        <div
            className={cn('flex flex-row justify-center items-center w-[400px] h-[40px] border-muted-foreground border-solid border-[1px]',
                'p-2 px-4 font-normal text-[12px] text-foreground', className)}>
            <span className={'font-bold'}>Name: </span>{` ${name}     `} <span className={'font-bold'}>{pageId}</span>{` ${pageId}     `}
        </div>
    )
}