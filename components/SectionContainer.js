export default function SectionContainer({ children }) {
  return (
    <div className="mx-auto flex max-w-sm flex-col gap-10 px-4 sm:gap-14 sm:px-6 md:max-w-2xl md:px-0 xl:w-screen xl:max-w-2xl xl:px-0">
      {children}
    </div>
  )
}
