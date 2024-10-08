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
                <img
                  className="storyImage"
                  src="https://res.cloudinary.com/dki2r1gnf/image/upload/t_Product-image/v1726568378/sf7eqmuj9uspigykb8fd_Square_category_avqtge_1_1_oltw20.webp"
                />
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
              View Category
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
            <h2>Proceed to view category.</h2>
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
                href="https://tomuswear.company.site/products/leather-birk-slippers"
              >
                Continue
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
                <img className="storyImage" src='https://res.cloudinary.com/dki2r1gnf/image/upload/v1727018035/photo_2024-09-22_15-10-47_zms232.jpg' />
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
              View Category
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
            <h2>Proceed to view category.</h2>
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
                href="https://tomuswear.company.site/products/leather-birk-slippers"
              >
                Continue
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
  // {
  //   story: [
  //     {
  //       content: ({ action, story }) => {
  //         return (
  //           <WithSeeMore story={story} action={action}>
  //             <div style={contentStyle}>
  //               <img className="storyImage" src='https://res.cloudinary.com/dki2r1gnf/image/upload/t_Product-image/v1727018019/photo_2024-09-22_15-11-32_bgycyh.jpg' />
  //             </div>
  //           </WithSeeMore>
  //         );
  //       },
  //       seeMoreCollapsed: ({ toggleMore, action }) => (
  //         <center>
  //           <Button
  //             variant="contained"
  //             onClick={() => toggleMore(true)}
  //             sx={{
  //               position: "relative",
  //               zIndex: 10,
  //               marginTop: "-200px",
  //               textTransform: "capitalize",
  //               backgroundColor: "#8531ab",
  //             }}
  //           >
  //             View Category
  //           </Button>
  //         </center>
  //       ),
  //       seeMore: ({ close }) => (
  //         <div
  //           style={{
  //             maxWidth: "100%",
  //             height: "100%",
  //             padding: 40,
  //             background: "white",
  //           }}
  //         >
  //           <h2>Proceed to view category</h2>
  //           <Stack direction="row" gap={2}>
  //             <Button
  //               variant="outlined"
  //               sx={{
  //                 backgroundColor: "#ffffff",
  //                 border: "1px solid #8531ab",
  //                 color: "#000000",
  //                 textTransform: "capitalize",
  //               }}
  //               onClick={close}
  //             >
  //               Close
  //             </Button>
  //             <Button
  //               variant="contained"
  //               sx={{
  //                 backgroundColor: "#591a76",
  //                 textTransform: "capitalize",
  //                 color: "#ffffff",
  //                 "&:hover": {
  //                   color: "#ffffff",
  //                 },
  //               }}
  //               href="https://tomuswear.company.site/products/beads"
  //             >
  //               Continue
  //             </Button>
  //           </Stack>
  //         </div>
  //       ),
  //       duration: 5000,
  //     },
  //   ],
  //   categoryName: "Beads",
  //   storyCover:
  //     "https://res.cloudinary.com/dki2r1gnf/image/upload/t_Product-image/v1726566689/TOMUS-46_2_xxef2z_1_wbetql.webp",
  // },
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
              View Category
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
            <h2>Proceed to view Category.</h2>
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
                href="https://tomuswear.company.site/products/kaftan-slippers"
              >
                Continue
              </Button>
            </Stack>
          </div>
        ),
        duration: 5000,
      },
    ],
    categoryName: "Kaftan Slippers",
    storyCover:
      "https://res.cloudinary.com/dki2r1gnf/image/upload/t_Product-image/v1726263047/Ayode_fesxbu.jpg",
  },

  {
    story: [
      {
        content: ({ action, story }) => {
          return (
            <WithSeeMore story={story} action={action}>
              <div style={contentStyle}>
                <img className="storyImage" src="https://res.cloudinary.com/dki2r1gnf/image/upload/v1726071153/half-birk-black-main_yr5x3w.jpg" />
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
              View Category
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
            <h2>Proceed to view Category</h2>
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
                href="https://tomuswear.company.site/products/clogs"
              >
                Continue
              </Button>
            </Stack>
          </div>
        ),
        duration: 5000,
      },
    ],
    categoryName: "Clogs",
    storyCover:
      "https://res.cloudinary.com/dki2r1gnf/image/upload/t_Instagram-post/v1726071153/half-birk-black-main_yr5x3w.jpg",
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
