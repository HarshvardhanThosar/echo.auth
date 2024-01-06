enum TimeOptions {
  milliseconds = 'milliseconds',
  seconds = 'seconds',
  minutes = 'minutes',
  hours = 'hours',
  days = 'days',
}
type TimeOptionType = Partial<Record<TimeOptions, number | 0>>
function milliseconds (options: TimeOptionType) {
  const unit_multipliers = {
    milliseconds: 1000,
    seconds: 60,
    minutes: 60,
    hours: 24,
    days: 1
  } as const

  if (typeof options !== 'object') return 0

  console.log(
    Object.entries(options).reduce((acc, tuple) => {
      tuple[1]
      return acc
    }, 0)
  )
}

milliseconds({ days: 1 })

export default milliseconds
