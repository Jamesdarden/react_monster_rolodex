export const getData = async <T>(url: string): Promise<T> => {
    const response = await fetch(url)
    console.log(response)
    return await response.json()
}