import HankoStarterDashboard from "@/hanko starter components/HankoStarterDashboard";
import HankoStarterHeader from "@/hanko starter components/HankoStarterHeader";
import HankoStarterInfo from "@/hanko starter components/HankoStarterInfo";

export default function Dashboard() {
  return (
    <div>
      <HankoStarterInfo/>
      <HankoStarterHeader/>
      <HankoStarterDashboard/>
    </div>
  );
}
