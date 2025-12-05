import { Navigate, useParams } from "react-router";
import Surveillance from "./surveillance/Surveillance";
import Fibernetics from "./fibernetics/Fibernetics";
import Equipment from "./equipments/Equipments";
import Support from "./support/support";

const NetworkSubpage = () => {
  const { id } = useParams();
  const networkPages = {
    surveillance: Surveillance,
    fibernetics: Fibernetics,
    equipment: Equipment,
    support: Support,
  };

  const NetworkComponent =
    networkPages[String(id) as keyof typeof networkPages];

  if (NetworkComponent) {
    return <NetworkComponent />;
  }
  return <Navigate to="/networks" replace />;
};

export default NetworkSubpage;
