import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import Link from "@/components/Link";

export default function GIthub() {
  const { data } = useSWR("/api/Github", fetcher);

  const follow = new Number(data?.followers);
  const link = "https://github.com/DemuraAIdev";
  return (
    <div className="transition-all hover:scale-[1.01]">
      <div className="dark:bg-blue-opaque my-4 w-full rounded border border-blue-200 bg-blue-50 p-6  shadow-xl transition dark:border-gray-800 dark:bg-black dark:shadow-none">
        <Link href={link}>GIthub Followers</Link>

        <p className="spacing-sm mt-2 text-3xl font-bold text-black dark:text-white">
          {follow > 0 ? follow.toLocaleString() : "-"}
        </p>
      </div>
    </div>
  );
}
