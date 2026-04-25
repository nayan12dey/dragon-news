
import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSidebar = () => {
    return (
        <div className="space-y-2">
            <h2 className="font-bold text-lg">Login With</h2>
            <div className="flex flex-col gap-2">
                <button className="btn flex items-center border-2 border-blue-400 text-blue-500"><FaGoogle />Login with google</button>
                <button className="btn btns flex items-center"><FaGithub />Login with github</button>
            </div>
        </div>
    );
};

export default RightSidebar;