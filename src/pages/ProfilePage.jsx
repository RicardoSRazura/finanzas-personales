import Sidebar from "../components/Sidebar";
import HomePage from "../pages/HomePage";

function ProfilePage() {

    return (
        <div className="container w-full flex gap-x-6">
            <Sidebar/>
            <div>
                <HomePage/>
            </div>
        </div>

    )
}

export default ProfilePage;