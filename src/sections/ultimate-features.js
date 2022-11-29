/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Feature from 'components/cards/feature';

import icon1 from 'assets/images/icons/1.png';
import icon2 from 'assets/images/icons/2.png';
import icon3 from 'assets/images/icons/3.png';
import icon4 from "assets/images/icons/4.png";
import icon5 from 'assets/images/icons/5.png';
import icon6 from "assets/images/icons/6.png";

const data = [
  {
    id: 1,
    icon: icon1,
    title: "Retailer Profiling for Personalized Engagements",
    description: `Sales Automation App that allows FMCG firms to create a thorough profile of each client, illuminating everything from purchase history to order volume to the real sales potential of the shops.  Furthermore, it ensures a smooth customer information 
    gathering process that is supported by a crisp profile enrichment process that adheres to proper data hygiene.`,
  },
  {
    id: 2,
    icon: icon2,
    title: "Route Optimization for Efficient Market Coverage",
    description: `This feature aids in determining the most economical path for sales representatives to cover their region. Route optimization software determines the quantity of resources needed to cover all routes in a streamlined manner for more face time than journey time,this will
    help a business in creating routes that take into account a range of variables, including availability, proximity, and distance, as well as the sales potential of each store.
  `,
    //  as well as the logistically most effective approach to cover retailers in a territory. ensuring that sales representatives can visit the
    //  most stores possible while getting enough face time with the retailers on a given day. Route optimization aids businesses in creating
    //   routes that take into account a range of variables,
    // including availability, proximity, and distance, as well as the sales potential of each store.
  },
  {
    id: 3,
    icon: icon3,
    title: "Gamification for Improved Sales Behavior",
    description: `boosts employee engagement and making the typically dull and task-focused job of selling interesting. Through leaderboard exposure, it encourages healthy rivalry within a team, allowing low-performing sales people to compare themselves to high-performing sales reps and boost their productivity.
`,

    //     Regardless matter how effectively a corporation uses workflow automation technologies to address its business process-specific issues, uneven performance and misaligned team member activities result in significant daily revenue loss. In any team, 30% of members in the same region consistently reach their goals while others don't. There is a significant opportunity for
    //  about 40% of people to increase their output by 15% to 20%.
  },
  {
    id: 4,
    icon: icon4,
    title: "Order Maximization for Increased Sales",
    description: `Gauto-suggestion of SKUs & their amounts considerably cuts down on the time needed to enter orders from merchants. 
    Order maximization through sales automation enables FMCG firms to boost sales by cross-selling, up-selling, and the promotion of loyalty programs, schemes, and order suggestions, all of which are frequently overlooked by a portion of sales executives at the 
     `,
    // Thus, the order maximization technique is essential for giving sales an extra boost through precise targeting. In order to guarantee efficient order maximization without backlogs,
    //  inventory and order returns are also managed.
  },
  {
    id: 5,
    icon: icon5,
    title: "Track Merchant Activities",
    description: `Business executives may monitor the orders placed by their merchants, prior order history, and whether or not their merchandising investments and schemes are yielding returns using the Ghala Kuu App. This assists the sales management in strategically planning the sales representatives' visits and driving up sales to merchants.
     `,
    // As a result, they can better plan their overall sales and marketing engagement at the point of sale. It also provides them with insight into retailer behavior, such as which retailers prefer high-value products, which retailers are showing downward sales trends, which retailers are likely to go for upselling,
    //  which retailers would appreciate more frequent visits, etc.
  },
  {
    id: 6,
    icon: icon6,
    title: "Solve Problems in Field via Automated Analytics",
    description: `On a daily basis, field sales managers rarely have time to go through charts and dashboards. Without actual insight to work on, they end up acting like just supervisors marking attendance and daily tasks performed by their sales reps.`,
  },
];

const UltimateFeatures = () => {
  return (
    <section sx={styles.section} id="services">
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Go beyond ultimate Services"
          description="Ideal solutions for you"
        />
        <Box sx={styles.features}>
          {data?.map((item) => (
            <Feature key={item.id} className="feature-item" data={item} />
          ))}
        </Box>
      </Container>
    </section>
  );
};

export default UltimateFeatures;

const styles = {
  section: {
    pt: [12],
    pb: [6, null, null, 8, 15],
  },
  heading: {
    marginBottom: [40, 50, 60, 80],
    maxWidth: ['none', null, null, 565, null, 'none'],
  },
  features: {
    gap: [6, null, null, '90px 40px'],
    display: ['grid'],
    maxWidth: 1175,
    mx: 'auto',
    justifyContent: ['center', null, null, 'unset'],
    gridTemplateColumns: [
      'repeat(1, 300px)',
      null,
      null,
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
    ],
  },
};
