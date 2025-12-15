import React from 'react';
import { CheckCircle, Zap, Home, ClipboardList, User, Calendar } from 'lucide-react';

export const MVPFocus = () => {
  return (
    <section className="py-16 lg:py-24 bg-gray-900 text-white overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Strategic Content */}
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-900 border border-blue-700 text-blue-300 text-sm font-medium mb-6">
              MVP Strategy
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Focusing on Accountability: <br/>
              <span className="text-blue-400">Assign, Report, and Enforce</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              For the MVP, we stripped away complex gamification to focus on the <b>core loop of responsibility</b>. Users need to clearly see their tasks, report completion, and face transparent consequences (penalties) for missed duties.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gray-800 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Validation Goal</h4>
                  <p className="text-sm text-gray-400">Prove that transparent penalties increase task completion rates.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-gray-800 rounded-lg">
                  <Zap className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Core Functionality</h4>
                  <p className="text-sm text-gray-400">Seamless task assignment, reporting, and penalty application.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Visual Representation of MVP Scope */}
          <div className="relative bg-gray-800 rounded-2xl p-8 border border-gray-700 shadow-2xl">
             {/* <div className="absolute -top-4 -right-4 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                Phase 1 Scope
             </div> */}
             
             <h3 className="text-lg font-bold mb-6 text-white border-b border-gray-700 pb-4">
                MVP Feature Set
             </h3>
             
             <ul className="space-y-5">
                {/* 1. Create House */}
                <li className="flex items-center justify-between group">
                   <div className="flex items-center gap-3 text-gray-300 group-hover:text-white transition-colors">
                      <Home className="w-5 h-5 text-blue-400" />
                      <span>Create Houses & Invite</span>
                   </div>
                   <span className="bg-green-500/10 text-green-400 text-xs px-2 py-1 rounded border border-green-500/20">Ready</span>
                </li>

                {/* 2. Giao việc (Task Assignment) */}
                <li className="flex items-center justify-between group">
                   <div className="flex items-center gap-3 text-gray-300 group-hover:text-white transition-colors">
                      <Calendar className="w-5 h-5 text-purple-400" />
                      <span>Task Assignment & View</span>
                   </div>
                   <span className="bg-green-500/10 text-green-400 text-xs px-2 py-1 rounded border border-green-500/20">Ready</span>
                </li>

                {/* 3. Báo trực nhật (Report Duty) */}
                <li className="flex items-center justify-between group">
                   <div className="flex items-center gap-3 text-gray-300 group-hover:text-white transition-colors">
                      <ClipboardList className="w-5 h-5 text-yellow-400" />
                      <span>Duty Reporting (Check-in)</span>
                   </div>
                   <span className="bg-green-500/10 text-green-400 text-xs px-2 py-1 rounded border border-green-500/20">Ready</span>
                </li>

                {/* 4. Penalty (Xem & Áp dụng) */}
                {/* <li className="flex items-center justify-between group">
                   <div className="flex items-center gap-3 text-gray-300 group-hover:text-white transition-colors">
                      <AlertTriangle className="w-5 h-5 text-red-400" />
                      <span>Penalty System (View & Apply)</span>
                   </div>
                   <span className="bg-green-500/10 text-green-400 text-xs px-2 py-1 rounded border border-green-500/20">Ready</span>
                </li> */}
                
                {/* 5. Quản lý thông tin cá nhân */}
                <li className="flex items-center justify-between group">
                   <div className="flex items-center gap-3 text-gray-300 group-hover:text-white transition-colors">
                      <User className="w-5 h-5 text-gray-400" />
                      <span>Profile Management</span>
                   </div>
                   <span className="bg-green-500/10 text-green-400 text-xs px-2 py-1 rounded border border-green-500/20">Ready</span>
                </li>
             </ul>
          </div>

        </div>
      </div>
    </section>
  );
};