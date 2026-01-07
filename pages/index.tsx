import type {NextPage} from 'next';
import {Nav} from '../components/navbar/navbar';
import {Layout} from '../components/navbar/layout';
import {Hero} from '../components/hero';
import {Trusted} from '../components/trusted';
import {Results} from '../components/results';
import {Features1} from '../components/features1';
import {HowItWorks} from '../components/howitworks';
import {CaseStudy} from '../components/casestudy';
import {Testimonials} from '../components/testimonials';
import {Box} from '../components/styles/box';
import {Plans} from '../components/plans';
import {ReelsShowcase} from '../components/reels';
import {Trial} from '../components/trial';
import {Footer} from '../components/footer';

const Home: NextPage = () => {
   return (
      <Layout>
         <Nav />
         <Box as="main">
            <Hero />
            <Trusted />
            <Results />
            <Features1 />
            <HowItWorks />
            <CaseStudy />
            <Testimonials />
            <ReelsShowcase />
            <Plans />
            <Trial />
            <Footer />
         </Box>
      </Layout>
   );
};

export default Home;
