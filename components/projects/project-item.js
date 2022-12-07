import Image from "next/image";

export default function ProjectItem({data}){

    const title = data.properties.이름.title[0].plain_text
    const github = data.properties.Github.url
    const notion = data.properties.Notion.url
    const description = data.properties.설명.rich_text[0].plain_text
    const imgSrc = data.cover.file?.url || data.cover.external.url
    const tags = data.properties.태그.multi_select
    const start = data.properties.작업기간.date.start
    const end = data.properties.작업기간.date.end

    const calculatedPeriod = (start, end) => {
        const startDateStringArray = start.split('-');
        const endDateStringArray = end.split('-');

        var startDate = new Date(startDateStringArray[0], startDateStringArray[1], startDateStringArray[2]);
        var endDate = new Date(endDateStringArray[0], endDateStringArray[1], endDateStringArray[2]);

        console.log(`startDate: ${startDate}`)
        console.log(`endDate: ${endDate}`)

        const diffInMs = Math.abs(endDate - startDate);
        const result = diffInMs / (1000 * 60 * 60 * 24);

        console.log(`기간 : ${result}`)
        return result;
    };

    return (
        <div className="project-card">
            <div style={{width: '100%', height: '100%', position: 'relative'}}>
                <Image
                    className="rounded-t-xl"
                    src={imgSrc}
                    alt="cover image"
                    width="100"
                    height="60"
                    layout="responsive"
                    objectFit="cover"
                    quality={100}
                />
            </div>

            <div className="p-4 flex flex-col">
                <h1 className="text-2xl font-bold">{title}</h1>
                <h3 className="mt-4 text-xl">{description}</h3>
                <p className="my-1 ">
                    작업기간 : {start} ~ {end} ({calculatedPeriod(start, end)}일)
                </p>
                <p> 사용 스킬</p>
                <div className="flex items-start">
                    {tags.map((aTag) => (
                        <h1 className="px-2 py-1 mr-2 rounded-md bg-indigo-200 dark:bg-indigo-700 w-30" key={aTag.id}>{aTag.name}</h1>
                    ))}
                </div>
                <div className="flex  mt-4">
                <a className="btn-projects" href={github}>Github 바로가기</a>
                <a className="btn-projects ml-2" href={notion}>Notion 바로가기</a>
                </div>
            </div>

        </div>
    );
}