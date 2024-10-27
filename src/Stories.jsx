// import { Button, Stack } from "@mui/material";
import { WithSeeMore } from "react-insta-stories";
// import Ayode from "../public/Ayode.jpg";
import TestimonialCard from "./Components/TestimonialCard";
import { Typography } from "@mui/material";

const cardText1 =
  "It's actually the best made in Ghana footwear... It's really designed for all weather conditions. I really love how it looks like whenever i wear it... Kudos to your team for doing a great job.";

export const storiesArray = [
  {
    story: [
      {
        content: ({ action, story }) => {
          return (
            <WithSeeMore story={story} action={action}>
              <div style={contentStyle}>
                <div className="storyImage">
                  <video width="100%" height="640" autoPlay loop>
                    <source
                      src="https://res.cloudinary.com/dki2r1gnf/video/upload/v1730039273/IMG_1004_z5tiec.mp4"
                      type="video/mp4"
                    />
                    <source
                      src="https://res.cloudinary.com/dki2r1gnf/video/upload/v1730039279/IMG_1004_ectqai.webm"
                      type="video/webm"
                    />
                    Your browser does not support the video
                  </video>
                </div>
                <Typography color="#000">Rose 😍 </Typography>
              </div>
            </WithSeeMore>
          );
        },
        duration: 31000,
      },
    ],
    categoryName: "Rose 😍",
    storyCover:
      "https://res.cloudinary.com/dki2r1gnf/image/upload/t_Instagram-post/v1730041000/Screenshot_from_2024-10-27_14-55-57_tliye6.png",
  },
  {
    story: [
      {
        content: ({ action, story }) => {
          return (
            <WithSeeMore story={story} action={action}>
              <div style={contentStyle}>
                <TestimonialCard imgName="Phil" cardText={cardText1} />
              </div>
            </WithSeeMore>
          );
        },
      },
      {
        content: ({ action, story }) => {
          return (
            <WithSeeMore story={story} action={action}>
              <div style={contentStyle}>
                {/* <TestimonialCard
                  imgUrl="https://res.cloudinary.com/dki2r1gnf/image/upload/v1729741164/ad89e077-925a-4b8c-91a8-172329704571_pgpuo3.jpg"
                  imgName="Phil Boakye"
                  cardText={cardText1}
                /> */}
                <img
                  className="storyImage"
                  src="https://res.cloudinary.com/dki2r1gnf/image/upload/v1729741164/ad89e077-925a-4b8c-91a8-172329704571_pgpuo3.jpg"
                />
              </div>
            </WithSeeMore>
          );
        },
      },
    ],
    categoryName: "Phil",
    storyCover:
      "https://res.cloudinary.com/dki2r1gnf/image/upload/v1729741164/ad89e077-925a-4b8c-91a8-172329704571_pgpuo3.jpg",
  },
  {
    story: [
      {
        content: ({ action, story }) => {
          return (
            <WithSeeMore story={story} action={action}>
              <div style={contentStyle}>
              <div className="storyImage">
                  <video width="100%" height="640" autoPlay loop>
                    <source
                      src="https://res.cloudinary.com/dki2r1gnf/video/upload/v1730042359/Snapinsta.app_video_77420AC7BD161C299618E3C08026C695_video_dashinit_uaxjvh.mp4"
                      type="video/mp4"
                    />
                    <source
                      src="https://res.cloudinary.com/dki2r1gnf/video/upload/v1730042358/Snapinsta.app_video_77420AC7BD161C299618E3C08026C695_video_dashinit_lyylcb.webm"
                      type="video/webm"
                    />
                    Your browser does not support the video
                  </video>
                </div>
                <Typography color="#000">Miss Tasha 😍 </Typography>
                <Typography color="#000">IG: _miss.tasha__ </Typography>

              </div>
            </WithSeeMore>
          );
        },
        duration: 60000,
      },
    ],
    categoryName: "Tasha",
    storyCover:
      "https://res.cloudinary.com/dki2r1gnf/image/upload/v1730042829/Screenshot_from_2024-10-27_15-25-10_ohstfq.png",
  },
  {
    story: [
      {
        content: ({ action, story }) => {
          return (
            <WithSeeMore story={story} action={action}>
              <div style={contentStyle}>
                <TestimonialCard
                  imgUrl="https://res.cloudinary.com/dki2r1gnf/image/upload/v1729741164/ad89e077-925a-4b8c-91a8-172329704571_pgpuo3.jpg"
                  imgName="Phil Boakye"
                  cardText={cardText1}
                />
              </div>
            </WithSeeMore>
          );
        },
      },
    ],
    categoryName: "Phil Boakye",
    storyCover:
      "https://res.cloudinary.com/dki2r1gnf/image/upload/v1729741164/ad89e077-925a-4b8c-91a8-172329704571_pgpuo3.jpg",
  },
  // {
  //   story: [
  //     {
  //       content: ({ action, story }) => {
  //         return (
  //           <WithSeeMore story={story} action={action}>
  //             <div style={contentStyle}>
  //               <img className="storyImage" src={Ayode} />
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
  //           <h2>Proceed to view Category.</h2>
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
  //               href="https://tomuswear.company.site/products/kaftan-slippers"
  //             >
  //               Continue
  //             </Button>
  //           </Stack>
  //         </div>
  //       ),
  //       duration: 5000,
  //     },
  //   ],
  //   categoryName: "Kaftan Slippers",
  //   storyCover:
  //     "https://res.cloudinary.com/dki2r1gnf/image/upload/t_Product-image/v1726263047/Ayode_fesxbu.jpg",
  // },

  // {
  //   story: [
  //     {
  //       content: ({ action, story }) => {
  //         return (
  //           <WithSeeMore story={story} action={action}>
  //             <div style={contentStyle}>
  //               <img
  //                 className="storyImage"
  //                 src="https://res.cloudinary.com/dki2r1gnf/image/upload/v1726071153/half-birk-black-main_yr5x3w.jpg"
  //               />
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
  //           <h2>Proceed to view Category</h2>
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
  //               href="https://tomuswear.company.site/products/clogs"
  //             >
  //               Continue
  //             </Button>
  //           </Stack>
  //         </div>
  //       ),
  //       duration: 5000,
  //     },
  //   ],
  //   categoryName: "Clogs",
  //   storyCover:
  //     "https://res.cloudinary.com/dki2r1gnf/image/upload/t_Instagram-post/v1726071153/half-birk-black-main_yr5x3w.jpg",
  // },
];

const contentStyle = {
  // background: "#d583fb",
  background: "#d9d9d9",

  width: "100%",
  height: "100vh",
  padding: 20,
  color: "white",
};
