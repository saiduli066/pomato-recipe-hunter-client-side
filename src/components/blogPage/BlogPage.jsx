import React from "react";
import { FaUser, FaCalendarAlt, FaArrowRight, FaTag } from "react-icons/fa";

const BlogPage = () => {
  const blogs = [
    {
      id: 1,
      title: "The Subtle Art of the Perfect Pavlova",
      excerpt:
        "Pavlova is the quintessential Aussie dessert. It features a crisp meringue shell with a soft, marshmallow-like center, topped generously with whipped cream and seasonal fruits like passionfruit, kiwi, and strawberries. Achieving that perfect texture requires patience and precision.",
      author: "Sarah Jenkins",
      date: "Oct 12, 2023",
      category: "Dessert",
      image:
        "https://images.unsplash.com/photo-1629119766465-987c10b428d0?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      title: "Sunday Roast: An Australian Tradition",
      excerpt:
        "A traditional 'barbie' usually involves grilling sausages (snags), steaks, lamb chops, and fresh seafood. However, the Sunday Roast holds a special place in family gatherings, often featuring slow-roasted lamb with mint sauce and crispy potatoes.",
      author: "Mike Ross",
      date: "Sep 28, 2023",
      category: "Culture",
      image:
        "https://images.unsplash.com/photo-1544025162-d76690b67f11?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      title: "Rise of the Flat White",
      excerpt:
        "The 'Flat White' is Australia's gift to the coffee world. It consists of espresso with microfoam (steamed milk with small, fine bubbles), resulting in a glossy, velvety consistency without the massive foam head of a cappuccino. Here represents the cafe culture of Melbourne.",
      author: "Ken Adams",
      date: "Sep 15, 2023",
      category: "Beverage",
      image:
        "https://images.unsplash.com/photo-1461023058943-716d10468700?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 4,
      title: "Anzac Biscuits: History in a Bite",
      excerpt:
        "Anzac biscuits are legendary oatmeal cookies made with golden syrup and desiccated coconut. They have historical significance from WWI and remain a beloved treat for their durability and delicious taste.",
      author: "Elena Fisher",
      date: "Aug 30, 2023",
      category: "History",
      image:
        "https://images.unsplash.com/photo-1599785209796-786432b228bc?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 5,
      title: "The Great Meat Pie Debate",
      excerpt:
        "What makes a true Australian meat pie? Is it the flaky pastry, the rich gravy, or the quality of the minced beef? We dive deep into local bakeries to find the gold standard of this iconic on-the-go lunch.",
      author: "Tom Hiddleston",
      date: "Aug 10, 2023",
      category: "Street Food",
      image:
        "https://plus.unsplash.com/premium_photo-1664472646639-6617a94467dc?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 6,
      title: "Seafood Feasts of the Coast",
      excerpt:
        "With thousands of kilometers of coastline, it's no surprise that Barramundi and Moreton Bay Bugs are staples. Learn how to prepare fresh catch simply to let the natural ocean flavors shine through.",
      author: "Gordon R.",
      date: "Jul 22, 2023",
      category: "Seafood",
      image:
        "https://images.unsplash.com/photo-1615141982906-6466a125ff76?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      {/* Header */}
      <div className="bg-slate-900 text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Culinary Insights
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Explore stories behind the flavors. From historical origins to
            modern twists, deep dive into the essence of Australian cooking.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-600 rounded-full flex items-center gap-1 shadow-sm">
                    <FaTag className="text-[10px]" /> {blog.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-slate-400 mb-4 font-medium uppercase tracking-wide">
                  <div className="flex items-center gap-1.5">
                    <FaCalendarAlt />
                    {blog.date}
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <FaUser />
                    {blog.author}
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-slate-800 mb-4 leading-tight group-hover:text-amber-600 transition-colors">
                  {blog.title}
                </h2>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                  {blog.excerpt}
                </p>

                <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                  <button className="text-amber-600 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all group-hover/btn pb-1 border-b-2 border-transparent hover:border-amber-600">
                    Read Article <FaArrowRight className="text-xs" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
