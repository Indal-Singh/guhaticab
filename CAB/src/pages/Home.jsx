import Adventure from "../components/Adventure";
import Explore from "../components/Explore";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Popular from "../components/Popular";

const Home = () => {
    return (
         <Layout>
            <Hero/>
            <Explore/>
            <Adventure/>
            <Popular/>
            </Layout>
            
         );
}

export default Home;