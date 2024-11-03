// @ with this setup -> if we unintentionally modify the Post type -> TS cannot check because it just can check build time error -> zod
type Post = {
  id: number
  userId: number
  title: string
  body: string
}

// @ :Promise<Post[]>
export async function get(url: string): Promise<Post[]> {
  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error('Failed to fetch data.')
    }

    const data: Post[] = await response.json() // @
    return data
  } catch (error) {
    // @
    const errorMsg =
      error instanceof Error ? error.message : 'There was an error'
    console.error(errorMsg)
    return []
  }
}

// ## we can also use zod to validate the runtime data
