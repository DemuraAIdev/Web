import GIthub from "./GIthub";

export default function Index() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <GIthub />
      <div className="dark:bg-blue-opaque my-4 w-full rounded border border-blue-200 bg-blue-50 p-6  shadow-xl transition dark:border-gray-800 dark:bg-black dark:shadow-none">
        TEST
      </div>
    </div>
  );
}
