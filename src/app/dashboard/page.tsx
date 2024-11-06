import { getUsers } from "@/lib/database";
require("dotenv").config();

export default async function dashboard(){
    const dataUsers = await getUsers();
    const listUsers = dataUsers.map(user =><ul>Nom : {user.name}
    <li>email : {user.email}</li>
    <li>role : {user.role}</li>
    <li>organisation : {user.organisationId}</li>
    </ul>)


    return (
        <div>
        <h1>Liste des utilisateurs : </h1>
        <ul>{listUsers}</ul>
        </div>
    );
}