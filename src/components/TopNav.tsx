import { BellAlertIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import profile from "../assets/profile.png"

const TopNav = () => {
    return <>
        {/* for desktop view */}
        <div className="hidden sm:flex h-20 justify-between items-center px-8 w-full ">
            <h1 className="text-3xl font-semibold ">ABC Hotel</h1>
            <div className="flex gap-6">
                <BellAlertIcon className="w-9" />
                <img src={profile} className='h-10 w-10 rounded-full' alt="profile" />
            </div>
        </div>
        {/* for mobile view */}
        <div className="sm:hidden flex h-20 justify-between items-center px-8 w-full">
            <h1 className="text-xl font-semibold ">Task Of the Day</h1>
            <div className="flex gap-6">
                <MagnifyingGlassIcon className="w-8" />
                <BellAlertIcon className="w-8" />
                <img src={profile} className='h-10 w-10 rounded-full' alt="profile" />
            </div>
        </div>
    </>

}

export default TopNav