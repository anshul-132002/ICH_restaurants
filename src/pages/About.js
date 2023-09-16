import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";
import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import ContactPhoneSharpIcon from "@mui/icons-material/ContactPhoneSharp";
import AlternateEmailSharpIcon from "@mui/icons-material/AlternateEmailSharp";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4"><b><u>About Us</u></b></Typography>
        <TableHead>
          <TableRow>
            <TableCell sx={{ bgcolor: "black", color: "white" }} align="center">
              Organization Details
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <HomeWorkIcon sx={{ color: "red", pt: 1 }} />
              Name of Institution
            </TableCell>
            <TableCell>
              <p>
                Indian Coffee Workers' Co-operative Society Ltd., Jabalpur (M.P)
                Known among public as ICWCS Ltd., Jabalpur & ICH.
              </p>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <VpnKeyIcon sx={{ color: "red", pt: 1 }} />
              Registration
            </TableCell>
            <TableCell>
              <p>Under MP Co-operative Societies Act 1960 (Regd. No. 1485)</p>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <RestaurantMenuIcon sx={{ color: "red", pt: 1 }} />
              Established
            </TableCell>
            <TableCell>
              <p>At 592, Malviya Marg, Jabalpur -2, Madhya Pradesh</p>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <SupportAgentIcon sx={{ color: "red", pt: 1 }} />
              Affiliation
            </TableCell>
            <TableCell>
              <p>
                All India Coffee Workers' Co-operative Societies Federation
                Limited, Delhi – 7.
              </p>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <ContactPhoneSharpIcon sx={{ color: "red", pt: 1 }} />
              Contact No.
            </TableCell>
            <TableCell>
              <p>0761 – 2310880, 2400498</p>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <AlternateEmailSharpIcon sx={{ color: "red", pt: 1 }} />
              Email
            </TableCell>
            <TableCell>
              <p>icwcsjabalpur@gmail.com</p>
            </TableCell>
          </TableRow>
        </TableBody>
      </Box>
    </Layout>
  );
};

export default About;
