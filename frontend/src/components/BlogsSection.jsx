import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';
import { blogs } from '../mock/mockData';
import { Card, CardContent } from './ui/card';

const BlogsSection = () => {
  return (
    <section className="max-w-[1600px] mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Latest Blogs By MyTyles</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogs.map((blog) => (
          <Link key={blog.id} to={blog.link} className="group">
            <Card className="overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-4">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    <span>By {blog.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{blog.date}</span>
                  </div>
                </div>
                <h3 className="text-gray-900 font-semibold text-base line-clamp-2 group-hover:text-[#FF8C00] transition-colors">
                  {blog.title}
                </h3>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BlogsSection;