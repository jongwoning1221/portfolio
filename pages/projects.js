import Layout from "../components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "../config";
import ProjectItem from "../components/projects/project-item";

export default function Projects({projects}) {

    console.log(projects);

    return (
        <Layout>
            <div className="flex items-center justify-center">
                <div className="flex flex-col items-center min-h-screen mb-10">
                    <Head>
                        <title>김종원 포트폴리오</title>
                        <meta name="description" content="김종원의 포트폴리오" />
                        <link rel="icon" href="/favicon.ico" />
                    </Head>
                    
                    <br/><br/><br/>
                    
                    <h1 className="text-4xl font-bold sm:text-6xl">
                        &lt;Projects /&gt;
                         {/* : <span className="pl-4 text-indigo-500">{projects.results.length}</span> */}
                    </h1>

                    <br/><br/><br/>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 w-9/12">
                        {projects.results.map((aProject) => (
                            <ProjectItem key={aProject.id} data={aProject}/>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

//빌드 타임에 호출
export async function getStaticProps(context) {

    const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Notion-Version': '2022-06-28',
          'content-type': 'application/json',
          Authorization: `Bearer ${TOKEN}`
        },
        body: JSON.stringify({
            sorts: [
                {
                    "property": "작업기간",
                    "direction": "descending"
                }
            ],
            page_size: 100})
      };
      
    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)

    const projects = await res.json()

    const projectNames = projects.results.map((aProject) => (
        aProject.properties.이름.title[0].plain_text
    ))

    console.log(`projectNames : ${projectNames}`);

    return {
      props: {projects}, // will be passed to the page component as props
    }
  }