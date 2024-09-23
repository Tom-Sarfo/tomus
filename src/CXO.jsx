import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import useScreenWidth from "./hooks/useScreenWidth";

function CXO() {
    const screenWidth = useScreenWidth();
  return (
    <Card
      sx={{
        // width: "50vw",
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
          Customer Xperience Officer <br />
          <br />
        </Typography>
        <Typography variant="div">
          <Typography sx={{ fontSize: "15px" }}>
            Job Overview: <br />
            <br />
          </Typography>
          <Typography>
            As the Customer Experience Officer at Tomus Footwear, you will play
            a key role in managing the daily operations that ensure efficient
            order processing, production, and delivery. Your main goal is to
            enhance customer satisfaction and ensure smooth operational
            workflows across the company.
          </Typography>
          Responsibilities:
          <ol>
            <b>Order Management & Communication:</b>
            <li>
              Monitor and record closed sales from WhatsApp and the website,
              ensuring they are documented in the Slack orders channel.
            </li>
            <ul>
              <li>
                Contact customers with closed sales to confirm orders and set
                delivery expectations. <br />
                <br />
              </li>
              <li>
                On the delivery day, proactively remind customers of their
                scheduled delivery and address any issues with the team,
                especially the Production Manager. <br />
                <br />
              </li>
              <li>
                Track orders in cases of delays in production or delivery,
                ensuring customers are kept informed and engaged. <br />
                <br />
              </li>
              <li>
                Coordinate with delivery riders to ensure timely post-production
                pick-ups. <br />
                <br />
              </li>
              <li>
                Ensure successful order delivery by monitoring delivery riders
                and confirming receipt with customers. <br />
                <br />
              </li>
            </ul>
            <li>
              <b>Payment & Post-Delivery Follow-up:</b>
            </li>
            <ul>
              <li>
                Verify successful payments and ensure delivery riders are paid
                promptly, signaling order completion. <br />
                <br />
              </li>
              <li>
                After delivery, follow up with customers for feedback, aiming to
                collect testimonials and confirm satisfaction.
                <br />
                <br />
              </li>
            </ul>
            <li>
              <b>Customer Relationship Management:</b>
            </li>
            <ul>
              <li>
                Conduct monthly follow-ups with customers who made purchases a
                month ago to strengthen relationships. <br />
                <br />
              </li>
              <li>
                Compile a list of potential leads by recording contact numbers
                of prospects and enquirers from WhatsApp into a Google Sheet.
                <br />
                <br />
              </li>
              <li>
                Solicit customer testimonials to build the brand's reputation.
                <br />
                <br />
              </li>
            </ul>
            <li>
              <b>Reporting & Problem Solving:</b>
            </li>
            <ul>
              <li>
                Report issues or suggestions during daily check-ins to ensure
                quick resolution. <br />
                <br />
              </li>
            </ul>
            <li>
              <b>Skills & Attributes:</b>
            </li>
            <ul>
              <li>
                A goal-oriented mindset with a focus on customer satisfaction.{" "}
                <br />
                <br />
              </li>
              <li>
                Calm, friendly, and solution-focused when interacting with
                customers. <br />
                <br />
              </li>
              <li>
                Excellent communication skills, with the ability to relay
                information accurately and efficiently. <br />
                <br />
              </li>
              <li>
                A professional and patient attitude, especially when dealing
                with challenging situations. <br />
                <br />
              </li>
              <li>
                Ability to multitask, stay organized, and ensure no customer
                details or communications are missed. <br />
                <br />
              </li>
              <li>
                A vigilant approach to upholding the brand’s reputation in both
                communication and appearance. <br />
                <br />
              </li>
            </ul>
          </ol>
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CXO;
