import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import { useState } from "react";
import Stories from "react-insta-stories";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { storiesArray } from "../Stories";

function Category() {
  const [open, setOpen] = useState(false);
  const [storyIndex, setStoryIndex] = useState(null);

  const handleStoryClick = (newOpen, index) => {
    setStoryIndex(index);
    setOpen(newOpen);
  };

  const stories = storiesArray.map((story) => story.story);
  const filteredStories = stories.filter(
    (story, index) => index === storyIndex
  );

  return (
    <Box className="circle-category">
      <p style={{ padding: "0.5rem 0.5rem 0.5rem 2rem" }}>Shop by category</p>
      <div style={{}}>
        <Stack direction="row" spacing={3} sx={{ justifyContent: "center" }}>
          {storiesArray.map((story, index) => (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
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
              <p>{story.categoryName}</p>
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
          defaultInterval={3000}
          width={"100%"}
          height="100vh"
          onAllStoriesEnd={() => setOpen(false)}
        />
      </Drawer>
    </Box>
  );
}

export default Category;
