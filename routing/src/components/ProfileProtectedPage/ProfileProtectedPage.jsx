import { Navigate } from "react-router-dom";

const ProfileProtectedPage = ({ user }) => {

    if (!user) return <Navigate to="/unauthorized" />

    return (
        <>
            <h1>Página protegida</h1>
            <hr />
            <p>Bienvenido a tu perfil, {user.username}</p>
        </>
    )
}

export default ProfileProtectedPage