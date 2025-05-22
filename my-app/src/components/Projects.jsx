const Projects = () =>(
<section className="container p-10 bg-grep-100 text-center" id="projects">
    <div className="box">
        <h2 className="text-3xl font-bold mb-4">
            Projects
        </h2>
    <div className="grid gap-4 sm:grid-cols-2">
        {/* Project-1 */}
        <div className="p-4 bg white shadow rounded">
            <h3 className="font-semibold">Project-1</h3>
            <p>Ecommerce Flipkart does online shopping & delivery of products</p>
        </div>

        {/* Project-2 */}
        <div className="p-4 bg white shadow rounded">
            <h3 className="font-semibold">Project-2</h3>
            <p>e-Library does online issuing and reloading books</p>
        </div>

        {/* Project-3 */}
        <div className="p-4 bg white shadow rounded">
            <h3 className="font-semibold">Project-3</h3>
            <p>Petstore does online adoption or donate pets.</p>
        </div>
    </div>

    </div>
</section>
)

export default Projects;