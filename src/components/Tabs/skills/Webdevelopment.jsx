import Fold from "../../Fold";

function WebDevelopment() {
    return(
        <>
        <div className='overflow-auto w-[90%] mx-auto h-96'>
            <p className='text-justify'>Skilled web developer with a strong focus on
            <span className='font-bold'> Hugo</span>,
            <span className='font-bold'> HTML</span>, 
            <span className='font-bold'> CSS</span>,
            <span className='font-bold'> React</span> and 
            <span className='font-bold'> Bootstrap</span>.
            Well-versed in HTML and CSS to structure and design visually appealing web pages. Experienced in 
            leveraging React, a popular JavaScript library, to build dynamic and interactive 
            user interfaces. Proficient in utilizing Bootstrap, a CSS framework, to enhance 
            responsiveness and create mobile-first designs. Adept at combining these 
            technologies to create modern, efficient, and visually engaging websites and 
            web applications. Committed to delivering exceptional user experiences and 
            staying updated with the latest industry trends and best practices."
            </p>

            <hr/>
            <div>
                <h3 className='mb-4 uppercase text-blue-400'>Portfolio</h3>
            </div>
            <Fold 
                title="andrea sobreira web page"
                text="A website to have online presence, showcasing her work and make announcements"
                inside="https://sobolive.com/"/>
            <Fold 
                title="my personal online spanish course's web page"
                text="My pesonal web page where I talk about me and the spanish course for lusophones"
                inside="https://hector0820.github.io/Websites/Habla-conmigo.xyz/index.html"/>
        </div>
        </>
    );
}

export default WebDevelopment