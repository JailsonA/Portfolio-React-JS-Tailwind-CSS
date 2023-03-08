import React, {useEffect, useState} from 'react'

// import projects data
import {projectsData} from '../data'

// import projects nav data
import {projectsNav} from '../data' 

// import components
import Project from './Project'

const Projects = () => {
    const [item, setItem] = useState({name: 'all'});
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    /* filter by cat */
    useEffect(() => {
        //get projets base on item
        if (item.name === 'all') {
            setProjects(projectsData)
        }else{
            const newProjects = projectsData.filter(
                (project) => {
                    return project.category.toLowerCase() === item.name;
                });
                setProjects(newProjects);
                
        }
    }, [item]);
    
    const handleClick = (e, index) => {
        setItem({name: e.target.textContent.toLowerCase()});
        setActive(index);
        console.log(index);
    }

  return (
    <div>
      {/* nav */}
      <nav className='mb-12 max-w-xl mx-auto '>
        <ul className='flex flex-col md:flex-row justify-evenly items-center text-white'>
            {   
                projectsNav.map((item, index) =>{
                    return <li onClick={(e) => {handleClick(e, index)}} key={index} className={`${active === index ? 'active' : ''} cursor-pointer capitalize m-4`}>{item.name}</li>
                })
            }
        </ul>
      </nav>
      {/* Projets grid */}
      <section className='grid lg:grid-cols-3 gap-y-12 lg:gap-x-8 lg:gap-y-8' >
        {
            projects.map((item) => {
                return <Project item={item} key={item.id}/>
            })
        }
      </section>
    </div>
  )
}

export default Projects
