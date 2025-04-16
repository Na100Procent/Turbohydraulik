"use client";

import { useParams } from "next/navigation";
import { Button } from "@mui/material";
import { cityReviewLinks } from "../data/cityReviewLinks";

const GoodReview = () => {
  const params = useParams();
  const city = params?.city as string;
  const reviewLink = cityReviewLinks[city];

  return (
    <>
      {reviewLink && (
        <a
          href={reviewLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Button
            aria-label="opinia pozytywna"
            variant="contained"
            sx={{
              backgroundColor: "rgb(41, 190, 86)",
              color: "#1A1A1A",
              fontWeight: 700,
              "&:hover": { backgroundColor: "#A3D92F" },
            }}
          >
            TAK JESTEM ZADOWOLONY/A
          </Button>
        </a>
      )}
    </>
  );
};

export default GoodReview;
