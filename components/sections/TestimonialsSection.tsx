"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import { testimonialsData } from "@/lib/data/testimonials";

export function TestimonialsSection() {
  return (
    <section
      className="py-16 px-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
      id="testimonials"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 flame-text bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent animate-fade-in-up">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">
                      {testimonial.name}
                    </CardTitle>
                    <CardDescription>
                      {testimonial.role} At {testimonial.company}
                    </CardDescription>
                  </div>
                </div>
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <Quote className="h-8 w-8 text-blue-500/20 absolute -top-2 -left-2" />
                  <p className="text-gray-600 dark:text-gray-300 italic pl-6">
                    {testimonial.content}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
