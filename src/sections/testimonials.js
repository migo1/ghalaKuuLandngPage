/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import Slider from 'react-slick';
import Testimonial from 'components/cards/testimonial';
import author1 from 'assets/images/clients/author.png';
import author2 from 'assets/images/clients/author.png';
import logo1 from 'assets/images/clients/kacha.png';
import logo2 from "assets/images/clients/ghalasoln.png";
import { rgba } from 'polished';

const data = [
  {
    id: 1,
    author: author1,
    logo: logo1,
    text: `
    I am really impressed by the quality of services I received from Ghala Tech Solutions. You were right on schedule, charged reasonable prices, were professional and courteous in dealings,
     and delivered items well before time. I have got an Amazing software for my products and I will definitely use your services again. 
     
    `,
    // My revenue has increased because of Ghala Tech
    authorName: "Charles",
    designation: " President kacha animal health",
  },
  {
    id: 2,
    author: author2,
    logo: logo2,
    text: `
    sales automation helped us streamline our sales processes and has saved us a significant amount of time ability to automate repetitive tasks such as sending follow-up emails and scheduling appointments.
     This has allowed us to focus on more high-level tasks and has increased our productivity.
      
    `,
    // My revenue has increased because of Ghala Tech
    authorName: "Christine Anjuri",
    designation: " Ghala Solutions",
  },
  // {
  //   id: 3,
  //   author: author1,
  //   logo: logo1,
  //   text: `Just complete the project. Always clear explanation. In the beginning you will be taught how to deal with this amazing talented people.`,
  //   authorName: "Karolin Astaize",
  //   designation: "Vice President - Talent & Acquisition",
  // },
  // {
  //   id: 4,
  //   author: author2,
  //   logo: logo2,
  //   text: `Just complete the project. Always clear explanation. In the beginning you will be taught how to deal with this amazing talented people.`,
  //   authorName: "Karolin Astaize",
  //   designation: "Vice President - Talent & Acquisition",
  // },
];

const settings = {
  arrows: false,
  dots: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Testimonials = () => {
  return (
    <section id="testimonials" sx={styles.section}>
      <Container>
        <Slider sx={styles.slider} {...settings}>
          {data.map((testimonial) => (
            <Testimonial key={testimonial.id} data={testimonial} />
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default Testimonials;

const styles = {
  section: {
    pt: [12, null, null, null, 10, 14],
    pb: [8, null, null, null, 10, 14],
  },
  slider: {
    '.slick-list': {
      // mx: [null, null, null, null, -2, 0],
    },
    '.slick-slide': {
      // mr: [null, null, null, null, 4, 0],
    },
    '.slick-dots': {
      display: 'flex !important',
      margin: 0,
      padding: 0,
      listStyle: 'none',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: [3, null, null, 13],
      li: {
        mx: 1,
        display: 'flex',
      },
      button: {
        backgroundColor: rgba('#2D3D50', 0.15),
        borderRadius: 50,
        border: 0,
        cursor: 'pointer',
        padding: 0,
        overflow: 'hidden',
        textIndent: '-9999em',
        width: 10,
        height: 6,
        outline: 0,
        transition: 'all 0.3s ease-in-out 0s',
      },
      '.slick-active button': {
        backgroundColor: rgba('#2D3D50', 0.4),
        width: 20,
      },
    },
  },
};
