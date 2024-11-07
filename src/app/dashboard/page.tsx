import { getOrganisation, getUsers, getOrganisationName } from "@/lib/database";

require("dotenv").config();

export default async function Dashboard() {
  const organisationName = await getOrganisationName();

  const dataUsers = await getUsers();
  const listUsers = dataUsers.map((user) => (
    <ul key={user.id}>
      Nom : {user.name}
      <li>email : {user.email}</li>
      <li>role : {user.role}</li>
      <li>organisation : {user.organisationId}</li>
    </ul>
  ));

  const dataOrganisations = await getOrganisation();
  const listOrganisations = dataOrganisations.map((organisation) => (
    <ul key={organisation.id}>
      Nom : {organisation.name}
      <li>contact : {organisation.contact}</li>
      <li>Phone : {organisation.phoneNumber}</li>
    </ul>
  ));

  return (
    <div>
      <div>
        <h1>Liste des utilisateurs : </h1>
        <ul>{listUsers}</ul>
      </div>
      <div>
        <h1>Liste des organisations : </h1>
        <ul>{listOrganisations}</ul>
      </div>
    </div>
  );
}
