/// localhost:3000/blog/10 などでアクセス可能

export default async function BlogPage({ params }: { params: { id: string } }) {

    const { id } = await params

    return (
        <div>ブログID：{id}</div>
    )
}
