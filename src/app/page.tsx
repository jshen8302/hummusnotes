// app/page.tsx or similar file where your main content lives

import Image from 'next/image';
// Import your blog card components, etc.

export default function HomePage() {
  return (
    <div className="flex flex-col">

      {/* Hero Section */}
      <section className="h-[calc(100vh-4rem)] flex flex-col bg-amber-50 max-w-[740px]">
        <div>
          <Image 
            src="/mr-beast-thumbnail-money-pool.jpg"
            alt="Hero Banner"
            width={740}
            height={397}
          />
        </div>
        <p className="text-4xl font-extrabold bg-amber-600">
          How Mr. Beast represents all that is left of The American Dream
        </p>
        <div className="flex gap-2 bg-blue-500">
          <a>
            James Shen
          </a>
          <a>
            Nov 26, 2025
          </a>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae auctor arcu.
          Mauris eget velit id erat vulputate fringilla quis id justo. 
          Sed pharetra... <span>Read More</span>
        </p>

      </section>

      {/* Recent Blog Section */}
      <section className="h-screen bg-gray-50 p-8">
       
      </section>
      
    </div>
  );
}
