import DateRangePicker from '@wojtekmaj/react-daterange-picker'
import { useState } from 'react'

export default function CalendarWrapper() {

    const [dates, setDates] = useState<Date[]>([new Date, new Date])

    return (
        <div>
            <DateRangePicker value={[ dates[0], dates[1]]} onChange={(e) => console.log(e)} />
        </div>
    )
}