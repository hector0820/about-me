function Me(props) {
    return(
        <div className="w-[100%] md:bg-blue-300 grid max-md:grid-cols-1 md:grid-cols-5 gap-4">
          <div className="max-md:col-span-1 md:col-span-3 grid place-content-center max-md:order-2 max-md:mx-6 max-md:mt-3 md:m-8 tracking-wide leading-6">
            <h2 className="max-md:hidden">Hello, so good to see you here!</h2>
            <p className="max-md:text-justify">I'm a economist graduated by the <span className='uppercase'>uam</span> 
            <em> (Universidad Autónoma Metropolitana)</em>,
            and enthusiastic of data analysis and programming.
            I firmly believe in the power of data-driven insights
            and technology to drive informed decision-making.
            </p>
          </div>
            <div className="md:col-start-4 md:col-span-2 max-md:order-1">
              <div className="h-[95%]">
                <img src={ props.img } alt="" />
              </div>
            </div>
        </div>
    );
}

export default Me