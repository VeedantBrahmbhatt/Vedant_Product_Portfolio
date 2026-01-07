// import { parseISO, format } from 'date-fns'

// export default function DateFormatter({ dateString }) {
//   const date = parseISO(dateString)
//   return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>
// }
import { parseISO, format, isValid } from 'date-fns'

export default function DateFormatter({ dateString }) {
  if (!dateString) return null

  const date = parseISO(dateString)

  if (!isValid(date)) return null

  return (
    <time dateTime={dateString}>
      {format(date, 'LLLL d, yyyy')}
    </time>
  )
}
