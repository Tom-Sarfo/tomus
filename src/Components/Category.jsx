import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import { useState } from "react";
import Stories from "react-insta-stories";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { storiesArray } from "../Stories";
import useScreenWidth from "./../hooks/useScreenWidth";

function Category() {
  const [open, setOpen] = useState(false);
  const [storyIndex, setStoryIndex] = useState(null);
  const screenWidth = useScreenWidth();

  const handleStoryClick = (newOpen, index) => {
    setStoryIndex(index);
    setOpen(newOpen);
  };

  const stories = storiesArray.map((story) => story.story);
  const filteredStories = stories.filter(
    (story, index) => index === storyIndex
  );

  return (
    <Box>
      <p style={{ padding: "0.5rem 0.5rem 0.5rem 2rem", textAlign: "center" }}>
        Testimonials and Reviews
      </p>
      <div className="circle-category">
        <Stack
          direction="row"
          spacing={screenWidth < 420 ? 1 : 3}
          sx={{
            justifyContent: "flex-start",
            width: "100%",
            scrollBehavior: "smooth",
            alignItems: "center",
            padding: screenWidth < 420 ? "" : "1rem",
          }}
          // className="circle-category"
        >
          {storiesArray.map((story, index) => (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: screenWidth < 700 ? "right" : "center",
                width: screenWidth < 420 ? "300px" : "100%", //work on this one here
                padding: screenWidth < 420 ? "1rem" : "",
              }}
              key={index}
            >
              <div
                className="circle"
                onClick={() => handleStoryClick(true, index)}
              >
                <Avatar
                  alt="Birk"
                  src={story.storyCover}
                  sx={{
                    width: 76,
                    height: 76,
                    placeItems: "center",
                    inset: "4px 4px 4px 4px",
                  }}
                />
              </div>
              <p style={{ textAlign: "center", width: "100%" }}>
                {story.categoryName}
              </p>
            </div>
          ))}
        </Stack>
      </div>
      <Drawer
        anchor="right"
        open={open}
        // onClose={toggleDrawer(false)}
        sx={{ height: "100vh", width: "100%" }}
      >
        <Stories
          stories={filteredStories.flat()}
          defaultInterval={5000}
          width={"100%"}
          height="100vh"
          onAllStoriesEnd={() => setOpen(false)}
        />
      </Drawer>
    </Box>
  );
}

export default Category;
