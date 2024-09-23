import { Card, CardContent, Typography } from "@mui/material";
import useScreenWidth from "./hooks/useScreenWidth";

function BrandGuardian() {
  const screenWidth = useScreenWidth();

  return (
    <Card
      sx={{
        width: screenWidth < 800 ? "100%" : "50vw",
        height: "100%",
        marginTop: "5rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <CardContent>
        <Typography
          gutterBottom
          variant="h1"
          sx={{ color: "text.secondary", fontSize: 20 }}
        >
          Job Description
        </Typography>
        <Typography variant="h2" sx={{ fontSize: "40px", fontWeight: "bold" }}>
          Brand Guardian (Social Media Strategist) at Tomus Footwear <br />
          <br />
        </Typography>
        <div>
          <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>
            Job Overview: <br />
            <br />
          </Typography>
          <Typography>
            As a Brand Guardian within the Marketing Team at Tomus Footwear,
            your role is essential in protecting and enhancing the brand's image
            while increasing its visibility across multiple platforms. You will
            be responsible for creating engaging content, managing social media
            presence, and driving innovative strategies to strengthen the brand.
          </Typography>
          <br />
          <Typography variant="h6">Responsibilities:</Typography>
          <ol>
            <li>
              <b>Social Media & Content Creation</b>
              <ul>
                <li>
                  Manage Tomus Footwear’s social media presence across
                  platforms, ensuring consistent and engaging communication.
                </li>
                <li>
                  Research and implement best practices for audience engagement
                  tailored to each platform.
                </li>
                <li>
                  Create captivating flyers, videos, and multimedia content for
                  social media posts.
                </li>
                <li>
                  Develop platform-specific content that resonates with our
                  target audience and drives engagement.
                </li>
                <li>
                  Stay on top of social media trends and discover innovative
                  strategies to elevate Tomus Footwear’s presence.
                </li>
                <li>
                  Oversee and manage paid advertising campaigns to boost brand
                  visibility.
                </li>
              </ul>
            </li>

            <li>
              <b>Website Management</b>
              <ul>
                <li>
                  Regularly update the website with current pricing, delivery
                  methods, and product imagery to maintain accuracy and appeal.
                </li>
              </ul>
            </li>

            <li>
              <b>Influencer Collaboration & Engagement</b>
              <ul>
                <li>
                  Collaborate with influencers on potential partnerships and
                  initiatives to promote the brand.
                </li>
                <li>
                  Actively engage in comment sections of popular celebrities,
                  influencers, and trending conversations on X (Twitter) to
                  boost the brand’s exposure.
                </li>
                <li>
                  Update stories across platforms daily to maintain relevance
                  and keep audiences engaged.
                </li>
              </ul>
            </li>

            <li>
              <b>Storytelling & Testimonials</b>
              <ul>
                <li>
                  Leverage customer testimonials provided by the Customer
                  Experience team to craft compelling storytelling content that
                  showcases our brand’s impact.
                </li>
              </ul>
            </li>

            <li>
              <b>Team Collaboration & Reporting</b>
              <ul>
                <li>
                  Present updates, share insights, and suggest improvements
                  during team check-in meetings.
                </li>
                <li>
                  Work collaboratively toward the team’s Brand Guardian goals.
                </li>
              </ul>
            </li>

            <li>
              <b>Qualities & Skills Required</b>
              <ul>
                <li>
                  Creativity and innovation in all marketing and promotional
                  efforts.
                </li>
                <li>
                  Assertiveness and initiative in driving marketing strategies
                  forward.
                </li>
                <li>
                  Focus on consistency and long-term impact beyond just numbers
                  and impressions.
                </li>
                <li>
                  Enthusiasm and passion for both the role and the Tomus
                  Footwear brand.
                </li>
                <li>
                  Strong communication skills to effectively convey the brand's
                  message.
                </li>
                <li>
                  Professionalism and a positive attitude in all interactions,
                  avoiding confrontations with negative commenters or trolls.
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </CardContent>
    </Card>
  );
}

export default BrandGuardian;
