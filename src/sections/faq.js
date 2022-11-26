/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Button } from 'theme-ui';
import Masonry from 'react-masonry-component';
import SectionHeading from 'components/section-heading';
import FaqItem from 'components/cards/faq-item';

const data = [
  {
    id: 1,
    ques: "Who are we?",
    ans: `Sales consulting services are Ghala Kuu's area of expertise. How to increase more online and offline leads using growth hacking, optimization services, A/B testing, and other methods. We will approach your company from an outsider's perspective and assist you realize how to adopt a novel new perspective.`,
  },
  {
    id: 2,
    ques: "What is Ghala Kuu App?",
    ans: `A field sales force automation tool Ghala Kuu App is created for FMCG firms, sales managers, distributors, and manufacturers with field staff who wish to automate their field sales process. This field sales force software has capabilities like GPS-based employee position monitoring, order automation, distributor administration, beat planning, attendance and leave management that may be quite helpful for managing the field sales team.`,
  },
  {
    id: 3,
    ques: "Why are companies interested in Ghala Kuu App?",
    ans: `In addition to ensuring the productivity of sales representatives, the Ghala Kuu APP offers a variety of other advantages to a business, such as assisting the brand in understanding its retail market for segment-specific action and saving the sales representative's travel time, which could be used for more fruitful store visits. Additionally, it enables tracking of in-store visual merchandising and boosts sales through order suggestion. The few advantages listed above amply demonstrate the Sales Automation App's influence on the FMCG industry.`,
  },
  {
    id: 4,
    ques: "How much will Ghala Kuu Software Cost?",
    ans: `It is affordable as it is tailored depending on specific business need`,
  },
  // {
  //   id: 5,
  //   ques: "How do I upgrade the storage capacity of my hosting plan?",
  //   ans: `Stop your viewers from getting distracted. Publish videos to your own Channel and rest easy knowing viewers won’t be annoyed by ads or pulled down a rabbit hole of unrelated videos.`,
  // },
  // {
  //   id: 6,
  //   ques: "What is in InMotion Hosting’s uptime rate?",
  //   ans: `Designed with beginners in mind and packed with advanced features developers will love. Start with a quick and simple install`,
  // },
  // {
  //   id: 7,
  //   ques: "Learn from community on Brandwagon",
  //   ans: `Brian Halligan knows that you need more than a great product to have a great brand. Hear his thoughts & score a peek at our wagon.`,
  // },
];

const masonryOptions = { originTop: true };

const Faq = () => {
  return (
    <section id="faq" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={{ mb: [8, null, null, 15] }}
          description="Get yours question answer"
          title="See what is your Frequently question"
        />
        <Masonry options={masonryOptions} sx={styles.grid}>
          {data.map((item) => {
            return <FaqItem key={item.id} faq={item} className="faq-item" />;
          })}
        </Masonry>
        <Box sx={styles.loadMore}>
          <Button variant="text">Still Question? Contact us</Button>
        </Box>
      </Container>
    </section>
  );
};

export default Faq;

const styles = {
  section: {
    pt: [6, null, null, null, 10, 14],
    pb: [10, null, null, 7, null, 14, 17],
  },
  grid: {
    mx: [null, null, null, -6, -8, 'unset'],
  },
  loadMore: {
    paddingTop: [null, null, null, 3],
    textAlign: 'center',
    button: {
      backgroundColor: '#ECF2F7',
      color: '#738295',
      minHeight: 50,
      px: '22px',
      ':hover': {
        backgroundColor: 'primary',
        color: 'white',
      },
    },
  },
};
