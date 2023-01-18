import GIthub from "./GIthub";
import GIthubFoll from "./GIthubFoll";

export default function Index() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <GIthub />
      <GIthubFoll />
    </div>
  );
}
