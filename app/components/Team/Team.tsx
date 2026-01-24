import React from 'react';
import TeamMember from './TeamMember';

const Team = () => {
  return (
    <div
      id="team"
      className="m-4 lg:m-8 bg-gradient-to-b from-purple-200/40 to-transparent z-0 border-2 border-orange-200 rounded-3xl shadow-2xl"
    >
      {/* Header */}
      <div className="p-8 flex flex-col items-center">
        <h1 className="text-[#0fa0a3] font-bold text-3xl sm:text-4xl mt-6 text-center">
          Meet the Team
        </h1>
        <div className="bg-[#22c9cc] w-40 sm:w-60 h-2 rounded-full mt-4"></div>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
        <TeamMember
          name="Sawia Hassan"
          role="Founder & Chairperson"
          imageUrl="/Sawia.jpeg"
        />
        <TeamMember
          name="Asiya Mohamed"
          role="Founder & Programs Director and Coordinator"
          imageUrl="/Asiya.jpeg"
        />
        <TeamMember
          name="Michelle Wanjiru Mwangi"
          role="Finance manager , communications manager"
          imageUrl="/Mitchell.jpeg"
        />
        
      </div>
    </div>
  );
};

export default Team;
