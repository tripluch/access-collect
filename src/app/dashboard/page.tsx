import DashboardLinks from "./components/DashboardLinks";

export default async function Dashboard() {
  return (
    <div className="flex">
      <div>
        <DashboardLinks />
      </div>
      <div className="hidden md:block">
        <h1 className="text-midnightBlue">{"Bonjour Super Admin,"}</h1>
      </div>
    </div>
  );
}
