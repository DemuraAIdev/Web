import fetcher from '@/lib/fetcher'
import useSWR from 'swr'
import NowPlaying from '@/components/nplaying'
export default function CardSpotify() {
  const { data } = useSWR('/api/now-playing', fetcher)
  return (
    <div
      className="d mt-8 transform  animate-text 
            bg-gradient-to-r from-[#6EE7B7]  via-[#3B82F6] to-[#9333EA] pb-[3px] transition-all"
    >
      <div className=" bg-white p-5 text-center transition dark:bg-black">
        <NowPlaying />
      </div>
    </div>
  )
}
