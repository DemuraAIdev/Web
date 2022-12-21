import Image from "./Image";
import Link from "./Link";

const Card = ({ title, description, imgSrc, href }) => (
  <div className="md p-4 md:w-1/2" style={{ maxWidth: "544px" }}>
    <div
      className={`${
        imgSrc && "h-full"
      }  transform overflow-hidden rounded-md bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] p-[6px] shadow-xl transition-all hover:scale-[1.01]  dark:shadow-none`}
    >
      <div className="flex h-full flex-col justify-between rounded-lg bg-white transition-colors duration-1000 dark:bg-black ">
        {imgSrc &&
          (href ? (
            <Link href={href} aria-label={`Link to ${title}`} showIcon={false}>
              <Image
                alt={title}
                src={imgSrc}
                className="object-cover object-center md:h-36 lg:h-48"
                width={544}
                height={306}
              />
            </Link>
          ) : (
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          ))}
        <div className="p-6">
          <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
            {href ? (
              <Link
                href={href}
                showIcon={false}
                aria-label={`Link to ${title}`}
              >
                {title}
              </Link>
            ) : (
              title
            )}
          </h2>
          <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">
            {description}
          </p>
          {href && (
            <Link
              href={href}
              showIcon={false}
              className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label={`Link to ${title}`}
            >
              Learn more &rarr;
            </Link>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default Card;
