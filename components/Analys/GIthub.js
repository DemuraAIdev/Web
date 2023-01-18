import useSWR from "swr";
import fetcher from "@/lib/fetcher";

export default function GIthub() {
  const { data } = useSWR("/api/Github", fetcher);

  const stars = new Number(data?.stars);
  const link = "https://github.com/DemuraAIdev";
  return (
    <div>
      <div className="dark:bg-blue-opaque my-4 w-full rounded border border-blue-200 bg-blue-50 p-6  shadow-xl transition dark:border-gray-800 dark:bg-black dark:shadow-none">
        Github Stars
      </div>
      <p className="spacing-sm mt-2 text-3xl font-bold text-black dark:text-white">
        {stars.toLocaleString()}
      </p>
    </div>
  );
}
