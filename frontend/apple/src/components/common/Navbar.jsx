import { Box, Link, Typography } from "@mui/material"
import React from "react"
import AppleIcon from "@mui/icons-material/Apple"
import SearchIcon from "@mui/icons-material/Search"
import ShoppingBag from "@mui/icons-material/ShoppingBag"
const Navbar = () => {
  return (
    <Box
      sx={{
        height: "44px",
        bgcolor: "#424243",
        display: "flex",
        justifyContent: "center",
        justifyItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mr: "35px",
          width: "20px",
        }}
      >
        <AppleIcon
          sx={{
            height: "20px",
            color: "#dadada",
            "&:hover": {
              color: "#fff",
            },
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mr: "35px",
        }}
      >
        <Link component={"button"} sx={{ textDecoration: "none" }}>
          <Typography
            sx={{
              fontSize: "12px",
              color: "#dadada",
              cursor: "pointer",
              "&:hover": {
                color: "#fff",
              },
            }}
          >
            Store
          </Typography>
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mr: "35px",
        }}
      >
        <Link component={"button"} sx={{ textDecoration: "none" }}>
          <Typography
            sx={{
              fontSize: "12px",
              color: "#dadada",
              cursor: "pointer",
              "&:hover": {
                color: "#fff",
              },
            }}
          >
            Mac
          </Typography>
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mr: "35px",
        }}
      >
        <Link component={"button"} sx={{ textDecoration: "none" }}>
          <Typography
            sx={{
              fontSize: "12px",
              color: "#dadada",
              cursor: "pointer",
              "&:hover": {
                color: "#fff",
              },
            }}
          >
            iPad
          </Typography>
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mr: "35px",
        }}
      >
        <Link component={"button"} sx={{ textDecoration: "none" }}>
          <Typography
            sx={{
              fontSize: "12px",
              color: "#dadada",
              cursor: "pointer",
              "&:hover": {
                color: "#fff",
              },
            }}
          >
            iPhone
          </Typography>
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mr: "35px",
        }}
      >
        <Link component={"button"} sx={{ textDecoration: "none" }}>
          <Typography
            sx={{
              fontSize: "12px",
              color: "#dadada",
              cursor: "pointer",
              "&:hover": {
                color: "#fff",
              },
            }}
          >
            Watch
          </Typography>
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mr: "35px",
        }}
      >
        <Link component={"button"} sx={{ textDecoration: "none" }}>
          <Typography
            sx={{
              fontSize: "12px",
              color: "#dadada",
              cursor: "pointer",
              "&:hover": {
                color: "#fff",
              },
            }}
          >
            Vision
          </Typography>
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mr: "35px",
        }}
      >
        <Link component={"button"} sx={{ textDecoration: "none" }}>
          <Typography
            sx={{
              fontSize: "12px",
              color: "#dadada",
              cursor: "pointer",
              "&:hover": {
                color: "#fff",
              },
            }}
          >
            AirPods
          </Typography>
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mr: "35px",
        }}
      >
        <Link component={"button"} sx={{ textDecoration: "none" }}>
          <Typography
            sx={{
              fontSize: "12px",
              color: "#dadada",
              cursor: "pointer",
              "&:hover": {
                color: "#fff",
              },
            }}
          >
            TV & Home
          </Typography>
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mr: "35px",
        }}
      >
        <Link component={"button"} sx={{ textDecoration: "none" }}>
          <Typography
            sx={{
              fontSize: "12px",
              color: "#dadada",
              cursor: "pointer",
              "&:hover": {
                color: "#fff",
              },
            }}
          >
            Entertainment
          </Typography>
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mr: "35px",
        }}
      >
        <Link component={"button"} sx={{ textDecoration: "none" }}>
          <Typography
            sx={{
              fontSize: "12px",
              color: "#dadada",
              cursor: "pointer",
              "&:hover": {
                color: "#fff",
              },
            }}
          >
            Accessories
          </Typography>
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mr: "35px",
        }}
      >
        <Link component={"button"} sx={{ textDecoration: "none" }}>
          <Typography
            sx={{
              fontSize: "12px",
              color: "#dadada",
              cursor: "pointer",
              "&:hover": {
                color: "#fff",
              },
            }}
          >
            Support
          </Typography>
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mr: "35px",
          width: "20px",
        }}
      >
        <SearchIcon
          sx={{
            height: "20px",
            color: "#dadada",
            "&:hover": {
              color: "#fff",
            },
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "20px",
        }}
      >
        <ShoppingBag
          sx={{
            height: "18px",
            color: "#dadada",
            "&:hover": {
              color: "#fff",
            },
          }}
        />
      </Box>
    </Box>
  )
}

export default Navbar
