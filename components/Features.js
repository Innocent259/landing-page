import Image from "next/image"

const Features = () => {
  return (
    <div>
      <div className="bg-white flex flex-col gap-6 shadow-gradient">
        <div className="h-[234px] flex flex-col justify-between backdrop-blur-2xl">
          <div className="flex flex-col gap-4">
            <div className="h-7 mt-10 bg-[#F3F3F3]" />
            <div className="relative h-14">
              <Image
                src="/Rectangle-295.png"
                alt="Rectangle 295"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="h-7 bg-[#F3F3F3]" />
          </div>
        </div>
        <span className="flex flex-col gap-2 text-[#363636]">
          <h1 className="ml-1 font-semibold text-base">1. Click Capture</h1>
          <p className="text-opacity-55">
            Once you install the Chrome extension, fire it up, and click
            “Capture”.
          </p>
        </span>
      </div>
      <div>
        <div>
          <span>Cursor</span>
          <div></div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Features
