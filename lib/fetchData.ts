
// export const fetchData = async () => {
//     try {
//         const res = await fetch('/seed-output.json')
//         const data = await res.json()
//         if (!res.ok) throw new Error('Failed to fetch data')
//         return data
//     } catch (err) {
//         console.log(err)
//     }
// }
const url = process.env.NEXT_PUBLIC_API_URL || 'https://cbt-backend-vsw6.onrender.com/'
export const fetchData = async () => {
    try {
        const res = await fetch(url)
        const data = await res.json()
        return data
    } catch (err) {
        console.log(err)
    }
}