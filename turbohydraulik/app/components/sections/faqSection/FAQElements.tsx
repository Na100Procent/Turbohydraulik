"use client";
import React, { useState } from "react";
import { Box, Typography, IconButton, Collapse } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import theme from "@/app/theme/theme";
import { min } from "class-validator";

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
  padding: "40px 20px",
  background: theme.palette.custom.lightGray,
  maxWidth: "900px",
  minWidth: "400px",
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
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: theme.palette.primary.main }}
            >
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
              sx={{ color: theme.palette.custom.darkGray }}
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
