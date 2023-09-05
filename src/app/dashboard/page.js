import { headers } from "next/headers";
import AppNavBar from "@/app/component/AppNavBar";

async function GetData() {
  const headersList = headers();
  return headersList.get("email");
}

const Page = async () => {
  const x = await GetData();
  return (
    <div className="text-center bg-dark text-light main-dash">
      <AppNavBar />
      <div>
        <h2 className="email-dash">{x}</h2>
      </div>
      <div className="face">
        <p className="v-index">II</p>
        <p className="h-index">II</p>
        <div className="hand">
          <div className="hand">
            <div className="hour"></div>
            <div className="minute"></div>
            <div className="second"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
