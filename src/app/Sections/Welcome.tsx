import { Glass } from "@/components/glass";
import { SocialIcon } from "@/components/social_icon";

export const Welcome = () => {
    return (
        <div className='relative w-full flex flex-col items-center'>

            <div className="h-64 w-full overflow-hidden bg-[url(/images/backgrounds/header_dark.png)] bg-bottom bg-cover"></div>

            <div className="inline mt-5 mx-20 lg:mx-0">
                <div className="font-funnel text-2xl text-black dark:text-white -ml-4 mb-1">Hi, I'm</div>
                <div className="font-funnel text-8xl font-semibold text-black dark:text-white -mt-4">Alex Eckardt</div>
            </div>

            <div className="w-11/12 lg:w-7/12 max-w-[1800px] p-5 font-funnel text-lg mt-2 mb-3 text-royal-900 dark:text-royal-400">
                <div className="mb-2">I'm a Software Engineer and a New-Grad Computer Science Student.</div>
                <div className="mb-2">I'm always happy to talk to new people! For any inquires, email <span className='text-royal-700 dark:text-purple-400'>alexeckardt0@gmail.com</span></div>
            </div>
            
            <div className="absolute top-0 right-4">
                <div className="flex gap-2 mt-5">

                    <div className="w-12 h-12 p-2 bg-white/10 hover:bg-white/20 active:bg-black/20 shadow-xl backdrop-blur-[10px] rounded-full">
                        <SocialIcon website="https://github.com/alexeckardt">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="w-8 h-8"
                            >
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.263.793-.587 0-.287-.012-1.237-.018-2.243-3.338.725-4.042-1.613-4.042-1.613-.546-1.387-1.333-1.755-1.333-1.755-1.09-.744.082-.729.082-.729 1.205.087 1.84 1.237 1.84 1.237 1.07 1.832 2.807 1.302 3.492.995.107-.775.42-1.302.763-1.602-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.467-2.382 1.237-3.222-.123-.303-.536-1.523.117-3.176 0 0 1.01-.323 3.3 1.23a11.52 11.52 0 013.003-.403c1.02.005 2.047.137 3.003.403 2.29-1.553 3.3-1.23 3.3-1.23.653 1.653.24 2.873.117 3.176.77.84 1.237 1.912 1.237 3.222 0 4.61-2.807 5.625-5.48 5.92.432.372.817 1.102.817 2.222 0 1.606-.015 2.902-.015 3.293 0 .323.192.705.8.587C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                        </SocialIcon>
                    </div>

                    <div className="w-12 h-12 p-1 bg-white/10 hover:bg-white/20 active:bg-black/20 shadow-xl backdrop-blur-[10px] rounded-full">
                        <SocialIcon website="https://linkedin.com/in/alex-eckardt">
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-10 h-10' viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" /></svg>
                        </SocialIcon>
                    </div>


                    <div className="w-12 h-12 pl-[6px] pt-[6px] bg-white/10 hover:bg-white/20 active:bg-black/20 shadow-xl backdrop-blur-[10px] rounded-full">
                        <SocialIcon website="/Alexander_Eckardt_Website_Resume.pdf">
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-9 h-9' viewBox="0 1 24 24"><path fill="currentColor" fillRule="evenodd" d="M14.25 2.5a.25.25 0 0 0-.25-.25H7A2.75 2.75 0 0 0 4.25 5v14A2.75 2.75 0 0 0 7 21.75h10A2.75 2.75 0 0 0 19.75 19V9.147a.25.25 0 0 0-.25-.25H15a.75.75 0 0 1-.75-.75zm.75 9.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5zm0 4a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5z" clipRule="evenodd" /><path fill="currentColor" d="M15.75 2.824c0-.184.193-.301.336-.186q.182.147.323.342l3.013 4.197c.068.096-.006.22-.124.22H16a.25.25 0 0 1-.25-.25z" /></svg>
                        </SocialIcon>
                    </div>
                </div>
            </div>

        </div>
    )
}