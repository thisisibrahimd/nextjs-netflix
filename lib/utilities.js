export function convert_duration_to_hours_minutes(duration) {
    const hours = Math.floor(duration / 60)
    const minutes = duration % 60

    const duration_string = `${hours} hrs ${minutes} minutes`

    return duration_string
}