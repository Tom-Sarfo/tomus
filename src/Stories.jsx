// import { Button, Stack } from "@mui/material";
import { WithSeeMore } from "react-insta-stories";
// import Ayode from "../public/Ayode.jpg";
import TestimonialCard from "./Components/TestimonialCard";
import { Typography } from "@mui/material";

const cardText1 =
  "It's actually the best made in Ghana footwear... It's really designed for all weather conditions. I really love how it looks like whenever i wear it... Kudos to your team for doing a great job.";

const cardText2 =
  "Bro I love birks. I used to buy birks a lot but then I often get issues with it. within some few days and the foundation is already gone. Charley your birk be top notch!";

const cardText3 =
  "Hi Tomus birk, good evening I just received my Birks, and I’m thrilled! The online buying process was seamless, and the birk fit perfectly. Thank you for such a great experience!🫶🏽";

const cardText4 =
  "The authenticity when I wear is what people see and drive them to ask me to order some for them. So obviously means your product is super good. I wear it anywhere";


export const storiesArray = [
  {
    story: [
      {
        content: ({ action, story }) => {
          return (
            <WithSeeMore story={story} action={action}>
              <div style={contentStyle}>
                <div className="storyImage">
                  <video width="320" height="640" autoPlay loop>
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
                <TestimonialCard imgName="Phil Boakye" cardText={cardText1} />
              </div>
            </WithSeeMore>
          );
        },
        duration: 10000,
      },
      {
        content: ({ action, story }) => {
          return (
            <WithSeeMore story={story} action={action}>
              <div style={contentStyle}>
                <img
                  className="storyImage"
                  src="https://res.cloudinary.com/dki2r1gnf/image/upload/v1729741164/ad89e077-925a-4b8c-91a8-172329704571_pgpuo3.jpg"
                />
              </div>
              <Typography color="#000" sx={{ marginTop: "1rem" }}>
                Phil Boakye
              </Typography>
            </WithSeeMore>
          );
        },
        duration: 10000,
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
                  <video width="320" height="640" autoPlay loop>
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
                <TestimonialCard imgName="Edward Asare" cardText={cardText2} />
              </div>
            </WithSeeMore>
          );
        },
        duration: 10000,
      },
      {
        content: ({ action, story }) => {
          return (
            <WithSeeMore story={story} action={action}>
              <div style={contentStyle}>
                <img
                  className="storyImage"
                  src="https://res.cloudinary.com/dki2r1gnf/image/upload/v1730045885/photo_2024-10-27_16-17-49_lkpukf.jpg"
                />
                <Typography color="#000" sx={{ marginTop: "1rem" }}>
                  Edward Asare
                </Typography>
              </div>
            </WithSeeMore>
          );
        },
        duration: 10000,
      },
    ],
    categoryName: "Edward A.",
    storyCover:
      "https://res.cloudinary.com/dki2r1gnf/image/upload/v1730045281/Screenshot_from_2024-10-27_16-07-26_sp5wec.png",
  },
  {
    story: [
      {
        content: ({ action, story }) => {
          return (
            <WithSeeMore story={story} action={action}>
              <div style={contentStyle}>
                <TestimonialCard imgName="Sydney" cardText={cardText3} />
              </div>
            </WithSeeMore>
          );
        },
        duration: 10000,
      },
      {
        content: ({ action, story }) => {
          return (
            <WithSeeMore story={story} action={action}>
              <div style={contentStyle}>
                <img
                  className="storyImage"
                  src="https://res.cloudinary.com/dki2r1gnf/image/upload/v1730263924/photo_2024-10-30_04-49-50_fma0jv.jpg"
                />
                <Typography color="#000" sx={{ marginTop: "1rem" }}>
                  Sydney
                </Typography>
              </div>
            </WithSeeMore>
          );
        },
        duration: 10000,
      },
    ],
    categoryName: "Sydney",
    storyCover:
      "https://res.cloudinary.com/dki2r1gnf/image/upload/v1730263924/photo_2024-10-30_04-49-50_fma0jv.jpg",
  },
  {
    story: [
      {
        content: ({ action, story }) => {
          return (
            <WithSeeMore story={story} action={action}>
              <div style={contentStyle}>
                <TestimonialCard imgName="King Mane" cardText={cardText4} />
              </div>
            </WithSeeMore>
          );
        },
        duration: 10000,
      },
      {
        content: ({ action, story }) => {
          return (
            <WithSeeMore story={story} action={action}>
              <div style={contentStyle}>
                <img
                  className="storyImage"
                  src="https://res.cloudinary.com/dki2r1gnf/image/upload/v1730264713/photo_2024-10-30_05-03-58_jb1oo6.jpg"
                />
                <Typography color="#000" sx={{ marginTop: "1rem" }}>
                  King Mane
                </Typography>
              </div>
            </WithSeeMore>
          );
        },
        duration: 10000,
      },
    ],
    categoryName: "King Mane",
    storyCover:
      "https://res.cloudinary.com/dki2r1gnf/image/upload/v1730264713/photo_2024-10-30_05-03-58_jb1oo6.jpg",
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
