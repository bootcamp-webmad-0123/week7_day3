import { useSearchParams } from "react-router-dom"

const StringsExample = () => {

    const [searchParams, setSearchParams] = useSearchParams()

    const size = searchParams.get('talla')
    const color = searchParams.get('color')

    return (
        <h1>Strings: enviarás a la API una petición para prendas de talla {size} y color {color}</h1>
    )

}

export default StringsExample