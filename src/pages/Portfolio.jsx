function Portfolio(){
    const projects = [{title: "Project 1", description: "Description for Project 1", fileLink: ""}, 
                     {title: "Project 2", description: "Description for Project 2", fileLink: ""},
                     {title: "Project 3", description: "Description for Project 3", fileLink: ""}
    ]
    return(
        <div>
            <ul>{projects.map((project, index)=>
                                <div key={index} className="project-card">
                                    <div>
                                        {/*image placeholder*/}
                                    </div>
                                    <div>
                                        {project.title}
                                        {project.description}
                                        <button><span><a href={project.fileLink}></a></span></button>
                                    </div>
                                </div>)}</ul>
        </div>
    )
}
export default Portfolio