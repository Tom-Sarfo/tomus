import { Button, Stack } from "@mui/material";
import { WithSeeMore } from "react-insta-stories";
import Ayode from "../public/Ayode.jpg";

export const storiesArray = [
  {
    story: [
      {
        content: ({ action, story }) => {
          return (
            <WithSeeMore story={story} action={action}>
              <div style={contentStyle}>
                <img className="storyImage" src={Ayode} />
              </div>
            </WithSeeMore>
          );
        },
        seeMoreCollapsed: ({ toggleMore, action }) => (
          <center>
            <Button
              variant="contained"
              onClick={() => toggleMore(true)}
              sx={{
                position: "relative",
                zIndex: 10,
                marginTop: "-200px",
                textTransform: "capitalize",
                backgroundColor: "#8531ab",
              }}
            >
              view product
            </Button>
          </center>
        ),
        seeMore: ({ close }) => (
          <div
            style={{
              maxWidth: "100%",
              height: "100%",
              padding: 40,
              background: "white",
            }}
          >
            <h2>Proceed to view product details.</h2>
            <Stack direction="row" gap={2}>
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #8531ab",
                  color: "#000000",
                  textTransform: "capitalize",
                }}
                onClick={close}
              >
                Close
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#591a76",
                  textTransform: "capitalize",
                  color: "#ffffff",
                  "&:hover": {
                    color: "#ffffff",
                  },
                }}
                href="https://tomuswear.company.site/products/"
              >
                View details
              </Button>
            </Stack>
          </div>
        ),
        duration: 5000,
      },
      {
        content: ({ action, story }) => {
          return (
            <WithSeeMore story={story} action={action}>
              <div style={contentStyle}>
                <img className="storyImage" src={Ayode} />
              </div>
            </WithSeeMore>
          );
        },
        seeMoreCollapsed: ({ toggleMore, action }) => (
          <center>
            <Button
              variant="contained"
              onClick={() => toggleMore(true)}
              sx={{
                position: "relative",
                zIndex: 10,
                marginTop: "-200px",
                textTransform: "capitalize",
                backgroundColor: "#8531ab",
              }}
            >
              view product
            </Button>
          </center>
        ),
        seeMore: ({ close }) => (
          <div
            style={{
              maxWidth: "100%",
              height: "100%",
              padding: 40,
              background: "white",
            }}
          >
            <h2>Proceed to view product details.</h2>
            <Stack direction="row" gap={2}>
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #8531ab",
                  color: "#000000",
                  textTransform: "capitalize",
                }}
                onClick={close}
              >
                Close
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#591a76",
                  textTransform: "capitalize",
                  color: "#ffffff",
                  "&:hover": {
                    color: "#ffffff",
                  },
                }}
                href="https://tomuswear.company.site/products/"
              >
                View details
              </Button>
            </Stack>
          </div>
        ),
        duration: 5000,
      },
    ],
    categoryName: "Birks",
    storyCover:
      "https://res.cloudinary.com/dki2r1gnf/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,q_auto,f_auto/v1724763980/sf7eqmuj9uspigykb8fd.jpg",
  },
  {
    story: [
      {
        content: ({ action, story }) => {
          return (
            <WithSeeMore story={story} action={action}>
              <div style={contentStyle}>
                <img className="storyImage" src={Ayode} />
              </div>
            </WithSeeMore>
          );
        },
        seeMoreCollapsed: ({ toggleMore, action }) => (
          <center>
            <Button
              variant="contained"
              onClick={() => toggleMore(true)}
              sx={{
                position: "relative",
                zIndex: 10,
                marginTop: "-200px",
                textTransform: "capitalize",
                backgroundColor: "#8531ab",
              }}
            >
              view product
            </Button>
          </center>
        ),
        seeMore: ({ close }) => (
          <div
            style={{
              maxWidth: "100%",
              height: "100%",
              padding: 40,
              background: "white",
            }}
          >
            <h2>Proceed to view product details.</h2>
            <Stack direction="row" gap={2}>
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #8531ab",
                  color: "#000000",
                  textTransform: "capitalize",
                }}
                onClick={close}
              >
                Close
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#591a76",
                  textTransform: "capitalize",
                  color: "#ffffff",
                  "&:hover": {
                    color: "#ffffff",
                  },
                }}
                href="https://tomuswear.company.site/products/"
              >
                View details
              </Button>
            </Stack>
          </div>
        ),
        duration: 5000,
      },
    ],
    categoryName: "Beads",
    storyCover:
      "https://d2j6dbq0eux0bg.cloudfront.net/images/66306271/4507799781.jpg",
  },
  {
    story: [
      {
        content: ({ action, story }) => {
          return (
            <WithSeeMore story={story} action={action}>
              <div style={contentStyle}>
                <img className="storyImage" src={Ayode} />
              </div>
            </WithSeeMore>
          );
        },
        seeMoreCollapsed: ({ toggleMore, action }) => (
          <center>
            <Button
              variant="contained"
              onClick={() => toggleMore(true)}
              sx={{
                position: "relative",
                zIndex: 10,
                marginTop: "-200px",
                textTransform: "capitalize",
                backgroundColor: "#8531ab",
              }}
            >
              view product
            </Button>
          </center>
        ),
        seeMore: ({ close }) => (
          <div
            style={{
              maxWidth: "100%",
              height: "100%",
              padding: 40,
              background: "white",
            }}
          >
            <h2>Proceed to view product details.</h2>
            <Stack direction="row" gap={2}>
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #8531ab",
                  color: "#000000",
                  textTransform: "capitalize",
                }}
                onClick={close}
              >
                Close
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#591a76",
                  textTransform: "capitalize",
                  color: "#ffffff",
                  "&:hover": {
                    color: "#ffffff",
                  },
                }}
                href="https://tomuswear.company.site/products/"
              >
                View details
              </Button>
            </Stack>
          </div>
        ),
        duration: 5000,
      },
    ],
    categoryName: "Kaftan Slippers",
    storyCover:
      "https://d2j6dbq0eux0bg.cloudfront.net/images/66306271/4507502323.webp",
  },
];

const contentStyle = {
  // background: "#d583fb",
  background: "#d9d9d9",

  width: "100%",
  height: "100vh",
  padding: 20,
  color: "white",
};
