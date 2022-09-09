/* eslint-disable prettier/prettier */
export default function notif() {
  return (
    <div className="text-center">
      <div
        className="inline-flex items-center rounded-full bg-indigo-800 p-2 leading-none text-indigo-100"
        role="alert"
      >
        <span className="mr-3 flex rounded-full bg-indigo-500 px-2 py-1 text-xs font-bold uppercase">
          Update
        </span>
        <span className="mr-2 flex-auto text-left font-semibold">Website Update 2.0 🎉</span>
      </div>
    </div>
  )
}
