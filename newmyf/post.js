document.addEventListener("DOMContentLoaded", function(){

    const user = document.getElementById("user");
    // const location = document.getElementById("location");
    const btn = document.getElementById("postear");
    const description = document.getElementById("description");
    const table = document.getElementById("tabla");
    let key = 1;


    btn.onclick = Añadir;


function Añadir(){
        if(user.value === "" || description.value === ""){
            console.log("tittle n description are required");

        } else {
            const row = document.createElement('li');
            row.setAttribute("id", key++);
            row.innerHTML = `                <td>
                    <div class="post">
                            <div class="cabeza">
                                <i class="icono fa-solid fa-user-secret"></i>
                                <div class="nombre">@user</div>
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
                                <b>@user:</b> increible, fuí al bar y lo primero que vi fue ESTO!?,como es posible que una RAVE se haga en un charco... 
                                Esto es lamentable.</p>
                            </div>
                    
                            <div class="comentarios">
                                <label class="label_comentarios" for="input_comentarios">agregar comentario</label>
                    
                                    <div class="grupo_comentarios" >
                                        <tr>
                                            <td><p class="parrafos_comentarios"><b>@user: </b> wow, amazing!</p></td>
                                            <td><p class="parrafos_comentarios"><b>@user: </b> wow, amazing!</p></td>
                                            <td><p class="parrafos_comentarios"><b>@user: </b> wow, amazing!</p></td>
                                            <td><p class="parrafos_comentarios"><b>@user: </b> wow, amazing!</p></td>
                                            <td><p class="parrafos_comentarios"><b>@user: </b> wow, amazing!</p></td>
    
    
                                        </tr>
                                    </div>
                                <input type="text" class="input_comentarios" id="input_comentarios">
                            </div>
    
    
                    </div>
                </td>`;

                table.appendChild(row);
        }

        // `       
        //         <td>
        //         ${title.value}
        //       </td>
        //       <td>
        //         ${descripcion.value}

        //       </td>
        //       <td class="text-center">
        //         <input type="checkbox">
        //       </td>
        //       <td class="text-right">
        //         <button class="btn btn-primary mb-1">
        //           <i class="fa fa-pencil"></i>
        //         </button>
        //       </td>
        // `;


        // const removeBtn = document.createElement("button");
        // removeBtn.classList.add('btn', 'btn', 'btn-danger', 'mb-1', 'm1-1');
        // removeBtn.innerHTML= '<i class="fa fa-trash"></i>';
        // removeBtn.onclick = function(e){
        //   id = Remove(row.getAttribute("id"));

        // }
        // row.children[3].appendChild(removeBtn);
    }




})