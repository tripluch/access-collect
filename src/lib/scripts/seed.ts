import { collectPoint, NewCollectPoint, NewOrganisation, NewUser, NewVehicle, NewContaining, NewWaste, NewCollectedData, organisation, user, vehicle, containing, waste, collectedData } from "../schema/schema";
import organisations from "../local_data/organisations.json";
import users from "../local_data/users.json";
import vehicles from "../local_data/vehicles.json";
import collectPoints from "../local_data/collectPoints.json";
import containings from "../local_data/containings.json";
import wastes from "../local_data/wastes.json";
import collectedDatas from "../local_data/collectedDatas.json";
import { db } from "../drizzle";
import { sql, eq } from "drizzle-orm";
import { PgTable } from "drizzle-orm/pg-core";


const clear = async () => {
  await db.execute(sql`truncate table "user" restart identity cascade`);
  console.log("Cleared users");
};


const convertOrganisation = (organisation: any): Promise<NewOrganisation> => {
  return Promise.resolve({
    id: organisation.id,
    name: organisation.name,
    address: organisation.address,
    phoneNumber: organisation.phoneNumber,
    contact: organisation.contact,
    agrementNumber: organisation.agrementNumber,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
};

const convertUser = async (user: any): Promise<NewUser | undefined>  => {
  
  const idOrganisation = (await db.query.organisation.findFirst())?.id;
  
  if(!idOrganisation){
    console.error(`Organisation not found`);
    return;
  };

  return Promise.resolve({
    id: user.id,
    name: user.name,
    email: user.email,
    password: user.password,
    role: user.role,
    phone: user.clientPhone,
    organisationId: idOrganisation,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
};

const convertVehicle = async (vehicle: any): Promise<NewVehicle | undefined> => {
  const idOrganisation = (await db.query.organisation.findFirst())?.id;

  if(!idOrganisation){
    console.error(`Organisation not found`);
    return;
  };

  return Promise.resolve({
    id: vehicle.id,
    label: vehicle.label,
    registration:vehicle.registration,
    organisationId: idOrganisation,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
};

const convertCollectPoint = async (collectPoint: any): Promise<NewCollectPoint | undefined> => {
  const idOrganisation = (await db.query.organisation.findFirst())?.id;
  const idClient = (await db.select({id: user.id}).from(user).where(eq(user.role, "client")))
  console.log(idClient)

  if(!idOrganisation || !idClient){
    console.error(`Organisation or client not found`)
    return;
  };

  return Promise.resolve({
    id: collectPoint.id,
    name: collectPoint.name,
    address: collectPoint.address,
    daysOfCollect: collectPoint.daysOfCollect,
    clientId: idClient[0].id,
    organisationId: idOrganisation,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
};

const convertContaining = async (containing: any): Promise<NewContaining> => {
  return Promise.resolve({
    id: containing.id,
    type: containing.type,
    size: containing.size,
    createdAt: new Date(),
    updatedAt: new Date()
  });

};

const convertWaste = async(waste: any): Promise<NewWaste> => {
  return Promise.resolve({
    id: waste.id,
    type: waste.type,
    createdAt: new Date(),
    updatedAt : new Date()
  });
};

const convertCollectedDate = async(collectedData: any): Promise<NewCollectedData | undefined> => {
  const idWaste = (await db.select({id: waste.id}).from(waste));
  const idContaining = (await db.select({id: containing.id}).from(containing));
  const idCollectPoint = (await db.select({id: collectPoint.id}).from(collectPoint));
  const idVehicle = (await db.select({id: vehicle.id}).from(vehicle));

  if(!idWaste || !idContaining || !idCollectPoint || !idVehicle){
    console.error(`Data not found`);
    return;
  };

  if(collectedDatas[0]){
    return Promise.resolve({
      id: collectedData.id,
      wasteId: idWaste[0].id,
      containing: idContaining[0].id,
      quantity: collectedData.quantity,
      weight: collectedData.quantity,
      collectPointId: idCollectPoint[0].id,
      vehicleId: idVehicle[0].id,
      createdAt: new Date(),
      updatedAt: new Date()
    });
  };

  if(collectedDatas[1]){
    return Promise.resolve({
      id: collectedData.id,
      wasteId: idWaste[1].id,
      containing: idContaining[1].id,
      quantity: collectedData.quantity,
      weight: collectedData.quantity,
      collectPointId: idCollectPoint[1].id,
      vehicleId: idVehicle[1].id,
      createdAt: new Date(),
      updatedAt: new Date()
    });
  };

  if(collectedDatas[2]){
    return Promise.resolve({
      id: collectedData.id,
      wasteId: idWaste[2].id,
      containing: idContaining[2].id,
      quantity: collectedData.quantity,
      weight: collectedData.quantity,
      collectPointId: idCollectPoint[2].id,
      vehicleId: idVehicle[2].id,
      createdAt: new Date(),
      updatedAt: new Date()
    })
  }
}




const insert = async <T extends Object, TTable extends PgTable>(
  table: TTable,
  data: any[],
  converter: (item: any) => Promise<T | undefined>,
  tableName: string,
) => {
  const items = (await Promise.all(data.map(converter))).filter(
    (item) => item !== undefined,
  ) as T[];
  console.log(items);

  const inserted = await db.insert(table).values(items).returning();
  console.log(`Inserted ${inserted.length} items into table ${tableName}`);
  return inserted;
};

const main = async () => {
  await clear();
  await insert(organisation, organisations, convertOrganisation, "organisation")
  await insert(user, users, convertUser, "user");
  await insert(vehicle, vehicles, convertVehicle, "vehicle");
  await insert(collectPoint, collectPoints, convertCollectPoint, "collectPoint");
  await insert(containing, containings, convertContaining, "containing");
  await insert(waste, wastes, convertWaste, "waste");
  await insert(collectedData, collectedDatas, convertCollectedDate, "collectedData");
};

main().then(() => {
  console.log("Done");
  process.exit(0);
});
