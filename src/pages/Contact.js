import React from "react";
import Layout from "./../components/Layout/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Contact = () => {
  return (
    <Layout>
  <Box sx={{ my: 5, textAlign: "center" ,fontWeight: "bold", mb: 2 }}>
    <Typography variant="h4" textAlign={"center"}>
      <u>Contact List of Indian Coffee Houses in JBP</u>
    </Typography>
    <p >Indian Coffee Workers' Co-operative Society Limited ( ICWCS LTD. )</p>
  </Box>
  <div style={{ display: 'flex', alignItems: 'center'}}/>
    <Box
      sx={{
        justifyContent:"center",
        alignItems:"center",
        m: 3,
        width: "1050px",
        ml: 55,
        "@media (max-width:600px)": {
          width: "300px",
        },
      }}
    >
        <TableContainer component={Paper}>
          <Table aria-label="contact table" >
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  LOCATION
                </TableCell>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  PHONE
                </TableCell>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Email
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> ICH, 592-
                  MALVIYA MARG, JABALPUR
                </TableCell>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} />{" "}
                  9425860066,0761-2480093
                </TableCell>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} />{" "}
                  icwcsjabalpur@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> ICH, Super
                  Bazar
                </TableCell>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} /> 0761-2402108
                </TableCell>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} />{" "}
                  icwcsjabalpur@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> ICH, Vijay
                  Nagar
                </TableCell>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} /> 0761-2641017
                </TableCell>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} />{" "}
                  icwcsjabalpur@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> ICH, Medical
                  College Campus Nagpur Road
                </TableCell>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} />
                  0761-26702528
                </TableCell>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} />{" "}
                  icwcsjabalpur@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> ICH, 9,
                  Ashoka Road Sadar
                </TableCell>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} /> 0761-2621380
                </TableCell>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} />{" "}
                  icwcsjabalpur@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> ICH, OMTI,
                  JABALPUR
                </TableCell>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} /> 0761-2671777
                </TableCell>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} />{" "}
                  icwcsjabalpur@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> ICH, Ranjhi
                </TableCell>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} /> 0761-2676411
                </TableCell>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} />{" "}
                  icwcsjabalpur@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> ICH, Gulaua
                  Chowk, Garha
                </TableCell>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} /> 0761-2423102
                </TableCell>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} />{" "}
                  icwcsjabalpur@gmail.com
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
