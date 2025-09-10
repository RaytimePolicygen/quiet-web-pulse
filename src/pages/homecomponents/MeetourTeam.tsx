
import React from 'react';

const teamMembers = [
  {
    name: 'Chris J Eckert',
    role: 'CEO',
    image: '/ceo.png',
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    },
    Description: "Nearly three decades of extensive automotive industry experience, spanning design, engineering, and leadership roles at top-tier OEMs and startups. His career highlights include pivotal positions at Tesla, NIO, Toyota, and Ford."
  },
  {
    name: 'Shalin James Anto',
    role: 'CTO',
    image: '/cto.png',
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    },
    Description:"13 Years of Automotive R&D expertise. Worked for Major OEMs like Honda, Byton, Tesla. Contributed to Waymo's Autonomous vehicles for 4 years on multiple platforms."
  },
  {
    name: 'Pradeep P S',
    role: 'CIO',
    image: '/cio.png',
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    },
    Description:"8 years of experience as a Founder of B2C startup. Scaled business to 3L customer base. Accelerated by UN SDG accelerator"
  },
  {
    name: 'Philip Reinckens',
    role: 'Advisor',
    image: '/lovable-uploads/88f92526-efa6-4fa8-b737-7e0b4ac79f14.png',
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    },
    Description: "Philip Reinckens is a mobility industry veteran and transformational leader, former CEO of Spin, now SVP at Gatik, with proven expertise scaling automotive and tech businesses."
  }
];

const MeetourTeam: React.FC = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all duration-300">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                </div>
              </div>
              <div className="text-center space-y-4">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {member.name}
                </h3>
                <div className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                  {member.role}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.Description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetourTeam;
