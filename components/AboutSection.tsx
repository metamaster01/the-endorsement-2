"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Film, Star, Users } from "lucide-react";
import MotionCard from "./MotionCard";

const AboutSection = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6" id="about">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 rounded-full bg-v0yellow" />
            <span className="text-base sm:text-lg font-semibold text-gray-700">About Us</span>
          </div>
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Powered by{" "}
              <span className="text-v0yellow">
                Elohim Film Production Pvt. Ltd.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl">
              The Endorsement Co. is a premier celebrity and influencer marketing agency, founded as a subsidiary of
              Elohim Film Production, a leading film production company. Together, we bridge the worlds of entertainment
              and marketing, offering unparalleled access to celebrity talent and influencer networks.
            </p>
            <Button className="bg-v0yellow text-black hover:bg-v0yellow/90 px-8 py-4 text-base sm:text-lg font-semibold rounded-lg sm:rounded-full shadow-md">
              More About Us
            </Button>
          </div>
        </div>

        {/* Feature Cards Section */}
        <div className="rounded-xl p-4 sm:p-6 md:p-10 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <MotionCard>
              <div className="flex flex-col items-start space-y-4">
                <div className="w-14 h-14 rounded-full bg-v0yellow flex items-center justify-center">
                  <Film className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                  Legacy of Excellence
                </h3>
                <p className="text-gray-700 text-base">
                  With years of expertise in filmmaking, Elohim Film Production has built strong relationships with
                  top-tier celebrities, directors, and influencers. This industry insight and access are now fuelling
                  the growth of The Endorsement Co.
                </p>
              </div>
            </MotionCard>

            <MotionCard>
              <div className="flex flex-col items-start space-y-4">
                <div className="w-14 h-14 rounded-full bg-v0yellow flex items-center justify-center">
                  <Star className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                  Creative Synergy
                </h3>
                <p className="text-gray-700 text-base">
                  Leveraging the creative expertise of Elohim Film Production, The Endorsement Co. offers a unique blend
                  of entertainment and marketing, producing high-quality content alongside influencer-driven campaigns.
                </p>
              </div>
            </MotionCard>

            <MotionCard>
              <div className="flex flex-col items-start space-y-4">
                <div className="w-14 h-14 rounded-full bg-v0yellow flex items-center justify-center">
                  <Users className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                  Cross-Industry Power
                </h3>
                <p className="text-gray-700 text-base">
                  The partnership between Elohim Film Production and The Endorsement Co. ensures seamless integration of
                  film production, celebrity endorsements, and digital marketing, creating a holistic approach to brand
                  development.
                </p>
              </div>
            </MotionCard>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="bg-v0yellow text-black rounded-lg p-6 sm:p-8 md:p-12 shadow-md">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Our Story
            </h2>
            <p className="text-base sm:text-lg mb-4">
              Born from the creative powerhouse of Elohim Film Production, The Endorsement Co. bridges the gap between
              authentic storytelling and strategic brand marketing. Our parent company&apos;s legacy in film production
              gives us unparalleled access to talent and industry insights.
            </p>
            <p className="text-base sm:text-lg">
              Our unique position in the entertainment ecosystem allows us to create campaigns that feel natural,
              engaging, and drive real business impact for brands across FMCG, fashion, technology, automotive, and
              beyond.
            </p>
          </div>

          <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/aboutus1.png"
              alt="Film production behind the scenes"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="absolute -bottom-4 -right-4 bg-v0yellow text-black px-4 py-2 rounded-lg font-semibold flex items-center gap-2 shadow-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
