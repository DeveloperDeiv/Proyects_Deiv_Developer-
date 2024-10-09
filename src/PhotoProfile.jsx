import React from "react";
import fotoPerfil from "./assets/PhotoProfile_1.jpg";

function PhotoProfile() {
    return (
        <div className="flex justify-center p-2 mb-10">
            <img src={fotoPerfil} alt="Foto de Perfil" className="w-32 h-32 rounded-lg" />
        </div>
    );
}

export default PhotoProfile;
