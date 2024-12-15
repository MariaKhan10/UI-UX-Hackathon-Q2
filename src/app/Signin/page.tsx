import React from 'react'
import { GalleryVerticalEnd } from "lucide-react"
import { LoginForm } from "@/components/login-form"
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Stillyouneed from '../components/Stillyouneed'
import Footer from '../components/Footer'

export default function LoginPage() {
    return (
        <div>
        <Navbar />
      <div className="relative">
  {/* First Image */}
  <Image
    src="/pictures/ourmenu.png"
    alt="menu"
    width={1920}
    height={550} 
    className="w-full object-cover"
  />




<div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
        <div className="flex w-full max-w-sm flex-col gap-6">
          <a href="#" className="flex items-center gap-2 self-center font-medium">
            
          </a>
          <LoginForm />
        </div>
      </div>
        </div>

        <Stillyouneed />
        <Footer />
        </div>
   
   
      
    )
  }