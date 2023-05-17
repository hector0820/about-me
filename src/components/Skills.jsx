import SkillsTabs from "./Tabs";

function Skills() {
  return(
    <div id="skills" className="max-md:my-8 lg:mx-10 my-4 scroll-mt-20">
      <h2 className="uppercase text-center max-w-[85%] mx-auto">Skills</h2>
      <hr className="w-[85%] mx-auto"/>
      <div className="w-[85%] mx-auto">
        <h3 className="uppercase text-blue-400">Soft Skills</h3>
        <ul className="capitalize pl-4 list-image-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNCAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjMzhiZGY4Ij48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy42ODUuMTUzYS43NTIuNzUyIDAgMCAxIC4xNDMgMS4wNTJsLTggMTAuNWEuNzUuNzUgMCAwIDEtMS4xMjcuMDc1bC00LjUtNC41YS43NS43NSAwIDAgMSAxLjA2LTEuMDZsMy44OTQgMy44OTMgNy40OC05LjgxN2EuNzUuNzUgMCAwIDEgMS4wNS0uMTQzWiIgLz48L3N2Zz4=')]">
          <li>fast learner</li>
          <li>committed to the projects</li>
          <li>analytical thinking</li>
          <li>I look for solutions</li>
          <li>I am skilled at working in a team</li>
        </ul>
      </div>
      <div className="w-[85%] mx-auto">
      <h3 className="uppercase text-blue-400">Hard Skills</h3>
        <ul className="capitalize pl-4 list-image-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNCAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjMzhiZGY4Ij48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy42ODUuMTUzYS43NTIuNzUyIDAgMCAxIC4xNDMgMS4wNTJsLTggMTAuNWEuNzUuNzUgMCAwIDEtMS4xMjcuMDc1bC00LjUtNC41YS43NS43NSAwIDAgMSAxLjA2LTEuMDZsMy44OTQgMy44OTMgNy40OC05LjgxN2EuNzUuNzUgMCAwIDEgMS4wNS0uMTQzWiIgLz48L3N2Zz4=')]">
          <li>Web Development</li>
          <li>Python Programming</li>
          <li>Hosting Personal Web Service</li>
          <li>Data Analysis</li>
          <li>Statistical Inference to make decisions</li>
        </ul>
        <hr className="w-[85%] mx-auto"/>
      <div className="mx-auto">
      <h3 className="uppercase text-blue-400 mt-4">Programming Examples</h3>
        <SkillsTabs />
      </div>
      </div>
    </div>
  );
}

export default Skills