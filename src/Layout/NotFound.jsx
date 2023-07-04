import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

export default function NotFound() {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate("/Small-React-Projects")
        },2000)
    },[])
  return (
    <h4 className="text-9xl text-center font-bold text-red-900">NotFound, wait 2 second to Homepage... </h4>
  )
}
