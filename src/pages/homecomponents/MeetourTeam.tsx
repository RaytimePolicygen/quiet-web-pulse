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
    name: 'Ashwin K V',
    role: 'COO',
    image: '/coo.png',
    social: {
      linkedin: '#',
      twitter: '#',
      instagram: '#'
    },
    Description: "Skilled professional with 10 years of deep expertise in embedded software and functional safety within the automotive industry. Worked for Rivian, FCA, Byton and Merc Benz."
  }
];

const MeetourTeam: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex justify-center mb-6">
                <div className="relative w-40 h-40">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full ring-4 ring-gray-100 group-hover:ring-gray-200 transition-all duration-300"
                  />
                </div>
              </div>
              <div className="text-center space-y-3">
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-gray-600 font-medium">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.Description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetourTeam;