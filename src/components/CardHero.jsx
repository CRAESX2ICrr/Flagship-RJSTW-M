"use client";

import CardSwap, { Card } from "@/components/CardSwap";

export default function Feed() {
  return (
    <div className="relative w-[420px] h-[480px] overflow-visible">
      <CardSwap
        cardDistance={60}
        verticalDistance={70}
        delay={5000}
        pauseOnHover={false}
        height={520} width={720}
      >
        <Card>
          <h3 className="text-white text-xl">‎ All New IPhone 17</h3>
          <p className="text-gray-300">Now 240hz base</p>
          <div className="w-full h-full overflow-hidden rounded-md">
            <img src="/images/dash/one.jpg" alt="iPhone 17" className="w-full h-full object-cover object-center"/>
          </div>
        </Card>

        <Card>
          <h3 className="text-white text-xl">‎ Does Your Screen Bend</h3>
          <p className="text-gray-300">Get more Screen with your next fold or flip</p>
          <img src="/images/dash/two.jpg" alt="Fold" className="w-full h-full object-cover object-center"/>
        </Card>

        <Card>
          <h3 className="text-white text-xl">‎ Hypercharge your phone</h3>
          <p className="text-gray-300">Xiaomi 0 to a 100 in 20min or less</p>
          <img src="/images/dash/three.jpg" alt="Fold" className="w-full h-full object-cover object-center"/>
        </Card>
      </CardSwap>
    </div>
  );
}
