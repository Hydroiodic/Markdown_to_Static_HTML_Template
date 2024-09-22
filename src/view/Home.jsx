import Post from "../components/home/Post";
import Footer from "../components/common/Footer";
import TutorialMarkdown from "../markdown/tutorial.md";

function Home() {
    return (
        <>
            <div className="flex flex-col w-full h-full text-center p-8 gap-6 items-center">
                <div className="flex flex-col w-full gap-16 lg-max:gap-8 items-center">
                    <Post content={TutorialMarkdown} title="tutorial" />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;
