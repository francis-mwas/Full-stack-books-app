import Layout from "../../Layout";
import ReusableBoxComponent from "../../components/utils/ReusableBox";
import ComingSoon from "../../components/utils/ComingSoon";

const SciencesBooks = () =>{
    return (
        <Layout>
            <ReusableBoxComponent>
                <ComingSoon message="These books will be available soon. Stay tuned!" />
            </ReusableBoxComponent>
        </Layout>
    )
}

export default SciencesBooks;