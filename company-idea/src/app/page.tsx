'use client';

import Under from "@/pages/under";
import Nav from "@/components/navbar";
import NoPage from "@/pages/404";

import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function Home() {
  return (
    <main>
      <Nav />
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Under />} />
            {/* <Route index element={<Home />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </main>

  )
}
