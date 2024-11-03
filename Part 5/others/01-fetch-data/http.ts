// @ zod
type Post = {
  id: number
  userId: number
  title: string
  body: string
}

// @ zod
export async function get(url: string): Promise<Post[]> {
  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error('Failed to fetch data.')
    }

    const data: Post[] = await response.json()
    return data
  } catch (error) {
    const errorMsg =
      error instanceof Error ? error.message : 'There was an error'
    console.error(errorMsg)
    return []
  }
}

// @ without zod
// export async function get(url: string) {
//   const response = await fetch(url)

//   if (!response.ok) {
//     throw new Error('Failed to fetch data.')
//   }

//   const data = (await response.json()) as unknown
//   return data
// }
