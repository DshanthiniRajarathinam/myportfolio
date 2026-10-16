import React from 'react';
import { SectionHeader } from '../components/common/SectionHeader';
import { TimelineItem } from '../components/timeline/TimelineItem';
import { timelineData } from '../data/timelineData';
import './EducationSection.css';

export function EducationSection() {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <SectionHeader
          badge="Academic Background"
          title="My"
          highlight="Education"
          subtitle="B.E. Computer Science and Engineering."
        />

        <div className="timeline-wrapper">
          {/* Continuous Vertical Track Line */}
          <div className="timeline-vertical-line" />

          {/* Timeline Items */}
          <div className="timeline-items-list">
            {timelineData.map((item, index) => (
              <TimelineItem
                key={item.id}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
