"use client";
import React, { useState, useCallback, useMemo } from "react";
import { Box, Typography, IconButton, Collapse, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import theme from "@/app/theme/theme";
import { faqData } from "@/app/data/data";

interface FAQItem {
  question: string;
  answer: string;
}

const containerSx = {
  marginBottom: 2,
  borderBottom: "2px solid #ccc",
  padding: "20px 20px",
  background: theme.palette.custom.lightGray,
  minWidth: {
    xl: "400px",
    lg: "400px",
    md: "300px",
    sm: "300px",
    xs: "250px",
    xxs: "250px",
  },
  width: "100%",
};

const questionSx = {
  fontWeight: "bold",
  color: theme.palette.primary.main,
  fontSize: {
    xl: "18px",
    lg: "18px",
    md: "15px",
    sm: "15px",
    xs: "12px",
    xxs: "12px",
  },
};

const toggleIconButtonSx = {
  background: theme.palette.secondary.main,
  borderRadius: "5px",
};

const answerSx = {
  color: theme.palette.custom.darkGray,
  fontWeight: 500,
  mt: "10px",
};

const showAllBtnSx = {
  mt: 2,
  color: theme.palette.primary.main,
  textTransform: "none",
  fontWeight: "bold",
  background: theme.palette.secondary.main,
};

const FAQElements = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const handleToggle = useCallback((index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  }, []);

  const handleShowAll = useCallback(() => {
    setShowAll((prev) => !prev);
  }, []);

  const displayedFaqs = useMemo(() => {
    return showAll ? faqData : faqData.slice(0, 6);
  }, [showAll]);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mb="50px">
      {displayedFaqs.map((faq: FAQItem, index) => (
        <Box key={index} sx={containerSx}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h3" sx={questionSx}>
              {faq.question}
            </Typography>
            <IconButton
              aria-label="Pokaż odpowiedź"
              onClick={() => handleToggle(index)}
              sx={toggleIconButtonSx}
            >
              {expandedIndex === index ? <ClearOutlinedIcon /> : <AddIcon />}
            </IconButton>
          </Box>
          <Collapse in={expandedIndex === index}>
            <Typography variant="body1" sx={answerSx}>
              {faq.answer}
            </Typography>
          </Collapse>
        </Box>
      ))}
      <Button
        aria-label="Pokaż wszystkie FAQ"
        onClick={handleShowAll}
        sx={showAllBtnSx}
      >
        {showAll ? "Pokaż mniej" : "Pokaż wszystkie"}
      </Button>
    </Box>
  );
};

export default FAQElements;
