import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components';


const App = () => {
  return (
      <BrowserRouter>
          <Box sx={{backgroundColor: '#000'}}>
              <Navbar/>
          </Box>
          <Routes>
              <Route path="/" exact element={<Feed/>}></Route>
              <Route path="/video/:id" element={<VideoDetail/>} />
              <Route path="/channel/:id" element={<ChannelDetail />} />
              <Route path="/search/:searchTerm" element={<SearchFeed/>}></Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App
