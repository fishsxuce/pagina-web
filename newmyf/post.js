document.addEventListener("DOMContentLoaded", function(){

    const user = document.getElementById("user");
    const btn = document.getElementById("postear");
    const description = document.getElementById("description");
    const table = document.getElementById("tabla");
    const btn2 = document.getElementById("boton_comentarios");
    const comentario = document.getElementById("input_comentarios");
    const lista_comentarios = document.getElementById("lista_comentarios");

    contador_comentarios = 1;
    let key_post = 1;
    let key_comentario = 1;


    btn.onclick = Añadir;
    btn2.onclick = Enviar;

function Enviar(){
    if(comentario.value === ""){
        console.error("porfavor introduzca un comentario");
    } else{
        console.log("introduccinedo");
        const com =  document.createElement('li');
        com.setAttribute("key", key_comentario++ );
        com.innerHTML = `
        <li class="parrafos_comentarios"><p> <b>@user: </b> ${comentario.value}</p></li>
        
        
        `;
        lista_comentarios.appendChild(com);

    }

}


function Añadir(){
        if(user.value === "" || description.value === ""){
            console.log("tittle n description are required");

        } else {
            const row = document.createElement('li');
            row.setAttribute("key", key_post++);
            row.innerHTML = `                
                <td>
                    <div class="post">
                            <div class="cabeza">
                                <i class="icono fa-solid fa-user-secret"></i>
                                <div class="nombre">@${user.value}</div>
                            </div>
                            <div class="foto">
    
                                <img src="post.png" alt="">
                            </div>
    
                            <div class="reacciones">
                                <i class="icono fa-solid fa-heart"></i>
                                <i class="icono fa-solid fa-share-from-square"></i>
                                <i class="icono fa-solid fa-comment"></i>
                                
                            </div>
                            <div class="description">
                                <b>@${user.value}:</b> ${description.value}</p>
                            </div>
                    
                            <div class="comentarios">
                                <label class="label_comentarios" for="input_comentarios${contador_comentarios}">agregar comentario</label>
                    
                                    <div class="grupo_comentarios" >
                                        <tr>
                                            <td><p class="parrafos_comentarios"><b>@user: </b> wow, amazing!</p></td>
                                            <td><p class="parrafos_comentarios"><b>@user: </b> wow, amazing!</p></td>
                                            <td><p class="parrafos_comentarios"><b>@user: </b> wow, amazing!</p></td>
                                            <td><p class="parrafos_comentarios"><b>@user: </b> wow, amazing!</p></td>
                                            <td><p class="parrafos_comentarios"><b>@user: </b> wow, amazing!</p></td>
    
    
                                        </tr>
                                    </div>
                                <input type="text" class="input_comentarios" id="input_comentarios${contador_comentarios}">
                            </div>
    
    
                    </div>
                </td>`;

                table.appendChild(row);
                contador_comentarios++;
        }


    }




})