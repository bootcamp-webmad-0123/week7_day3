import { useParams } from "react-router-dom"

const ParamsExample = () => {

    const { origin, destination, departure } = useParams()

    return (
        <h1>Params: enviarás a la API una petición para vuelos de {origin} a {destination} el día {departure}</h1>
    )

}

export default ParamsExample