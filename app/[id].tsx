import { useRouter } from "next/router";
export default function page(){

    const router = useRouter()
    const { id } = router.query
    
    return (
        <div>
        <h1>Post: {id}</h1>
        </div>
    )
}