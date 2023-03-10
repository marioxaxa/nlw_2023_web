import * as Progress from '@radix-ui/react-progress';

type Props = {
    progress:number
}

export default function ProgressBar(props: Props) {


    return (
        <Progress.Root className='h-3 rounded-xl bg-zinc-700 w-full mt-4' value={props.progress}>
            <Progress.Indicator className=' h-3 rounded-xl bg-violet-600' style={{width: `${props.progress}%`}}/>
        </Progress.Root>
    )
}