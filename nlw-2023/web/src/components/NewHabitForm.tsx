import { Check } from 'phosphor-react'
import {FormEvent, useState} from 'react'
import * as Checkbox from '@radix-ui/react-checkbox';

const availableWeekDays = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado'
]

type Props = {}

export default function NewHabitForm({ }: Props) {

    const [title, setTitle] = useState('')
    const [weekDays, setWeekDays] = useState<number[]>([])

    function createNewHabit(event: FormEvent) {
        event.preventDefault()
    }

    function handleToggleWeekDay(weekDay:number){
        if(weekDays.includes(weekDay)){
            const weekDaysWithRemovedOne = weekDays.filter(day => day !== weekDay)
            
            setWeekDays(weekDaysWithRemovedOne)
        } else {
            const weekDaysWithAddedOne = [...weekDays, weekDay]

            setWeekDays(weekDaysWithAddedOne)
        }
    }

    return (
        <form className='w-full flex flex-col mt-6' onSubmit={event => createNewHabit(event)}>
            <label htmlFor='title' className=' font-semibold leading-tight'>
                Qual seu comprometimento?
            </label>

            <input
                type='text'
                id='title'
                placeholder='ex.: Exercícios, dormir bem, etc...'
                className='p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400'
                autoFocus
                onChange={ event => setTitle(event.target.value)}
            />

            <label htmlFor='' className=' font-semibold leading-tight mt-4'>
                Qual a recorrência?
            </label>

            <div className='mt-3 flex flex-col gap-2'>
                {availableWeekDays.map((weekDay, index) => {
                    return (
                    <Checkbox.Root 
                    className='flex items-center gap-3 group'
                        key={weekDay}
                        onCheckedChange={() => {handleToggleWeekDay(index)}}
                        >

                        <div className='h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500' >
                            <Checkbox.Indicator>
                                <Check
                                    size={20}
                                    className='text-white'
                                />
                            </Checkbox.Indicator>
                        </div>

                        <span className='text-white leading-tight '>
                            {weekDay}
                        </span>
                    </Checkbox.Root>)
                })}

            </div>

            <button type='submit' className='mt-6 rounded-lg p-4 gap-3 flex items-center justify-center font-semibold bg-green-600 hover:bg-green-500'>
                <Check size={20} weight='bold' />
                Confirmar
            </button>


        </form>
    )
}