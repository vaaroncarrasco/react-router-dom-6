import { useParams } from "react-router-dom"

export const UserPage = () => {

  const { id } = useParams();

  return (
    <div>
      User <h1>{id}</h1>
    </div>
  )
}
