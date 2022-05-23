import Image from 'next/image'

function MediumCard ({url, img, title}) {
  return (
    <a href={url} target="_blank">
      <div className="cursor-pointer transform">
        <div className="relative h-60 w-60">
          <Image 
            src={img}
            layout="fill"
            className="rounded-2xl"
          />
        </div>
        <h3 className="text-lg text-center mt-1">
          {title}
        </h3>
      </div>
    </a>
  )
}

export default MediumCard