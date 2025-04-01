import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Chip,
  Avatar,
  Box,
  TextField,
  Divider,
} from "@mui/material";
import {
  Favorite,
  Share,
  Comment,
  Search,
  CalendarToday,
  Person,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const theme = useTheme();
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    // Simulate fetching blog articles
    const mockArticles = [
      {
        id: 1,
        title: "The Future of NFT Art Collections",
        excerpt:
          "Exploring how NFT art is revolutionizing the digital art world and what the future holds for collectors.",
        image: "https://source.unsplash.com/random/600x400/?nft,art",
        date: "May 15, 2023",
        author: "Jane Crypto",
        category: "Art",
        likes: 42,
        comments: 8,
        featured: true,
      },
      {
        id: 2,
        title: "How to Verify NFT Authenticity",
        excerpt:
          "A comprehensive guide to checking the authenticity of NFTs before purchasing.",
        image: "https://source.unsplash.com/random/600x400/?blockchain",
        date: "May 10, 2023",
        author: "Mike Blockchain",
        category: "Education",
        likes: 35,
        comments: 5,
        featured: false,
      },
      {
        id: 3,
        title: "Top 10 NFT Marketplaces in 2023",
        excerpt:
          "Compare the best platforms to buy and sell your NFTs this year.",
        image: "https://source.unsplash.com/random/600x400/?marketplace",
        date: "May 5, 2023",
        author: "Sarah Trader",
        category: "Market",
        likes: 28,
        comments: 12,
        featured: false,
      },
      {
        id: 4,
        title: "NFT Gaming: Play-to-Earn Explained",
        excerpt:
          "How blockchain games are creating new economic opportunities for players worldwide.",
        image: "https://source.unsplash.com/random/600x400/?gaming",
        date: "April 28, 2023",
        author: "Alex Gamer",
        category: "Gaming",
        likes: 56,
        comments: 15,
        featured: true,
      },
      {
        id: 5,
        title: "Environmental Impact of NFTs",
        excerpt:
          "Examining the carbon footprint of NFTs and sustainable alternatives.",
        image: "https://source.unsplash.com/random/600x400/?environment",
        date: "April 20, 2023",
        author: "Eco Crypto",
        category: "Sustainability",
        likes: 39,
        comments: 7,
        featured: false,
      },
      {
        id: 6,
        title: "Creating Your First NFT Collection",
        excerpt:
          "Step-by-step guide to minting your own NFT collection from start to finish.",
        image: "https://source.unsplash.com/random/600x400/?create",
        date: "April 15, 2023",
        author: "Artist Dev",
        category: "Tutorial",
        likes: 64,
        comments: 20,
        featured: true,
      },
    ];
    setArticles(mockArticles);
  }, []);

  const categories = [
    "All",
    "Art",
    "Education",
    "Market",
    "Gaming",
    "Sustainability",
    "Tutorial",
  ];

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || article.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticles = articles.filter((article) => article.featured);
  const regularArticles = filteredArticles.filter(
    (article) => !article.featured
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: theme.palette.background.paper,
          borderRadius: 2,
          p: 4,
          mb: 4,
          textAlign: "center",
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ fontWeight: "bold", zIndex: 1, position: "relative" }}
        >
          NFT Insights & Updates
        </Typography>
        <Typography
          variant="h5"
          sx={{ mb: 3, zIndex: 1, position: "relative" }}
        >
          Stay informed about the latest trends, news, and tutorials in the NFT
          space
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            zIndex: 1,
            position: "relative",
          }}
        >
          <TextField
            placeholder="Search articles..."
            variant="outlined"
            size="small"
            sx={{
              backgroundColor: "background.paper",
              borderRadius: 1,
              width: "50%",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "grey.300",
                },
                "&:hover fieldset": {
                  borderColor: "primary.main",
                },
              },
            }}
            InputProps={{
              startAdornment: <Search sx={{ color: "action.active", mr: 1 }} />,
            }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Box>
      </Box>

      {/* Categories */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
          mb: 4,
          justifyContent: "center",
        }}
      >
        {categories.map((category) => (
          <Chip
            key={category}
            label={category}
            onClick={() => setActiveCategory(category)}
            color={activeCategory === category ? "primary" : "default"}
            sx={{ cursor: "pointer" }}
          />
        ))}
      </Box>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <>
          <Typography
            variant="h4"
            component="h2"
            sx={{ mb: 3, fontWeight: "bold" }}
          >
            Featured Posts
          </Typography>
          <Grid container spacing={4} sx={{ mb: 6 }}>
            {featuredArticles.map((article) => (
              <Grid item xs={12} md={6} key={article.id}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.3s",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: theme.shadows[6],
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={article.image}
                    alt={article.title}
                    sx={{ height: 240 }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Chip
                      label={article.category}
                      size="small"
                      color="secondary"
                      sx={{ mb: 1 }}
                    />
                    <Typography gutterBottom variant="h5" component="h3">
                      {article.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {article.excerpt}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mt: "auto",
                        pt: 2,
                      }}
                    >
                      <Avatar sx={{ width: 32, height: 32, mr: 1 }}>
                        {article.author.charAt(0)}
                      </Avatar>
                      <Typography variant="caption" sx={{ mr: 2 }}>
                        {article.author}
                      </Typography>
                      <CalendarToday
                        sx={{ fontSize: 14, mr: 0.5, color: "text.secondary" }}
                      />
                      <Typography variant="caption" sx={{ mr: 2 }}>
                        {article.date}
                      </Typography>
                    </Box>
                  </CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      px: 2,
                      pb: 2,
                      borderTop: `1px solid ${theme.palette.divider}`,
                    }}
                  >
                    <Button
                      size="small"
                      startIcon={<Favorite />}
                      sx={{ color: "text.secondary" }}
                    >
                      {article.likes}
                    </Button>
                    <Button
                      size="small"
                      startIcon={<Comment />}
                      sx={{ color: "text.secondary" }}
                    >
                      {article.comments}
                    </Button>
                    <Button
                      size="small"
                      startIcon={<Share />}
                      sx={{ color: "text.secondary" }}
                    >
                      Share
                    </Button>
                    <Button
                      size="small"
                      component={Link}
                      to={`/blog/${article.id}`}
                      sx={{ ml: "auto" }}
                    >
                      Read More
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Divider sx={{ my: 4 }} />
        </>
      )}

      {/* Regular Articles */}
      <Typography
        variant="h4"
        component="h2"
        sx={{ mb: 3, fontWeight: "bold" }}
      >
        Latest Posts
      </Typography>
      <Grid container spacing={4}>
        {regularArticles.length > 0 ? (
          regularArticles.map((article) => (
            <Grid item xs={12} sm={6} lg={4} key={article.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: theme.shadows[4],
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={article.image}
                  alt={article.title}
                  sx={{ height: 180 }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Chip
                    label={article.category}
                    size="small"
                    color="secondary"
                    sx={{ mb: 1 }}
                  />
                  <Typography gutterBottom variant="h6" component="h3">
                    {article.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {article.excerpt.length > 100
                      ? `${article.excerpt.substring(0, 100)}...`
                      : article.excerpt}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mt: "auto",
                      pt: 2,
                    }}
                  >
                    <Person
                      sx={{ fontSize: 14, mr: 1, color: "text.secondary" }}
                    />
                    <Typography variant="caption" sx={{ mr: 2 }}>
                      {article.author}
                    </Typography>
                    <CalendarToday
                      sx={{ fontSize: 14, mr: 0.5, color: "text.secondary" }}
                    />
                    <Typography variant="caption">{article.date}</Typography>
                  </Box>
                </CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    px: 2,
                    pb: 2,
                    borderTop: `1px solid ${theme.palette.divider}`,
                  }}
                >
                  <Button
                    size="small"
                    startIcon={<Favorite />}
                    sx={{ color: "text.secondary" }}
                  >
                    {article.likes}
                  </Button>
                  <Button
                    size="small"
                    startIcon={<Comment />}
                    sx={{ color: "text.secondary" }}
                  >
                    {article.comments}
                  </Button>
                  <Button
                    size="small"
                    component={Link}
                    to={`/blog/${article.id}`}
                    sx={{ ml: "auto" }}
                  >
                    Read More
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ textAlign: "center", py: 4 }}
            >
              No articles found matching your criteria
            </Typography>
          </Grid>
        )}
      </Grid>

      {/* Newsletter Subscription */}
      <Box
        sx={{
          backgroundColor: theme.palette.background.paper,
          borderRadius: 2,
          p: 4,
          mt: 6,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h5"
          component="h3"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          Stay Updated with Our NFT Blog
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Subscribe to our newsletter to receive the latest NFT news, drops, and
          insights directly to your inbox.
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <TextField
            placeholder="Your email address"
            variant="outlined"
            size="small"
            sx={{
              width: 300,
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "grey.300",
                },
                "&:hover fieldset": {
                  borderColor: "primary.main",
                },
              },
            }}
          />
          <Button variant="contained" color="primary" size="large">
            Subscribe
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default BlogPage;
