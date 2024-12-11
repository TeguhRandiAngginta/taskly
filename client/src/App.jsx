import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { system } from '@chakra-ui/react/preset';
import { Toaster } from 'react-hot-toast';
import Home from './pages/home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

export default function App(){
  return (
    <ChakraProvider value={system}>
      <BrowserRouter>
      < Toaster position='top-center'/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}