import { WorkExperienceItem } from "@/components/work_experience_line"

export const WorkExperience = () => {
    return (

        <div className='relative w-full flex flex-col items-center'>
            <div className="w-11/12 lg:w-7/12 max-w-[1800px] flex flex-col items-start text-start justify-start p-8 gap-y-4">

                <div className="font-funnel font-semibold text-3xl mb-5 mt-12">Work Experience</div>

                <WorkExperienceItem href={'https://samos.com'} company={"Samos Insurance Solutions"} title={"Software Developer"} iconClass={"w-12 h-12 bg-[url(/images/work/samosinsure_cover.jpg)] bg-cover rounded-xl"} year={2025}>
                    <div className="font-funnel dark:text-royal-300 mb-1">
                        Continuing Part-time during my final year of studying,
                        I redesigned both the front-end and back-end of the quoting benefits platform to make way for large partner deals. Built over many serverless API endpoints with AWS Lambda to reduce latency and introduce new functionality. Additionally, I improved the internal admin system to speed up workflows and introduced an affiliate system to allow for new partnerships and tracking.
                    </div>
                </WorkExperienceItem>

                <WorkExperienceItem href={'https://samos.com'} company={"Samos Insurance Solutions"} title={"Business Data Analyst Intern (Co-op)"} iconClass={"w-12 h-12 bg-[url(/images/work/samosinsure_cover.jpg)] bg-cover rounded-xl"} year={2024}>
                    <div className="font-funnel dark:text-royal-300 mb-1">
                        I built a streamlined Claims Portal with a focus on intuitive user experience. Set up the company's affiliate system using PostgreSQL to manage contacts and referrals. Added new features to the quoting portal and redesigned the customer landing page. Much of this continued into my part-time work after my internship ended.
                    </div>
                </WorkExperienceItem>

                <WorkExperienceItem href={'https://mcmaster.ca'} company={"McMaster University"} title={"Teaching Assistant"} iconClass={"w-12 h-12 bg-[url(/images/work/mcmaster.jpg)] bg-cover rounded-xl"} year={2024}>
                    <div className="font-funnel dark:text-royal-300 mb-1">
                        Taught an Intermediate Third-Year Software Engineering Course (SFWRENG 3XB3) and an Introductory First-Year Python Course (COMPSCI 1MD3).
                    </div>
                </WorkExperienceItem>

                <WorkExperienceItem href={'https://orbitalquantum.com/'} company={"Orbital Quantum"} title={"Operations Lead (Co-op)"} iconClass={"w-12 h-12 bg-[url(/images/work/oquantum.png)] bg-cover rounded-xl"} year={2023}>
                    <div className="font-funnel dark:text-royal-300 mb-1">
                        Honed Backend Software Development skills while learning the fundamentals of startup business systems and operations.
                    </div>
                </WorkExperienceItem>

                <WorkExperienceItem href={'https://www.yarowa.com/english/home/'} company={"Yarowa"} title={"Junior Software Developer (Co-op)"} iconClass={"w-12 h-12 bg-[url(/images/work/jarowa_logo.jpg)] bg-cover rounded-xl"} year={2022}>
                    <div className="font-funnel dark:text-royal-300 mb-1">
                        Backend Software Development for the pre-processing of client data for Machine Learning Applications using Microsoft Azure. Created an internal use company chatbot to handle the provisioning of development environments and other common tasks.
                    </div>
                </WorkExperienceItem>

            </div>
        </div>
    )
}