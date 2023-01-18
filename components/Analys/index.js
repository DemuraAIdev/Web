import GIthub from "./GIthub";
import GIthubFoll from "./GIthubFoll";

export default function Index() {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 ">
      <GIthub />
      <GIthubFoll />
    </div>
  );
}
