"use client";
import React, { useState } from "react";
import { Box, Typography, IconButton, Collapse } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import theme from "@/app/theme/theme";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
}

const container = {
  marginBottom: 2,
  borderBottom: "2px solid #ccc",
  paddingBottom: 1,
  padding: "20px 20px",
  background: theme.palette.custom.lightGray,
  maxWidth: "900px",
  minWidth: {
    xl: "400px",
    lg: "400px",
    md: "300px",
    sm: "300px",
    xs: "250px",
    xxs: "250px",
  },
};

const questionSx = {
  fontWeight: "bold",
  color: theme.palette.primary.main,
  fontFamily: "UniteaSans",
  fontSize: {
    xl: "18px",
    lg: "18px",
    md: "15px",
    sm: "15px",
    xs: "12px",
    xxs: "12px",
  },
};
const FAQElements = ({ faqs }: FAQProps) => {
  const [expandedIndex, setExpandedIndex] = useState<null | number>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Box>
      {faqs.map((faq, index) => (
        <Box key={index} sx={container}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h3" sx={questionSx}>
              {faq.question}
            </Typography>
            <IconButton
              onClick={() => handleToggle(index)}
              sx={{
                background: theme.palette.secondary.main,
                borderRadius: "5px",
              }}
            >
              {expandedIndex === index ? <ClearOutlinedIcon /> : <AddIcon />}
            </IconButton>
          </Box>
          <Collapse in={expandedIndex === index}>
            <Typography
              mt="10px"
              variant="body1"
              sx={{
                color: theme.palette.custom.darkGray,
                fontFamily: "UniteaSans",
                fontWeight: 500,
              }}
            >
              {faq.answer}
            </Typography>
          </Collapse>
        </Box>
      ))}
    </Box>
  );
};

export default FAQElements;
