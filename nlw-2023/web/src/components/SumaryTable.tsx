import { generateDatesFromYearBeging } from "../utils/generate-dates-from-year-beging"
import HabitDay from "./HabitDay"

type Props = {}

export default function SumaryTable({ }: Props) {

    const dias = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

    const summaryDays = generateDatesFromYearBeging()

    const minimumSummaryDateSize = 18 * 7
    const amounOfDaysToFill = minimumSummaryDateSize - summaryDays.length

    return (
        <div className='w-full flex'>
            <div className='grid grid-rows-7 grid-flow-row gap-3'>
                {dias.map((d, index) => {
                    return (
                        <div
                            key={index}
                            className='text-zinc-400 text-xl h-10 w-10 flex items-center justify-center font-bold'
                        >
                            {d}
                        </div>
                    )
                })}
            </div>

            <div className='grid grid-rows-7 grid-flow-col gap-3'>
                {summaryDays.map(date => {
                    return <HabitDay 
                    completed={Math.round(Math.random()*5)} 
                    amount={5}  
                    key={date.toString()} 
                    />
                })}

                {amounOfDaysToFill > 0 && Array.from({ length: amounOfDaysToFill }).map((_, i) => {
                    return (
                        <div
                            key={i}
                            className=" w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"
                        />
                    )
                })}
            </div>
        </div>
    )
}