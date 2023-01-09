/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Flex, Container } from "theme-ui";
import SectionHeading from "components/section-heading";
import Image from "components/image";
import delivery from "assets/images/delivery.png";

const Security = () => {
  return (
    <section sx={styles.section} id="features">
      <Container>
        <Box sx={styles.grid}>
          <Flex sx={styles.illustration}>
            <Image src={delivery} alt="delivery" />
          </Flex>
          <SectionHeading
            sx={styles.heading}
            title="Top-notch Delivery System "
            description="
            With a fleet of well-maintained vehicles and a team of experienced drivers, we are able to handle a wide range of delivery needs. From small package delivery to large 
            freight transport, we have the resources and expertise to get your items to their destination safely and on time."
            // learnMore="Secure data storage"
          />
        </Box>
      </Container>
    </section>
  );
};

export default Security;

const styles = {
  section: {
    pt: [6, null, null, null, 10, 14],
    pb: [6, null, null, 8, 10, 11],
  },
  grid: {
    display: ["flex", null, null, "grid"],
    alignItems: "center",
    gap: [null, null, null, 6, 14],
    flexDirection: ["column-reverse", null, null, "unset"],
    gridTemplateColumns: ["1fr", null, null, "repeat(2, 1fr)", "1fr 470px"],
  },
  heading: {
    textAlign: ["center", null, null, "left"],
    h3: {
      fontSize: [3, null, null, 8, 11],
      lineHeight: 1.53,
    },
  },
  illustration: {
    alignItems: "center",
    mt: [8, null, 0],
  },
};
