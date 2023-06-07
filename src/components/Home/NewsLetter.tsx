const NewsLetter = () => {
  return (
    <div
      className="min-h-[530px]
        bg-[url(https://foodhub.modeltheme.com/wp-content/uploads/2020/02/call-to-action-v2.jpg?id=20778)] 
        bg-no-repeat
        bg-cover
        relative
        w-full
        top-0
        bg-center
        z-10
        flex
        items-center
        justify-self-start"
    >
      <div
        className="base:pl-6 lg:pl-[156.5px] base:pr-6 lg:pr-[156.5px]"
        data-aos="fade-up"
        data-aos-offset="400"
        data-aos-easing="ease-in-sine"
      >
        <h1 className="font-secondary text-white  base:text-[30px] md:text-[40px]  font-bold leading-10 mb-4">
          Subscribe to our Newsletter
        </h1>
        <p className="text-white font-normal md:text-[20px] base:text-[18px]">
          Learn how to make your favorite restaurant’s dishes
        </p>
        <button className="rounded-[40px] px-6 py-3 bg-gray-200 hover:bg-gray-300 duration-300 font-bold mt-4">
          SUBSCRIBE
        </button>
      </div>
    </div>
  )
}

export default NewsLetter
